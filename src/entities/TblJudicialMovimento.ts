import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicialFase } from "./TblJudicialFase";
import { TblJudicial } from "./TblJudicial";
import { TblOrgao } from "./TblOrgao";

@Index("PK_TBL_JUDICIAL_MOVIMENTO", ["codJudicial", "codMovimento"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_MOVIMENTO")
export class TblJudicialMovimento {
  @Column("clob", { name: "TXT_COMPLEMENTO", nullable: true })
  txtComplemento: string | null;

  @Column("date", { name: "DT_PUBLICACAO", default: () => "sysdate" })
  dtPublicacao: Date;

  @Column("date", { name: "DT_MOVIMENTO", default: () => "sysdate" })
  dtMovimento: Date;

  @Column("number", { name: "COD_USUARIO_MOVIMENTO", scale: 0 })
  codUsuarioMovimento: number;

  @Column("number", { name: "COD_PUBLICACAO_TIPO", nullable: true, scale: 0 })
  codPublicacaoTipo: number | null;

  @Column("number", { name: "COD_ORIGEM", scale: 0, default: () => "(0)" })
  codOrigem: number;

  @Column("number", { primary: true, name: "COD_MOVIMENTO", scale: 0 })
  codMovimento: number;

  @Column("number", { name: "COD_LIDA", scale: 0, default: () => "(0)" })
  codLida: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @ManyToOne(
    () => TblJudicialFase,
    (tblJudicialFase) => tblJudicialFase.tblJudicialMovimentos
  )
  @JoinColumn([
    { name: "COD_JUDICIAL_FASE", referencedColumnName: "codJudicialFase" },
  ])
  codJudicialFase: TblJudicialFase;

  @ManyToOne(
    () => TblJudicial,
    (tblJudicial) => tblJudicial.tblJudicialMovimentos
  )
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblJudicialMovimentos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblMinuta } from "./TblMinuta";
import { TblMotivo } from "./TblMotivo";
import { TblOrgao } from "./TblOrgao";
import { TblPrioridade } from "./TblPrioridade";

@Index("PK_TBL_MINUTA_MOVIMENTO", ["codMinuta", "codMovimento"], {
  unique: true,
})
@Entity("TBL_MINUTA_MOVIMENTO")
export class TblMinutaMovimento {
  @Column("clob", { name: "TXT_DESPACHO", nullable: true })
  txtDespacho: string | null;

  @Column("varchar2", {
    name: "TXT_CERTIFICADO_RECEBIMENTO",
    nullable: true,
    length: 50,
  })
  txtCertificadoRecebimento: string | null;

  @Column("varchar2", {
    name: "TXT_CERTIFICADO_MOVIMENTO",
    nullable: true,
    length: 50,
  })
  txtCertificadoMovimento: string | null;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_MOVIMENTO", default: () => "sysdate" })
  dtMovimento: Date;

  @Column("number", {
    name: "COD_USUARIO_RECEBIMENTO",
    nullable: true,
    scale: 0,
  })
  codUsuarioRecebimento: number | null;

  @Column("number", { name: "COD_USUARIO_MOVIMENTO", scale: 0 })
  codUsuarioMovimento: number;

  @Column("number", { name: "COD_SITUACAO", scale: 0, default: () => "(1)" })
  codSituacao: number;

  @Column("number", { name: "COD_SAIDA", nullable: true, scale: 0 })
  codSaida: number | null;

  @Column("number", {
    name: "COD_RECEBIMENTO",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codRecebimento: number | null;

  @Column("number", { name: "COD_MOVIMENTO", scale: 0, default: () => "(1)" })
  codMovimento: number;

  @Column("number", { name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @ManyToOne(() => TblMinuta, (tblMinuta) => tblMinuta.tblMinutaMovimentos)
  @JoinColumn([{ name: "COD_MINUTA", referencedColumnName: "codMinuta" }])
  codMinuta2: TblMinuta;

  @ManyToOne(() => TblMotivo, (tblMotivo) => tblMotivo.tblMinutaMovimentos)
  @JoinColumn([{ name: "COD_MOTIVO", referencedColumnName: "codMotivo" }])
  codMotivo: TblMotivo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblMinutaMovimentos)
  @JoinColumn([{ name: "COD_ORGAO_ORIGEM", referencedColumnName: "codOrgao" }])
  codOrgaoOrigem: TblOrgao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblMinutaMovimentos2)
  @JoinColumn([{ name: "COD_ORGAO_DESTINO", referencedColumnName: "codOrgao" }])
  codOrgaoDestino: TblOrgao;

  @ManyToOne(
    () => TblPrioridade,
    (tblPrioridade) => tblPrioridade.tblMinutaMovimentos
  )
  @JoinColumn([
    { name: "COD_PRIORIDADE", referencedColumnName: "codPrioridade" },
  ])
  codPrioridade: TblPrioridade;
}

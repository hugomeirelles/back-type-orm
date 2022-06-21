import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoAtividade } from "./TblFluxoTrabalhoAtividade";
import { TblAcao } from "./TblAcao";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_FLUXO_TRABALHO_ACAO", ["codFluxoTrabalhoAcao"], { unique: true })
@Entity("TBL_FLUXO_TRABALHO_ACAO")
export class TblFluxoTrabalhoAcao {
  @Column("varchar2", { name: "TXT_OBSERVACAO", nullable: true, length: 500 })
  txtObservacao: string | null;

  @Column("varchar2", {
    name: "TXT_MOTIVO_ATRASO",
    nullable: true,
    length: 500,
  })
  txtMotivoAtraso: string | null;

  @Column("date", { name: "DT_ACAO" })
  dtAcao: Date;

  @Column("number", {
    name: "COD_PROTOCOLO_JUNTADA",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codProtocoloJuntada: number | null;

  @Column("number", {
    name: "COD_ORGAO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrgao: number | null;

  @Column("number", {
    name: "COD_ORDEM_JUNTADA",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrdemJuntada: number | null;

  @Column("number", {
    name: "COD_JUNTADA",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codJuntada: number | null;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO_ACAO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoAcao: number;

  @Column("number", {
    name: "COD_FINALIZACAO_REVELIA",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codFinalizacaoRevelia: number | null;

  @ManyToOne(
    () => TblFluxoTrabalhoAtividade,
    (tblFluxoTrabalhoAtividade) =>
      tblFluxoTrabalhoAtividade.tblFluxoTrabalhoAcaos
  )
  @JoinColumn([
    {
      name: "COD_FLUXO_TRABALHO_ATIVIDADE",
      referencedColumnName: "codFluxoTrabalhoAtividade",
    },
  ])
  codFluxoTrabalhoAtividade: TblFluxoTrabalhoAtividade;

  @ManyToOne(() => TblAcao, (tblAcao) => tblAcao.tblFluxoTrabalhoAcaos)
  @JoinColumn([{ name: "COD_ACAO", referencedColumnName: "codAcao" }])
  codAcao: TblAcao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblFluxoTrabalhoAcaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

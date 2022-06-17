import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblFluxoTrabalhoAcao } from "./TblFluxoTrabalhoAcao";
import { TblFluxoTrabalhoExecucao } from "./TblFluxoTrabalhoExecucao";
import { TblOrgao } from "./TblOrgao";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblFluxoTrabalhoComentario } from "./TblFluxoTrabalhoComentario";
import { TblFluxoTrabDistribuicao } from "./TblFluxoTrabDistribuicao";

@Index("PK_FLUXO_TRABALHO_ATIVIDADE", ["codFluxoTrabalhoAtividade"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRABALHO_ATIVIDADE")
export class TblFluxoTrabalhoAtividade {
  @Column("varchar2", { name: "TXT_OBSERVACAO", nullable: true, length: 500 })
  txtObservacao: string | null;

  @Column("varchar2", {
    name: "TXT_JUSTIFICATIVA_ATRASO",
    nullable: true,
    length: 500,
  })
  txtJustificativaAtraso: string | null;

  @Column("date", { name: "DT_PREVISTA_ATIVIDADE", nullable: true })
  dtPrevistaAtividade: Date | null;

  @Column("date", { name: "DT_INICIO_ATIVIDADE", nullable: true })
  dtInicioAtividade: Date | null;

  @Column("date", { name: "DT_FIM_ATIVIDADE", nullable: true })
  dtFimAtividade: Date | null;

  @Column("number", {
    name: "COD_SUBFLUXO_INICIADO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codSubfluxoIniciado: number | null;

  @Column("number", {
    name: "COD_PROTOCOLO_FISICO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codProtocoloFisico: number | null;

  @Column("number", {
    name: "COD_ORGAO_FECHAMENTO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrgaoFechamento: number | null;

  @Column("number", {
    name: "COD_ORGAO_ANTERIOR_SOBRESTAR",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrgaoAnteriorSobrestar: number | null;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO_ATIVIDADE",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoAtividade: number;

  @Column("number", {
    name: "COD_DIA_SUSPENCAO_DECORRIDO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codDiaSuspencaoDecorrido: number | null;

  @Column("number", { name: "COD_ATIVIDADE_FLUXO", precision: 22, scale: 0 })
  codAtividadeFluxo: number;

  @Column("number", {
    name: "COD_ACAO_FECHAMENTO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAcaoFechamento: number | null;

  @OneToMany(
    () => TblFluxoTrabalhoAcao,
    (tblFluxoTrabalhoAcao) => tblFluxoTrabalhoAcao.codFluxoTrabalhoAtividade
  )
  tblFluxoTrabalhoAcaos: TblFluxoTrabalhoAcao[];

  @ManyToOne(
    () => TblFluxoTrabalhoExecucao,
    (tblFluxoTrabalhoExecucao) =>
      tblFluxoTrabalhoExecucao.tblFluxoTrabalhoAtividades
  )
  @JoinColumn([
    {
      name: "COD_FLUXO_TRABALHO_EXECUCAO",
      referencedColumnName: "codFluxoTrabalhoExecucao",
    },
  ])
  codFluxoTrabalhoExecucao: TblFluxoTrabalhoExecucao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblFluxoTrabalhoAtividades)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblFluxoTrabalhoAtividades
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @OneToMany(
    () => TblFluxoTrabalhoComentario,
    (tblFluxoTrabalhoComentario) =>
      tblFluxoTrabalhoComentario.codFluxoTrabalhoAtividade
  )
  tblFluxoTrabalhoComentarios: TblFluxoTrabalhoComentario[];

  @OneToMany(
    () => TblFluxoTrabDistribuicao,
    (tblFluxoTrabDistribuicao) =>
      tblFluxoTrabDistribuicao.codFluxoTrabalhoAtividade
  )
  tblFluxoTrabDistribuicaos: TblFluxoTrabDistribuicao[];
}

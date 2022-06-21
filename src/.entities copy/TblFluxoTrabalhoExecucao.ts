import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblFluxoTrabAcompanhamento } from "./TblFluxoTrabAcompanhamento";
import { TblFluxoTrabalhoAtividade } from "./TblFluxoTrabalhoAtividade";
import { TblProtocolo } from "./TblProtocolo";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblFluxoTrabalhoSituacao } from "./TblFluxoTrabalhoSituacao";
import { TblOrgao } from "./TblOrgao";

@Index("PK_FLUXO_TRABALHO_EXECUCAO", ["codFluxoTrabalhoExecucao"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRABALHO_EXECUCAO")
export class TblFluxoTrabalhoExecucao {
  @Column("number", { name: "COD_NUMERO_FLUXO", precision: 22, scale: 0 })
  codNumeroFluxo: number;

  @Column("number", {
    name: "COD_FLUXO_TRABALHO_EXECUCAO_P",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoExecucaoP: number | null;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO_EXECUCAO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoExecucao: number;

  @Column("number", { name: "COD_FLUXO_TRABALHO", precision: 22, scale: 0 })
  codFluxoTrabalho: number;

  @Column("number", {
    name: "COD_ATIVO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtivo: number | null;

  @Column("number", {
    name: "COD_ATIVIDADE_FLUXO_ATUAL",
    precision: 22,
    scale: 0,
  })
  codAtividadeFluxoAtual: number;

  @Column("number", { name: "COD_ANO_FLUXO", precision: 22, scale: 0 })
  codAnoFluxo: number;

  @Column("date", { name: "DT_FLUXO_CRIACAO" })
  dtFluxoCriacao: Date;

  @Column("number", {
    name: "COD_RECEBIMENTO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codRecebimento: number | null;

  @OneToMany(
    () => TblFluxoTrabAcompanhamento,
    (tblFluxoTrabAcompanhamento) =>
      tblFluxoTrabAcompanhamento.codFluxoTrabalhoExecucao
  )
  tblFluxoTrabAcompanhamentos: TblFluxoTrabAcompanhamento[];

  @OneToMany(
    () => TblFluxoTrabalhoAtividade,
    (tblFluxoTrabalhoAtividade) =>
      tblFluxoTrabalhoAtividade.codFluxoTrabalhoExecucao
  )
  tblFluxoTrabalhoAtividades: TblFluxoTrabalhoAtividade[];

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblFluxoTrabalhoExecucaos
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo: TblProtocolo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblFluxoTrabalhoExecucaos
  )
  @JoinColumn([
    { name: "COD_USUARIO_CRIACAO", referencedColumnName: "codUsuario" },
  ])
  codUsuarioCriacao: TblSegUsuario;

  @ManyToOne(
    () => TblFluxoTrabalhoSituacao,
    (tblFluxoTrabalhoSituacao) =>
      tblFluxoTrabalhoSituacao.tblFluxoTrabalhoExecucaos
  )
  @JoinColumn([
    {
      name: "COD_FLUXO_TRABALHO_SITUACAO",
      referencedColumnName: "codFluxoTrabalhoSituacao",
    },
  ])
  codFluxoTrabalhoSituacao: TblFluxoTrabalhoSituacao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblFluxoTrabalhoExecucaos)
  @JoinColumn([{ name: "COD_ORGAO_ATUAL", referencedColumnName: "codOrgao" }])
  codOrgaoAtual: TblOrgao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblFluxoTrabalhoExecucaos2)
  @JoinColumn([{ name: "COD_ORGAO_CRIACAO", referencedColumnName: "codOrgao" }])
  codOrgaoCriacao: TblOrgao;
}

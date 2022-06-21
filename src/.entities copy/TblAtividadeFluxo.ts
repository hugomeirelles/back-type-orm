import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoConfigura } from "./TblFluxoTrabalhoConfigura";

@Entity("TBL_ATIVIDADE_FLUXO")
export class TblAtividadeFluxo {
  @Column("varchar2", { name: "TXT_NOME_REDUZIDO_ATIVIDADE", length: 50 })
  txtNomeReduzidoAtividade: string;

  @Column("varchar2", { name: "TXT_NOME_ATIVIDADE", length: 100 })
  txtNomeAtividade: string;

  @Column("clob", { name: "TXT_DESCRICAO_ATIVIDADE", nullable: true })
  txtDescricaoAtividade: string | null;

  @Column("number", {
    name: "NUM_PRAZO_ATIVIDADE",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  numPrazoAtividade: number | null;

  @Column("number", {
    name: "NUM_PERCENTUAL_ATIVIDADE",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  numPercentualAtividade: number | null;

  @Column("number", {
    name: "COD_PROXIMA_ATIVIDADE_ATRASO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codProximaAtividadeAtraso: number | null;

  @Column("number", {
    name: "COD_ORGAO_ATIVIDADE_ATRASO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrgaoAtividadeAtraso: number | null;

  @Column("number", {
    name: "COD_ORDEM",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrdem: number | null;

  @Column("number", {
    name: "COD_NOTIFICAR_EXECUCAO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codNotificarExecucao: number | null;

  @Column("number", {
    name: "COD_ATIVO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtivo: number | null;

  @Column("number", { name: "COD_ATIVIDADE_INICIAL", precision: 22, scale: 0 })
  codAtividadeInicial: number;

  @Column("number", { name: "COD_ATIVIDADE_FLUXO", precision: 22, scale: 0 })
  codAtividadeFluxo: number;

  @ManyToOne(
    () => TblFluxoTrabalhoConfigura,
    (tblFluxoTrabalhoConfigura) => tblFluxoTrabalhoConfigura.tblAtividadeFluxos
  )
  @JoinColumn([
    { name: "COD_FLUXO_TRABALHO", referencedColumnName: "codFluxoTrabalho" },
  ])
  codFluxoTrabalho: TblFluxoTrabalhoConfigura;
}

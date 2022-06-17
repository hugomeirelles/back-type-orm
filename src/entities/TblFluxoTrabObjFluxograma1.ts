import { Column, Entity } from "typeorm";

@Entity("TBL_FLUXO_TRAB_OBJ_FLUXOGRAMA1")
export class TblFluxoTrabObjFluxograma1 {
  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 100 })
  txtSigla: string | null;

  @Column("varchar2", {
    name: "TXT_POSICAO_SUBFLUXO_X_Y",
    nullable: true,
    length: 100,
  })
  txtPosicaoSubfluxoXY: string | null;

  @Column("varchar2", {
    name: "TXT_POSICAO_ORGAO_X_Y_W_H",
    nullable: true,
    length: 100,
  })
  txtPosicaoOrgaoXYWH: string | null;

  @Column("varchar2", {
    name: "TXT_POSICAO_FIM_X_Y",
    nullable: true,
    length: 100,
  })
  txtPosicaoFimXY: string | null;

  @Column("varchar2", {
    name: "TXT_POSICAO_DECISAO_X_Y",
    nullable: true,
    length: 100,
  })
  txtPosicaoDecisaoXY: string | null;

  @Column("varchar2", {
    name: "TXT_POSICAO_DECISAO_PARAL_X_Y",
    nullable: true,
    length: 1000,
  })
  txtPosicaoDecisaoParalXY: string | null;

  @Column("varchar2", {
    name: "TXT_POSICAO_DECISAO_ALTER_X_Y",
    nullable: true,
    length: 1000,
  })
  txtPosicaoDecisaoAlterXY: string | null;

  @Column("varchar2", {
    name: "TXT_POSICAO_ATIVIDADE_X_Y",
    nullable: true,
    length: 100,
  })
  txtPosicaoAtividadeXY: string | null;

  @Column("varchar2", {
    name: "TXT_NOME_ATIVIDADE",
    nullable: true,
    length: 100,
  })
  txtNomeAtividade: string | null;

  @Column("varchar2", {
    name: "TXT_IDENTIFICADOR_ACOES_PARAL",
    nullable: true,
    length: 1000,
  })
  txtIdentificadorAcoesParal: string | null;

  @Column("varchar2", {
    name: "TXT_ACOES_PARALELAS",
    nullable: true,
    length: 1000,
  })
  txtAcoesParalelas: string | null;

  @Column("varchar2", {
    name: "TXT_ACOES_ALTERNATIVAS",
    nullable: true,
    length: 1000,
  })
  txtAcoesAlternativas: string | null;

  @Column("number", {
    name: "NUM_ACOES",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  numAcoes: number | null;

  @Column("number", {
    name: "COD_SUBFLUXO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codSubfluxo: number | null;

  @Column("number", {
    name: "COD_ORGAO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrgao: number | null;

  @Column("number", {
    name: "COD_ORDEM_UNIDADE",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrdemUnidade: number | null;

  @Column("number", { name: "COD_OBJETO_FLUXOGRAMA", precision: 22, scale: 0 })
  codObjetoFluxograma: number;

  @Column("number", { name: "COD_FLUXO_TRABALHO", precision: 22, scale: 0 })
  codFluxoTrabalho: number;

  @Column("number", {
    name: "COD_ATIVIDADE_INICIAL",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtividadeInicial: number | null;

  @Column("number", {
    name: "COD_ATIVIDADE_FLUXO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtividadeFluxo: number | null;

  @Column("number", { name: "COD_ATIVIDADE_ALTERADA", precision: 22, scale: 0 })
  codAtividadeAlterada: number;
}

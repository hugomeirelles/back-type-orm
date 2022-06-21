import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoTipo } from "./TblContratoTipo";
import { TblContratoModalidade } from "./TblContratoModalidade";
import { TblContratoRegimeExecucao } from "./TblContratoRegimeExecucao";

@Index("PK_TBL_CONTRATO", ["codContrato"], { unique: true })
@Entity("TBL_CONTRATO")
export class TblContrato {
  @Column("varchar2", { name: "TXT_UGR", nullable: true, length: 45 })
  txtUgr: string | null;

  @Column("clob", { name: "TXT_TEXTO_INTEGRAL", nullable: true })
  txtTextoIntegral: string | null;

  @Column("varchar2", { name: "TXT_SABS", nullable: true, length: 20 })
  txtSabs: string | null;

  @Column("clob", { name: "TXT_RESCISAO_MOTIVO", nullable: true })
  txtRescisaoMotivo: string | null;

  @Column("varchar2", {
    name: "TXT_PRORROGACAO_TIPO",
    nullable: true,
    length: 255,
  })
  txtProrrogacaoTipo: string | null;

  @Column("varchar2", {
    name: "TXT_PLANO_INTERNO",
    nullable: true,
    length: 255,
  })
  txtPlanoInterno: string | null;

  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("clob", { name: "TXT_OBJETO", nullable: true })
  txtObjeto: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_PROTOCOLO",
    nullable: true,
    length: 15,
  })
  txtNumeroProtocolo: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_ATA_REGISTRO",
    nullable: true,
    length: 20,
  })
  txtNumeroAtaRegistro: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", length: 45 })
  txtNumero: string;

  @Column("varchar2", { name: "TXT_NOTA_EMPENHO", nullable: true, length: 12 })
  txtNotaEmpenho: string | null;

  @Column("varchar2", {
    name: "TXT_MODALIDADE_NUMERO",
    nullable: true,
    length: 50,
  })
  txtModalidadeNumero: string | null;

  @Column("varchar2", {
    name: "TXT_FUNDAMENTO_LEGAL",
    nullable: true,
    length: 500,
  })
  txtFundamentoLegal: string | null;

  @Column("varchar2", {
    name: "TXT_ELEMENTO_DESPESA",
    nullable: true,
    length: 50,
  })
  txtElementoDespesa: string | null;

  @Column("date", { name: "DT_VIGENCIA_INICIAL", nullable: true })
  dtVigenciaInicial: Date | null;

  @Column("date", { name: "DT_VIGENCIA_FINAL", nullable: true })
  dtVigenciaFinal: Date | null;

  @Column("date", { name: "DT_VIGENCIA_CONSOLIDADA", nullable: true })
  dtVigenciaConsolidada: Date | null;

  @Column("date", { name: "DT_RESCISAO", nullable: true })
  dtRescisao: Date | null;

  @Column("date", { name: "DT_PUBLICACAO_CONSOLIDADA", nullable: true })
  dtPublicacaoConsolidada: Date | null;

  @Column("date", { name: "DT_PUBLICACAO", nullable: true })
  dtPublicacao: Date | null;

  @Column("date", { name: "DT_MODALIDADE_REALIZACAO", nullable: true })
  dtModalidadeRealizacao: Date | null;

  @Column("date", { name: "DT_MODALIDADE_HOMOLOGACAO", nullable: true })
  dtModalidadeHomologacao: Date | null;

  @Column("date", { name: "DT_MODALIDADE_ADJUDICACAO", nullable: true })
  dtModalidadeAdjudicacao: Date | null;

  @Column("date", { name: "DT_MODALIDADE", nullable: true })
  dtModalidade: Date | null;

  @Column("date", { name: "DT_INICIO_CONSOLIDADA", nullable: true })
  dtInicioConsolidada: Date | null;

  @Column("date", { name: "DT_ENCERRAMENTO", nullable: true })
  dtEncerramento: Date | null;

  @Column("date", { name: "DT_EMPENHO", nullable: true })
  dtEmpenho: Date | null;

  @Column("date", { name: "DT_ASSINATURA", default: () => "SYSDATE" })
  dtAssinatura: Date;

  @Column("number", {
    name: "COD_VIGENCIA_INDETERMINADA",
    scale: 0,
    default: () => "(0)",
  })
  codVigenciaIndeterminada: number;

  @Column("number", {
    name: "COD_VALOR_TOTAL",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorTotal: number | null;

  @Column("number", {
    name: "COD_VALOR_SABS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorSabs: number | null;

  @Column("number", {
    name: "COD_VALOR_EMPENHO",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorEmpenho: number | null;

  @Column("number", {
    name: "COD_VALOR_CONSOLIDADO",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorConsolidado: number | null;

  @Column("number", { name: "COD_PROTOCOLO", nullable: true, scale: 0 })
  codProtocolo: number | null;

  @Column("number", {
    name: "COD_PRORROGACAO_LIMITE",
    nullable: true,
    scale: 0,
  })
  codProrrogacaoLimite: number | null;

  @Column("number", { name: "COD_PROGRAMA", nullable: true, scale: 0 })
  codPrograma: number | null;

  @Column("number", { name: "COD_PLANO_INTERNO", nullable: true, scale: 0 })
  codPlanoInterno: number | null;

  @Column("number", { name: "COD_PAGINA_PUBLICACAO", nullable: true, scale: 0 })
  codPaginaPublicacao: number | null;

  @Column("number", { name: "COD_ORGAO_UGR", nullable: true, scale: 0 })
  codOrgaoUgr: number | null;

  @Column("number", { name: "COD_ORGAO_DEMANDANTE", nullable: true, scale: 0 })
  codOrgaoDemandante: number | null;

  @Column("number", { name: "COD_NUMERO_PUBLICACAO", nullable: true, scale: 0 })
  codNumeroPublicacao: number | null;

  @Column("number", { name: "COD_MOEDA", nullable: true, scale: 0 })
  codMoeda: number | null;

  @Column("number", {
    name: "COD_FORNECEDOR_RESPONSAVEL",
    nullable: true,
    scale: 0,
  })
  codFornecedorResponsavel: number | null;

  @Column("number", { name: "COD_FORNECEDOR", scale: 0 })
  codFornecedor: number;

  @Column("number", { name: "COD_FONTE_RECURSO", nullable: true, scale: 0 })
  codFonteRecurso: number | null;

  @Column("number", {
    name: "COD_DESPESA_TIPO",
    scale: 0,
    default: () => "(1)",
  })
  codDespesaTipo: number;

  @Column("number", { name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", { name: "COD_CATEGORIA_GASTO", nullable: true, scale: 0 })
  codCategoriaGasto: number | null;

  @Column("number", { name: "COD_ATUALIZACAO", scale: 0, default: () => "(0)" })
  codAtualizacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_ACAO", nullable: true, scale: 0 })
  codAcao: number | null;

  @ManyToOne(
    () => TblContratoTipo,
    (tblContratoTipo) => tblContratoTipo.tblContratoes
  )
  @JoinColumn([
    { name: "COD_CONTRATO_TIPO", referencedColumnName: "codContratoTipo" },
  ])
  codContratoTipo: TblContratoTipo;

  @ManyToOne(
    () => TblContratoModalidade,
    (tblContratoModalidade) => tblContratoModalidade.tblContratoes
  )
  @JoinColumn([
    {
      name: "COD_CONTRATO_MODALIDADE",
      referencedColumnName: "codContratoModalidade",
    },
  ])
  codContratoModalidade: TblContratoModalidade;

  @ManyToOne(
    () => TblContratoRegimeExecucao,
    (tblContratoRegimeExecucao) => tblContratoRegimeExecucao.tblContratoes
  )
  @JoinColumn([
    {
      name: "COD_CONTRATO_REGIME_EXECUCAO",
      referencedColumnName: "codContratoRegimeExecucao",
    },
  ])
  codContratoRegimeExecucao: TblContratoRegimeExecucao;
}

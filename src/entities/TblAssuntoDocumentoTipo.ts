import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAssuntoDocRelacionamento } from "./TblAssuntoDocRelacionamento";
import { TblAssuntoDocTipoArquivo } from "./TblAssuntoDocTipoArquivo";
import { TblAssuntoDocTipoSecao } from "./TblAssuntoDocTipoSecao";
import { TblAssuntoDocTpArqPessoal } from "./TblAssuntoDocTpArqPessoal";
import { TblOrgao } from "./TblOrgao";
import { TblAssunto } from "./TblAssunto";
import { TblDocumentoTipo } from "./TblDocumentoTipo";
import { TblAtividadeEconomica } from "./TblAtividadeEconomica";
import { TblDossieServicoDocumento } from "./TblDossieServicoDocumento";
import { TblDossieServicoProcesso } from "./TblDossieServicoProcesso";
import { TblPerguntaResposta } from "./TblPerguntaResposta";
import { TblProtocolo } from "./TblProtocolo";

@Index("IX_PR_ADT_COD_SERVICO_GRUPO", ["codServicoGrupo"], {})
@Index("PK_TBL_ASSUNTO_DOCUMENTO_TIP0", ["codAssuntoDocumentoTipo"], {
  unique: true,
})
@Entity("TBL_ASSUNTO_DOCUMENTO_TIPO")
export class TblAssuntoDocumentoTipo {
  @Column("clob", { name: "TXT_TAXA", nullable: true })
  txtTaxa: string | null;

  @Column("varchar2", { name: "TXT_SERVICO", length: 255 })
  txtServico: string;

  @Column("varchar2", {
    name: "TXT_PRIORIDADE_ATENDIMENTO",
    nullable: true,
    length: 500,
  })
  txtPrioridadeAtendimento: string | null;

  @Column("varchar2", {
    name: "TXT_PRAZO_EXECUTAR",
    nullable: true,
    length: 600,
  })
  txtPrazoExecutar: string | null;

  @Column("clob", { name: "TXT_LEGISLACAO", nullable: true })
  txtLegislacao: string | null;

  @Column("varchar2", {
    name: "TXT_FILA_ATENDIMENTO",
    nullable: true,
    length: 600,
  })
  txtFilaAtendimento: string | null;

  @Column("clob", { name: "TXT_DOCUMENTACAO", nullable: true })
  txtDocumentacao: string | null;

  @Column("varchar2", {
    name: "TXT_CONCEITUACAO",
    nullable: true,
    length: 4000,
  })
  txtConceituacao: string | null;

  @Column("varchar2", { name: "TXT_CODIGO", nullable: true, length: 255 })
  txtCodigo: string | null;

  @Column("varchar2", {
    name: "TXT_CLIENTE_SERVICO",
    nullable: true,
    length: 500,
  })
  txtClienteServico: string | null;

  @Column("clob", { name: "TXT_CANAL_COMUNICACAO", nullable: true })
  txtCanalComunicacao: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_JURIDICA_SEM_PROCU",
    nullable: true,
    length: 255,
  })
  txtArquivoJuridicaSemProcu: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_JURIDICA_COM_PROCU",
    nullable: true,
    length: 255,
  })
  txtArquivoJuridicaComProcu: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_FISICA_SEM_PROCURA",
    nullable: true,
    length: 255,
  })
  txtArquivoFisicaSemProcura: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_FISICA_COM_PROCURA",
    nullable: true,
    length: 255,
  })
  txtArquivoFisicaComProcura: string | null;

  @Column("number", { name: "COD_USUARIO_DUPLICIDADE", nullable: true })
  codUsuarioDuplicidade: number | null;

  @Column("number", { name: "COD_SERVICO_GRUPO", precision: 10, scale: 0 })
  codServicoGrupo: number;

  @Column("number", { name: "COD_RISCO_CLASSIFICACAO", nullable: true })
  codRiscoClassificacao: number | null;

  @Column("number", { name: "COD_REQUERENTE_DUPLICIDADE", nullable: true })
  codRequerenteDuplicidade: number | null;

  @Column("number", { name: "COD_QTD_RESTRICAO", nullable: true })
  codQtdRestricao: number | null;

  @Column("number", {
    name: "COD_PRAZO_PADRAO_ARQUIVAMENTO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codPrazoPadraoArquivamento: number | null;

  @Column("number", { name: "COD_PERMITIR_DUPLICIDADE", default: () => "(0)" })
  codPermitirDuplicidade: number;

  @Column("number", { name: "COD_PERIODO_RESTRICAO", nullable: true })
  codPeriodoRestricao: number | null;

  @Column("number", {
    name: "COD_FORMAR_PROCESSO",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codFormarProcesso: number;

  @Column("number", {
    name: "COD_FLUXO_TRABALHO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codFluxoTrabalho: number | null;

  @Column("number", {
    name: "COD_EMPRESA",
    precision: 10,
    scale: 0,
    default: () => "0",
  })
  codEmpresa: number;

  @Column("number", { name: "COD_DISPONIVEL_PORTAL" })
  codDisponivelPortal: number;

  @Column("number", {
    name: "COD_DISPONIVEL",
    precision: 10,
    scale: 0,
    default: () => "0",
  })
  codDisponivel: number;

  @Column("number", {
    name: "COD_DESTINO_INFORMADO_REQUEREN",
    default: () => "(0)",
  })
  codDestinoInformadoRequeren: number;

  @Column("number", { name: "COD_ATUALIZACAO_CADASTRAL", default: () => "(0)" })
  codAtualizacaoCadastral: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO_DOCUMENTO_TIPO" })
  codAssuntoDocumentoTipo: number;

  @OneToMany(
    () => TblAssuntoDocRelacionamento,
    (tblAssuntoDocRelacionamento) =>
      tblAssuntoDocRelacionamento.codAssuntoDocumentoTipo2
  )
  tblAssuntoDocRelacionamentos: TblAssuntoDocRelacionamento[];

  @OneToMany(
    () => TblAssuntoDocTipoArquivo,
    (tblAssuntoDocTipoArquivo) =>
      tblAssuntoDocTipoArquivo.codAssuntoDocumentoTipo
  )
  tblAssuntoDocTipoArquivos: TblAssuntoDocTipoArquivo[];

  @OneToMany(
    () => TblAssuntoDocTipoSecao,
    (tblAssuntoDocTipoSecao) => tblAssuntoDocTipoSecao.codAssuntoDocumentoTipo2
  )
  tblAssuntoDocTipoSecaos: TblAssuntoDocTipoSecao[];

  @OneToMany(
    () => TblAssuntoDocTpArqPessoal,
    (tblAssuntoDocTpArqPessoal) =>
      tblAssuntoDocTpArqPessoal.codAssuntoDocumentoTipo
  )
  tblAssuntoDocTpArqPessoals: TblAssuntoDocTpArqPessoal[];

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblAssuntoDocumentoTipos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblAssuntoDocumentoTipos2)
  @JoinColumn([{ name: "COD_ORGAO_GESTOR", referencedColumnName: "codOrgao" }])
  codOrgaoGestor: TblOrgao;

  @ManyToOne(
    () => TblAssunto,
    (tblAssunto) => tblAssunto.tblAssuntoDocumentoTipos
  )
  @JoinColumn([{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }])
  codAssunto: TblAssunto;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblAssuntoDocumentoTipos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo: TblDocumentoTipo;

  @OneToMany(
    () => TblAtividadeEconomica,
    (tblAtividadeEconomica) => tblAtividadeEconomica.codAssuntoDocumentoTipo
  )
  tblAtividadeEconomicas: TblAtividadeEconomica[];

  @OneToMany(
    () => TblDossieServicoDocumento,
    (tblDossieServicoDocumento) =>
      tblDossieServicoDocumento.codAssuntoDocumentoTipo2
  )
  tblDossieServicoDocumentos: TblDossieServicoDocumento[];

  @OneToMany(
    () => TblDossieServicoProcesso,
    (tblDossieServicoProcesso) =>
      tblDossieServicoProcesso.codAssuntoDocumentoTipo2
  )
  tblDossieServicoProcessos: TblDossieServicoProcesso[];

  @OneToMany(
    () => TblPerguntaResposta,
    (tblPerguntaResposta) => tblPerguntaResposta.codAssuntoDocumentoTipo
  )
  tblPerguntaRespostas: TblPerguntaResposta[];

  @OneToMany(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.codAssuntoDocumentoTipo
  )
  tblProtocolos: TblProtocolo[];
}

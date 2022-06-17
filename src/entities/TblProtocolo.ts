import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblArquivoDigital } from "./TblArquivoDigital";
import { TblAutorizacaoAcesso } from "./TblAutorizacaoAcesso";
import { TblFluxoTrabalhoExecucao } from "./TblFluxoTrabalhoExecucao";
import { TblNotificacao } from "./TblNotificacao";
import { TblPendencia } from "./TblPendencia";
import { TblAssunto } from "./TblAssunto";
import { TblDocumentoTipo } from "./TblDocumentoTipo";
import { TblProtocoloOpcao } from "./TblProtocoloOpcao";
import { TblProtocoloTipo } from "./TblProtocoloTipo";
import { TblSituacao } from "./TblSituacao";
import { TblSuporteTipo } from "./TblSuporteTipo";
import { TblPrioridadeProcesso } from "./TblPrioridadeProcesso";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";
import { TblProtocoloAtributo } from "./TblProtocoloAtributo";
import { TblProtocoloInteressado } from "./TblProtocoloInteressado";
import { TblProtocoloInteressadoHist } from "./TblProtocoloInteressadoHist";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";
import { TblProtocoloRequerente } from "./TblProtocoloRequerente";
import { TblProtocoloSecao } from "./TblProtocoloSecao";

@Index("IDX$$_0001000E", ["codProtocolo", "codDocumentoTipo"], {})
@Index("IX_protocolo_cod_volume", ["codVolume"], {})
@Index("IX_ptotocolo_cod_civico", ["codCivico"], {})
@Index("IX_ptotocolo_protocolo_tipo", ["codProtocoloTipo"], {})
@Index(
  "IX_TBL_PROTOC_N1",
  ["codProtocoloTipo", "codJuntadoAtivo", "codProtocolo"],
  {}
)
@Index("IX_TBL_PROTOC_N2", ["txtNumero", "codProtocoloTipo"], {})
@Index("IX_tbl_protocolo_cod_assunto", ["codAssunto"], {})
@Index("IX_tbl_protocolo_cod_doc_tipo", ["codDocumentoTipo"], {})
@Index("IX_TXT_IDENTIFICACAO", ["txtIdentificacao"], {})
@Index("IX_TXT_REFERENCIA", ["txtReferencia"], {})
@Index("IX_TXT_RESUMO", ["txtResumo"], {})
@Index("IX_TXT_TEXTO", ["txtTexto"], {})
@Index("PK_TBL_PROTOCOLO", ["codProtocolo"], { unique: true })
@Index(
  "TBL_PROTOCOLO_N1",
  [
    "codOrgaoAtual",
    "codSituacao",
    "codJuntadoAtivo",
    "codProtocoloTipo",
    "codAtivo",
    "codMigrado",
  ],
  {}
)
@Index("TBL_PROTOCOLO_N3", ["codCopia", "txtNumero", "codSuporteTipo"], {})
@Index("TBL_PROTOCOLO_N4", ["codJuntadoAtivo", "codOrgaoAtual"], {})
@Entity("TBL_PROTOCOLO")
export class TblProtocolo {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", {
    name: "TXT_TELEFONE_CONTATO",
    nullable: true,
    length: 255,
  })
  txtTelefoneContato: string | null;

  @Column("varchar2", {
    name: "TXT_SITUACAO_FINAL",
    nullable: true,
    length: 15,
  })
  txtSituacaoFinal: string | null;

  @Column("varchar2", {
    name: "TXT_SIGLA_IDENTIFICACAO",
    nullable: true,
    length: 50,
  })
  txtSiglaIdentificacao: string | null;

  @Column("clob", { name: "TXT_RESUMO", nullable: true })
  txtResumo: string | null;

  @Column("varchar2", { name: "TXT_REFERENCIA_US", nullable: true, length: 50 })
  txtReferenciaUs: string | null;

  @Column("varchar2", { name: "TXT_REFERENCIA_UC", nullable: true, length: 50 })
  txtReferenciaUc: string | null;

  @Column("varchar2", { name: "TXT_REFERENCIA_OS", nullable: true, length: 50 })
  txtReferenciaOs: string | null;

  @Column("varchar2", { name: "TXT_REFERENCIA", nullable: true, length: 255 })
  txtReferencia: string | null;

  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_ANTERIOR",
    nullable: true,
    length: 20,
  })
  txtNumeroAnterior: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", length: 21 })
  txtNumero: string;

  @Column("varchar2", {
    name: "TXT_MATRICULA_IMOVEL",
    nullable: true,
    length: 50,
  })
  txtMatriculaImovel: string | null;

  @Column("varchar2", {
    name: "TXT_LOCALIZACAO_FISICA",
    nullable: true,
    length: 255,
  })
  txtLocalizacaoFisica: string | null;

  @Column("varchar2", {
    name: "TXT_INSCRICAO_MUNICIPAL",
    nullable: true,
    length: 50,
  })
  txtInscricaoMunicipal: string | null;

  @Column("varchar2", { name: "TXT_IDENTIFICACAO", nullable: true, length: 50 })
  txtIdentificacao: string | null;

  @Column("varchar2", {
    name: "TXT_ENDERECO_CONTATO",
    nullable: true,
    length: 255,
  })
  txtEnderecoContato: string | null;

  @Column("varchar2", {
    name: "TXT_EMAIL_CONTATO",
    nullable: true,
    length: 255,
  })
  txtEmailContato: string | null;

  @Column("number", { name: "SEQ_CARGA_PROCESSO", nullable: true, scale: 0 })
  seqCargaProcesso: number | null;

  @Column("date", {
    name: "DT_TRAMITACAO",
    nullable: true,
    default: () => "sysdate",
  })
  dtTramitacao: Date | null;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_PROTOCOLO", default: () => "sysdate" })
  dtProtocolo: Date;

  @Column("date", { name: "DT_PRAZO_RESPOSTA", nullable: true })
  dtPrazoResposta: Date | null;

  @Column("date", { name: "DT_ORIGEM", nullable: true })
  dtOrigem: Date | null;

  @Column("date", {
    name: "DT_INCLUSAO",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtInclusao: Date | null;

  @Column("date", { name: "DT_CONFORMIDADE", nullable: true })
  dtConformidade: Date | null;

  @Column("date", { name: "DT_ABERTURA", default: () => "sysdate" })
  dtAbertura: Date;

  @Column("number", {
    name: "COD_VOLUME_ATIVO",
    scale: 0,
    default: () => "(1)",
  })
  codVolumeAtivo: number;

  @Column("number", { name: "COD_VOLUME", scale: 0, default: () => "(0)" })
  codVolume: number;

  @Column("number", { name: "COD_VISTORIA", nullable: true, scale: 0 })
  codVistoria: number | null;

  @Column("float", { name: "COD_VALOR", nullable: true, precision: 126 })
  codValor: number | null;

  @Column("number", { name: "COD_USUARIO_CUIDADO", nullable: true, scale: 0 })
  codUsuarioCuidado: number | null;

  @Column("number", {
    name: "COD_SUPORTE_TIPO",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codSuporteTipo: number | null;

  @Column("number", {
    name: "COD_STATUS_PROTUS",
    nullable: true,
    precision: 19,
    scale: 0,
  })
  codStatusProtus: number | null;

  @Column("number", { name: "COD_SITUACAO", scale: 0, default: () => "(1)" })
  codSituacao: number;

  @Column("number", { name: "COD_SIGLA", default: () => "1" })
  codSigla: number;

  @Column("number", { name: "COD_RECEBIMENTO", scale: 0, default: () => "(0)" })
  codRecebimento: number;

  @Column("number", {
    name: "COD_PROTOCOLO_TIPO",
    scale: 0,
    default: () => "(0)",
  })
  codProtocoloTipo: number;

  @Column("number", { name: "COD_PROTOCOLO_RESPOSTA", nullable: true })
  codProtocoloResposta: number | null;

  @Column("number", {
    name: "COD_PROTOCOLO_ORIGEM",
    scale: 0,
    default: () => "(1)",
  })
  codProtocoloOrigem: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_PROCURACAO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codProcuracao: number | null;

  @Column("number", {
    name: "COD_PROCESSO_TIPO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codProcessoTipo: number | null;

  @Column("number", { name: "COD_PRIORIDADE", scale: 0, default: () => "(0)" })
  codPrioridade: number;

  @Column("number", {
    name: "COD_PRE_PROTOCOLO",
    scale: 0,
    default: () => "(0)",
  })
  codPreProtocolo: number;

  @Column("number", { name: "COD_ORIGINAL", scale: 0, default: () => "(1)" })
  codOriginal: number;

  @Column("number", {
    name: "COD_ORGAO_DEMANDA_CIVICO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoDemandaCivico: number | null;

  @Column("number", { name: "COD_ORGAO_DEMANDA", nullable: true, scale: 0 })
  codOrgaoDemanda: number | null;

  @Column("number", {
    name: "COD_ORGAO_ATUAL_CIVICO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoAtualCivico: number | null;

  @Column("number", {
    name: "COD_ORGAO_ATUAL",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codOrgaoAtual: number | null;

  @Column("number", {
    name: "COD_MOTIVO_PROTUS",
    nullable: true,
    precision: 19,
    scale: 0,
  })
  codMotivoProtus: number | null;

  @Column("number", {
    name: "COD_MIGRADO",
    nullable: true,
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codMigrado: number | null;

  @Column("number", {
    name: "COD_JUNTADO_ATIVO",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codJuntadoAtivo: number | null;

  @Column("number", { name: "COD_INTERNET", scale: 0, default: () => "(1)" })
  codInternet: number;

  @Column("number", {
    name: "COD_GERAR_VIA_ELETRONICA",
    scale: 0,
    default: () => "(1)",
  })
  codGerarViaEletronica: number;

  @Column("number", {
    name: "COD_FLUXO_ATIVO",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codFluxoAtivo: number | null;

  @Column("number", {
    name: "COD_ESPECIE",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codEspecie: number | null;

  @Column("number", {
    name: "COD_EMPRESTIMO_ATIVO",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codEmprestimoAtivo: number | null;

  @Column("number", {
    name: "COD_EMPRESA_GESTORA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codEmpresaGestora: number | null;

  @Column("number", { name: "COD_DOCUMENTO_TIPO", nullable: true, scale: 0 })
  codDocumentoTipo: number | null;

  @Column("number", { name: "COD_COPIA", scale: 0, default: () => "(0)" })
  codCopia: number;

  @Column("number", {
    name: "COD_CIVICO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codCivico: number | null;

  @Column("number", {
    name: "COD_CAPA_GERADA",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codCapaGerada: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ASSUNTO_SECUNDARIO",
    nullable: true,
    scale: 0,
  })
  codAssuntoSecundario: number | null;

  @Column("number", {
    name: "COD_ASSUNTO",
    nullable: true,
    scale: 0,
    default: () => "(10000)",
  })
  codAssunto: number | null;

  @Column("number", {
    name: "COD_ARQUIVAR_AUTO_POS_VENC",
    precision: 1,
    scale: 0,
    default: () => "(0)",
  })
  codArquivarAutoPosVenc: number;

  @Column("number", { name: "COD_ANEXO", scale: 0, default: () => "(0)" })
  codAnexo: number;

  @OneToMany(
    () => TblArquivoDigital,
    (tblArquivoDigital) => tblArquivoDigital.codProtocolo2
  )
  tblArquivoDigitals: TblArquivoDigital[];

  @OneToMany(
    () => TblAutorizacaoAcesso,
    (tblAutorizacaoAcesso) => tblAutorizacaoAcesso.codProtocolo
  )
  tblAutorizacaoAcessos: TblAutorizacaoAcesso[];

  @OneToMany(
    () => TblFluxoTrabalhoExecucao,
    (tblFluxoTrabalhoExecucao) => tblFluxoTrabalhoExecucao.codProtocolo
  )
  tblFluxoTrabalhoExecucaos: TblFluxoTrabalhoExecucao[];

  @ManyToMany(
    () => TblNotificacao,
    (tblNotificacao) => tblNotificacao.tblProtocolos
  )
  tblNotificacaos: TblNotificacao[];

  @OneToMany(() => TblPendencia, (tblPendencia) => tblPendencia.codProtocolo)
  tblPendencias: TblPendencia[];

  @ManyToOne(() => TblAssunto, (tblAssunto) => tblAssunto.tblProtocolos)
  @JoinColumn([{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }])
  codAssunto2: TblAssunto;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblProtocolos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo2: TblDocumentoTipo;

  @ManyToOne(
    () => TblProtocoloOpcao,
    (tblProtocoloOpcao) => tblProtocoloOpcao.tblProtocolos
  )
  @JoinColumn([
    { name: "COD_PROTOCOLO_OPCAO", referencedColumnName: "codProtocoloOpcao" },
  ])
  codProtocoloOpcao: TblProtocoloOpcao;

  @ManyToOne(
    () => TblProtocoloTipo,
    (tblProtocoloTipo) => tblProtocoloTipo.tblProtocolos
  )
  @JoinColumn([
    { name: "COD_PROTOCOLO_TIPO", referencedColumnName: "codProtocoloTipo" },
  ])
  codProtocoloTipo2: TblProtocoloTipo;

  @ManyToOne(() => TblSituacao, (tblSituacao) => tblSituacao.tblProtocolos)
  @JoinColumn([{ name: "COD_SITUACAO", referencedColumnName: "codSituacao" }])
  codSituacao2: TblSituacao;

  @ManyToOne(
    () => TblSuporteTipo,
    (tblSuporteTipo) => tblSuporteTipo.tblProtocolos
  )
  @JoinColumn([
    { name: "COD_SUPORTE_TIPO", referencedColumnName: "codSuporteTipo" },
  ])
  codSuporteTipo2: TblSuporteTipo;

  @ManyToOne(
    () => TblPrioridadeProcesso,
    (tblPrioridadeProcesso) => tblPrioridadeProcesso.tblProtocolos
  )
  @JoinColumn([
    {
      name: "COD_PRIORIDADE_PROCESSO",
      referencedColumnName: "codPrioridadeProcesso",
    },
  ])
  codPrioridadeProcesso: TblPrioridadeProcesso;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) => tblAssuntoDocumentoTipo.tblProtocolos
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo: TblAssuntoDocumentoTipo;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblProtocolos
  )
  @JoinColumn([
    {
      name: "COD_USUARIO_RESPONSAVEL",
      referencedColumnName: "codUsuarioExterno",
    },
  ])
  codUsuarioResponsavel: TblSegUsuarioExterno;

  @OneToMany(
    () => TblProtocoloAtributo,
    (tblProtocoloAtributo) => tblProtocoloAtributo.codProtocolo
  )
  tblProtocoloAtributos: TblProtocoloAtributo[];

  @OneToMany(
    () => TblProtocoloInteressado,
    (tblProtocoloInteressado) => tblProtocoloInteressado.codProtocolo2
  )
  tblProtocoloInteressados: TblProtocoloInteressado[];

  @OneToMany(
    () => TblProtocoloInteressadoHist,
    (tblProtocoloInteressadoHist) => tblProtocoloInteressadoHist.codProtocolo2
  )
  tblProtocoloInteressadoHists: TblProtocoloInteressadoHist[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codProtocolo
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];

  @OneToMany(
    () => TblProtocoloRequerente,
    (tblProtocoloRequerente) => tblProtocoloRequerente.codProtocolo
  )
  tblProtocoloRequerentes: TblProtocoloRequerente[];

  @OneToMany(
    () => TblProtocoloSecao,
    (tblProtocoloSecao) => tblProtocoloSecao.codProtocolo
  )
  tblProtocoloSecaos: TblProtocoloSecao[];
}

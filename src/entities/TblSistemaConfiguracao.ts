import { Column, Entity } from "typeorm";

@Entity("TBL_SISTEMA_CONFIGURACAO")
export class TblSistemaConfiguracao {
  @Column("varchar2", {
    name: "TXT_SERVIDOR_WEB_EXTERNO",
    nullable: true,
    length: 100,
  })
  txtServidorWebExterno: string | null;

  @Column("varchar2", { name: "TXT_SERVIDOR_WEB", nullable: true, length: 100 })
  txtServidorWeb: string | null;

  @Column("varchar2", {
    name: "TXT_SERVIDOR_SMTP_USUARIO",
    nullable: true,
    length: 50,
  })
  txtServidorSmtpUsuario: string | null;

  @Column("number", {
    name: "TXT_SERVIDOR_SMTP_TLS",
    precision: 10,
    scale: 0,
    default: () => "0",
  })
  txtServidorSmtpTls: number;

  @Column("varchar2", {
    name: "TXT_SERVIDOR_SMTP_SENHA",
    nullable: true,
    length: 80,
  })
  txtServidorSmtpSenha: string | null;

  @Column("number", {
    name: "TXT_SERVIDOR_SMTP_PORTA",
    precision: 10,
    scale: 0,
    default: () => "25",
  })
  txtServidorSmtpPorta: number;

  @Column("varchar2", {
    name: "TXT_SERVIDOR_SMTP",
    nullable: true,
    length: 100,
  })
  txtServidorSmtp: string | null;

  @Column("varchar2", {
    name: "TXT_SERVIDOR_IMAP_PORTA",
    nullable: true,
    length: 5,
  })
  txtServidorImapPorta: string | null;

  @Column("varchar2", {
    name: "TXT_SERVIDOR_IMAP",
    nullable: true,
    length: 500,
  })
  txtServidorImap: string | null;

  @Column("varchar2", {
    name: "TXT_MODULO_DIGITALIZADOR",
    nullable: true,
    length: 100,
  })
  txtModuloDigitalizador: string | null;

  @Column("varchar2", {
    name: "TXT_MASCARA_PROCESSO",
    nullable: true,
    length: 25,
  })
  txtMascaraProcesso: string | null;

  @Column("varchar2", {
    name: "TXT_MASCARA_DOCUMENTO",
    nullable: true,
    length: 25,
  })
  txtMascaraDocumento: string | null;

  @Column("varchar2", {
    name: "TXT_IMAGEM_LOGO_ETIQUETA",
    nullable: true,
    length: 50,
  })
  txtImagemLogoEtiqueta: string | null;

  @Column("varchar2", {
    name: "TXT_IMAGEM_LOGO_CAPA",
    nullable: true,
    length: 50,
  })
  txtImagemLogoCapa: string | null;

  @Column("varchar2", {
    name: "TXT_COR_MESCLAGEM",
    length: 7,
    default: () => "'#eaeaea'",
  })
  txtCorMesclagem: string;

  @Column("varchar2", { name: "TXT_CONTA_EMAIL", nullable: true, length: 100 })
  txtContaEmail: string | null;

  @Column("varchar2", {
    name: "TXT_CAMINHO_IMAGEM_LOGICO",
    nullable: true,
    length: 50,
  })
  txtCaminhoImagemLogico: string | null;

  @Column("varchar2", {
    name: "TXT_CAMINHO_DOCUMENTO_MODELO",
    nullable: true,
    length: 255,
  })
  txtCaminhoDocumentoModelo: string | null;

  @Column("varchar2", {
    name: "TXT_CAMINHO_DOCUMENTO_CURTO",
    nullable: true,
    length: 255,
  })
  txtCaminhoDocumentoCurto: string | null;

  @Column("varchar2", {
    name: "TXT_CAMINHO_DOCUMENTO",
    nullable: true,
    length: 255,
  })
  txtCaminhoDocumento: string | null;

  @Column("number", { name: "COD_UTILIZAR_ROBO", scale: 0, default: () => "0" })
  codUtilizarRobo: number;

  @Column("number", {
    name: "COD_UTILIZAR_NUMERACAO_PAGINA",
    scale: 0,
    default: () => "1",
  })
  codUtilizarNumeracaoPagina: number;

  @Column("number", { name: "COD_UTILIZAR_LOTE", scale: 0, default: () => "0" })
  codUtilizarLote: number;

  @Column("number", { name: "COD_UTILIZAR_GUIA", scale: 0, default: () => "0" })
  codUtilizarGuia: number;

  @Column("number", { name: "COD_USAR_COPIA", scale: 0, default: () => "1" })
  codUsarCopia: number;

  @Column("number", {
    name: "COD_TRAVAR_NUMERACAO",
    scale: 0,
    default: () => "1",
  })
  codTravarNumeracao: number;

  @Column("number", {
    name: "COD_TRANSFERIR_ANEXO",
    scale: 0,
    default: () => "0",
  })
  codTransferirAnexo: number;

  @Column("number", {
    name: "COD_SUPORTE_TIPO_DIGITAL",
    scale: 0,
    default: () => "1",
  })
  codSuporteTipoDigital: number;

  @Column("number", { name: "COD_SUPORTE_TIPO", scale: 0, default: () => "1" })
  codSuporteTipo: number;

  @Column("number", {
    name: "COD_SERVIDOR_SEGURO",
    scale: 0,
    default: () => "0",
  })
  codServidorSeguro: number;

  @Column("number", {
    name: "COD_REGISTRAR_RESUMO",
    scale: 0,
    default: () => "1",
  })
  codRegistrarResumo: number;

  @Column("number", {
    name: "COD_REGISTRAR_CLASSIFICACAO_AR",
    scale: 0,
    default: () => "1",
  })
  codRegistrarClassificacaoAr: number;

  @Column("number", { name: "COD_PUSH", scale: 0, default: () => "0" })
  codPush: number;

  @Column("number", { name: "COD_PECA", scale: 0, default: () => "1" })
  codPeca: number;

  @Column("number", {
    name: "COD_ORGAO_PROTOCOLO",
    scale: 0,
    default: () => "1",
  })
  codOrgaoProtocolo: number;

  @Column("number", { name: "COD_ORGAO_ARQUIVO_CENTRAL", scale: 0 })
  codOrgaoArquivoCentral: number;

  @Column("number", { name: "COD_ORGAO", scale: 0, default: () => "1" })
  codOrgao: number;

  @Column("number", {
    name: "COD_NUMERACAO_AUTOMATICA",
    scale: 0,
    default: () => "1",
  })
  codNumeracaoAutomatica: number;

  @Column("number", {
    name: "COD_MOSTRAR_SITUACAO",
    scale: 0,
    default: () => "1",
  })
  codMostrarSituacao: number;

  @Column("number", {
    name: "COD_MODULO_WEBMAIL",
    scale: 0,
    default: () => "1",
  })
  codModuloWebmail: number;

  @Column("number", {
    name: "COD_MODULO_TRACKING",
    scale: 0,
    default: () => "0",
  })
  codModuloTracking: number;

  @Column("number", {
    name: "COD_MODULO_PROCESSO",
    scale: 0,
    default: () => "1",
  })
  codModuloProcesso: number;

  @Column("number", {
    name: "COD_MODULO_MALA_DIRETA",
    scale: 0,
    default: () => "1",
  })
  codModuloMalaDireta: number;

  @Column("number", {
    name: "COD_MODULO_LEGISLACAO",
    scale: 0,
    default: () => "1",
  })
  codModuloLegislacao: number;

  @Column("number", {
    name: "COD_MODULO_INTERNET_LIMITE",
    scale: 0,
    default: () => "50",
  })
  codModuloInternetLimite: number;

  @Column("number", {
    name: "COD_MODULO_INTERNET",
    scale: 0,
    default: () => "1",
  })
  codModuloInternet: number;

  @Column("number", {
    name: "COD_MODULO_DOCUMENTO",
    scale: 0,
    default: () => "1",
  })
  codModuloDocumento: number;

  @Column("number", {
    name: "COD_MODULO_CONVENIO",
    scale: 0,
    default: () => "1",
  })
  codModuloConvenio: number;

  @Column("number", {
    name: "COD_MODULO_CONTRATO",
    scale: 0,
    default: () => "1",
  })
  codModuloContrato: number;

  @Column("number", {
    name: "COD_MODULO_BIBLIOTECA",
    scale: 0,
    default: () => "1",
  })
  codModuloBiblioteca: number;

  @Column("number", {
    name: "COD_MODULO_BANCO_IMAGEM",
    scale: 0,
    default: () => "0",
  })
  codModuloBancoImagem: number;

  @Column("number", {
    name: "COD_MODULO_ARQUIVO",
    scale: 0,
    default: () => "1",
  })
  codModuloArquivo: number;

  @Column("number", {
    name: "COD_GRAVAR_PESQUISA",
    scale: 0,
    default: () => "1",
  })
  codGravarPesquisa: number;

  @Column("number", {
    name: "COD_DOCUMENTO_TIPO_PARTICULAR",
    scale: 0,
    default: () => "1",
  })
  codDocumentoTipoParticular: number;

  @Column("number", { name: "COD_CONVERSAO_PDF", scale: 0, default: () => "1" })
  codConversaoPdf: number;

  @Column("number", { name: "COD_ASSUNTO_ORGAO", scale: 0, default: () => "0" })
  codAssuntoOrgao: number;

  @Column("number", { name: "COD_ASSUNTO", scale: 0, default: () => "1" })
  codAssunto: number;

  @Column("number", {
    name: "COD_ARQUIVO_INCLUIR",
    scale: 0,
    default: () => "1",
  })
  codArquivoIncluir: number;
}

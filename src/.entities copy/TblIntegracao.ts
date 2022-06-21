import { Column, Entity, Index } from "typeorm";

@Index("IX_I_DT_PROCESSAMENTO", ["dtProcessamento"], {})
@Index("PK_TBL_INTEGRACAO", ["codIntegracao"], { unique: true })
@Entity("TBL_INTEGRACAO")
export class TblIntegracao {
  @Column("clob", { name: "TXT_RESUMO" })
  txtResumo: string;

  @Column("varchar2", { name: "TXT_REFERENCIA", nullable: true, length: 255 })
  txtReferencia: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", length: 21 })
  txtNumero: string;

  @Column("varchar2", { name: "TXT_INTERESSADO", nullable: true, length: 4000 })
  txtInteressado: string | null;

  @Column("varchar2", { name: "TXT_IDENTIFICACAO", nullable: true, length: 50 })
  txtIdentificacao: string | null;

  @Column("varchar2", {
    name: "TXT_DOCUMENTO_TIPO",
    nullable: true,
    length: 255,
  })
  txtDocumentoTipo: string | null;

  @Column("varchar2", { name: "TXT_ASSUNTO", nullable: true, length: 255 })
  txtAssunto: string | null;

  @Column("date", { name: "DT_RECUSA", nullable: true })
  dtRecusa: Date | null;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_PROTOCOLO" })
  dtProtocolo: Date;

  @Column("date", { name: "DT_PROCESSAMENTO", nullable: true })
  dtProcessamento: Date | null;

  @Column("date", { name: "DT_PRAZO_RESPOSTA", nullable: true })
  dtPrazoResposta: Date | null;

  @Column("date", { name: "DT_ENVIO", default: () => "sysdate" })
  dtEnvio: Date;

  @Column("date", { name: "DT_CANCELAMENTO", nullable: true })
  dtCancelamento: Date | null;

  @Column("date", { name: "DT_ABERTURA" })
  dtAbertura: Date;

  @Column("number", {
    name: "COD_VOLUME",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  codVolume: number;

  @Column("number", {
    name: "COD_PROTOCOLO_TIPO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codProtocoloTipo: number;

  @Column("number", { name: "COD_PROTOCOLO_ORIGEM", precision: 10, scale: 0 })
  codProtocoloOrigem: number;

  @Column("number", {
    name: "COD_PROTOCOLO_OPCAO",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  codProtocoloOpcao: number;

  @Column("number", {
    name: "COD_PROTOCOLO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codProtocolo: number | null;

  @Column("number", {
    name: "COD_ORIGEM",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  codOrigem: number;

  @Column("number", {
    name: "COD_ORGAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgao: number | null;

  @Column("number", {
    primary: true,
    name: "COD_INTEGRACAO",
    precision: 10,
    scale: 0,
  })
  codIntegracao: number;

  @Column("number", {
    name: "COD_EMPRESA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codEmpresa: number | null;

  @Column("number", {
    name: "COD_COPIA",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  codCopia: number;

  @Column("number", {
    name: "COD_ANEXO",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  codAnexo: number;
}

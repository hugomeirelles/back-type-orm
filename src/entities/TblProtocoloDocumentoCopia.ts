import { Column, Entity } from "typeorm";

@Entity("TBL_PROTOCOLO_DOCUMENTO_COPIA")
export class TblProtocoloDocumentoCopia {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", nullable: true, length: 128 })
  txtHash: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_CIVICO",
    nullable: true,
    length: 255,
  })
  txtArquivoCivico: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("number", {
    name: "COD_USUARIO_EXTERNO",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codUsuarioExterno: number | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_TAMANHO", scale: 0 })
  codTamanho: number;

  @Column("number", {
    name: "COD_PROTOCOLO_DOCUMENTO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codProtocoloDocumento: number | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_PROCESSADO_MIGRACAO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codProcessadoMigracao: number | null;

  @Column("number", { name: "COD_PAGINA", scale: 0 })
  codPagina: number;

  @Column("number", { name: "COD_ORIGEM", scale: 0 })
  codOrigem: number;

  @Column("number", { name: "COD_ORGAO", nullable: true, scale: 0 })
  codOrgao: number | null;

  @Column("number", { name: "COD_ORDEM", precision: 10, scale: 0 })
  codOrdem: number;

  @Column("number", { name: "COD_OCR", scale: 0 })
  codOcr: number;

  @Column("number", {
    name: "COD_MOVIMENTO",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codMovimento: number | null;

  @Column("number", {
    name: "COD_DOCUMENTO_TIPO",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codDocumentoTipo: number | null;

  @Column("number", { name: "COD_CRIPTOGRAFIA", precision: 10, scale: 0 })
  codCriptografia: number;
}

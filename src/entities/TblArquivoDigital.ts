import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";

@Index("IX_AD_COD_PROTOCOLO", ["codProtocolo"], {})
@Index("IX_AD_COD_SESSION_ID", ["codSessionId"], {})
@Entity("TBL_ARQUIVO_DIGITAL")
export class TblArquivoDigital {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", nullable: true, length: 255 })
  txtHash: string | null;

  @Column("varchar2", { name: "TXT_EXTENSAO", nullable: true, length: 255 })
  txtExtensao: string | null;

  @Column("varchar2", {
    name: "TXT_DESCRICAO_RESUMIDA",
    nullable: true,
    length: 1500,
  })
  txtDescricaoResumida: string | null;

  @Column("varchar2", {
    name: "TXT_DESCRICAO_DETALHADA",
    nullable: true,
    length: 2500,
  })
  txtDescricaoDetalhada: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_DIGITAL",
    nullable: true,
    length: 255,
  })
  txtArquivoDigital: string | null;

  @Column("date", {
    name: "DT_INCLUSAO",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtInclusao: Date | null;

  @Column("number", {
    name: "COD_USUARIO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codUsuario: number | null;

  @Column("number", {
    name: "COD_TAMANHO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codTamanho: number | null;

  @Column("number", {
    name: "COD_SESSION_ID",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codSessionId: number | null;

  @Column("number", { name: "COD_PROTOCOLO_ORIGEM", nullable: true })
  codProtocoloOrigem: number | null;

  @Column("number", { name: "COD_PROTOCOLO_DOCUMENTO_ORIGEM", nullable: true })
  codProtocoloDocumentoOrigem: number | null;

  @Column("number", { name: "COD_PROTOCOLO_DOCUMENTO_DEST", nullable: true })
  codProtocoloDocumentoDest: number | null;

  @Column("number", { name: "COD_PROTOCOLO", nullable: true })
  codProtocolo: number | null;

  @Column("number", {
    name: "COD_PAGINA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codPagina: number | null;

  @Column("number", {
    name: "COD_INTEGRACAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codIntegracao: number | null;

  @Column("number", {
    name: "COD_CRIPTOGRAFIA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codCriptografia: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblArquivoDigitals
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo2: TblProtocolo;
}

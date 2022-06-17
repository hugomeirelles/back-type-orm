import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblDocumentoAssinaturaExt } from "./TblDocumentoAssinaturaExt";
import { TblInteressadoDocProcurador } from "./TblInteressadoDocProcurador";
import { TblPendenciaRespostaArquivo } from "./TblPendenciaRespostaArquivo";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";
import { TblDocumentoTipo } from "./TblDocumentoTipo";
import { TblOrgao } from "./TblOrgao";
import { TblInteressadoDocumento } from "./TblInteressadoDocumento";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("IX_PROT_DOC_COD_PRO_TXT_ARQ", ["codProtocolo", "txtArquivo"], {})
@Index("IX_TXT_CONTEUDO", ["txtTexto"], {})
@Index("PK_TBL_PROTOCOLO_DOCUMENTO", ["codProtocoloDocumento"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_DOCUMENTO")
export class TblProtocoloDocumento {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", {
    name: "TXT_PAG_ASSINATURA",
    nullable: true,
    length: 255,
  })
  txtPagAssinatura: string | null;

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

  @Column("date", { name: "DT_PROCESSAMENTO_OCR", nullable: true })
  dtProcessamentoOcr: Date | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_TAMANHO", scale: 0, default: () => "0" })
  codTamanho: number;

  @Column("number", { name: "COD_QTDE_PAG_ASSINATURA", nullable: true })
  codQtdePagAssinatura: number | null;

  @Column("number", {
    primary: true,
    name: "COD_PROTOCOLO_DOCUMENTO",
    precision: 10,
    scale: 0,
  })
  codProtocoloDocumento: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_PROCESSADO_MIGRACAO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codProcessadoMigracao: number | null;

  @Column("number", { name: "COD_PAGINA", scale: 0, default: () => "(0)" })
  codPagina: number;

  @Column("number", {
    name: "COD_ORIGEM_OCR",
    precision: 1,
    scale: 0,
    default: () => "1",
  })
  codOrigemOcr: number;

  @Column("number", { name: "COD_ORIGEM", scale: 0, default: () => "(0)" })
  codOrigem: number;

  @Column("number", {
    name: "COD_ORDEM",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codOrdem: number;

  @Column("number", { name: "COD_OCR", scale: 0, default: () => "(0)" })
  codOcr: number;

  @Column("number", {
    name: "COD_MOVIMENTO",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codMovimento: number | null;

  @Column("number", { name: "COD_EXIBIR_ARQUIVO_VISUALIZADOR", nullable: true })
  codExibirArquivoVisualizador: number | null;

  @Column("number", {
    name: "COD_CRIPTOGRAFIA",
    precision: 10,
    scale: 0,
    default: () => "0",
  })
  codCriptografia: number;

  @OneToMany(
    () => TblDocumentoAssinaturaExt,
    (tblDocumentoAssinaturaExt) =>
      tblDocumentoAssinaturaExt.codProtocoloDocumento2
  )
  tblDocumentoAssinaturaExts: TblDocumentoAssinaturaExt[];

  @OneToMany(
    () => TblInteressadoDocProcurador,
    (tblInteressadoDocProcurador) =>
      tblInteressadoDocProcurador.codProtocoloDocumento
  )
  tblInteressadoDocProcuradors: TblInteressadoDocProcurador[];

  @OneToMany(
    () => TblPendenciaRespostaArquivo,
    (tblPendenciaRespostaArquivo) =>
      tblPendenciaRespostaArquivo.codProtocoloDocumento2
  )
  tblPendenciaRespostaArquivos: TblPendenciaRespostaArquivo[];

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblProtocoloDocumentos
  )
  @JoinColumn([
    { name: "COD_USUARIO_EXTERNO", referencedColumnName: "codUsuarioExterno" },
  ])
  codUsuarioExterno: TblSegUsuarioExterno;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblProtocoloDocumentos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo: TblDocumentoTipo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloDocumentos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(
    () => TblInteressadoDocumento,
    (tblInteressadoDocumento) => tblInteressadoDocumento.tblProtocoloDocumentos
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_DOCUMENTO",
      referencedColumnName: "codInteressadoDocumento",
    },
  ])
  codInteressadoDocumento: TblInteressadoDocumento;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloDocumentos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codProtocoloDocumento
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];
}

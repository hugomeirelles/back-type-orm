import { Column, Entity, Index } from "typeorm";

@Index("TBL_INTERESSADO_DOCUMENTO_PK", ["codArquivoInteressado"], {
  unique: true,
})
@Entity("TBL_INTERESSADO_DOCUMENTO_TEMP")
export class TblInteressadoDocumentoTemp {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", length: 128 })
  txtHash: string;

  @Column("varchar2", {
    name: "TXT_DESCRICAO_ARQUIVO",
    nullable: true,
    length: 255,
  })
  txtDescricaoArquivo: string | null;

  @Column("varchar2", { name: "TXT_CPF_CNPJ_INTERESSADO", length: 255 })
  txtCpfCnpjInteressado: string;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_VALIDADE", nullable: true })
  dtValidade: Date | null;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("date", { name: "DT_INATIVA", nullable: true })
  dtInativa: Date | null;

  @Column("date", { name: "DT_DOCUMENTO", nullable: true })
  dtDocumento: Date | null;

  @Column("number", { name: "COD_TAMANHO", nullable: true })
  codTamanho: number | null;

  @Column("number", { name: "COD_PAGINA", nullable: true })
  codPagina: number | null;

  @Column("number", { name: "COD_INTERESSADO_INCLUSAO" })
  codInteressadoInclusao: number;

  @Column("number", { name: "COD_INTERESSADO_INATIVA", nullable: true })
  codInteressadoInativa: number | null;

  @Column("number", { name: "COD_DOCUMENTO_TIPO_PESSOAL" })
  codDocumentoTipoPessoal: number;

  @Column("number", { name: "COD_ATIVO", default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_ASSINADO", default: () => "0" })
  codAssinado: number;

  @Column("number", { primary: true, name: "COD_ARQUIVO_INTERESSADO" })
  codArquivoInteressado: number;
}

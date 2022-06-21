import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";

@Index("PK_ASSUNTO_DOC_TIPO_ARQUIVO", ["codAssuntoDocTipoArquivo"], {
  unique: true,
})
@Entity("TBL_ASSUNTO_DOC_TIPO_ARQUIVO")
export class TblAssuntoDocTipoArquivo {
  @Column("varchar2", { name: "TXT_NOME", length: 1000 })
  txtNome: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 1500 })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 2500 })
  txtArquivo: string;

  @Column("number", {
    primary: true,
    name: "COD_ASSUNTO_DOC_TIPO_ARQUIVO",
    precision: 10,
    scale: 0,
  })
  codAssuntoDocTipoArquivo: number;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) =>
      tblAssuntoDocumentoTipo.tblAssuntoDocTipoArquivos,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo: TblAssuntoDocumentoTipo;
}

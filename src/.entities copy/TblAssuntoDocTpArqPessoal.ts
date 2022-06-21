import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";
import { TblDocumentoTipoPessoal } from "./TblDocumentoTipoPessoal";

@Index("PK_ASSUNTO_DOC_TIPO_ARQ_PESSOAL", ["codAssuntoDocTpArqPessoal"], {
  unique: true,
})
@Entity("TBL_ASSUNTO_DOC_TP_ARQ_PESSOAL")
export class TblAssuntoDocTpArqPessoal {
  @Column("number", { name: "COD_REGISTRO_ARQUIVO" })
  codRegistroArquivo: number;

  @Column("number", { name: "COD_ORDEM" })
  codOrdem: number;

  @Column("number", { name: "COD_OBRIGATORIO" })
  codObrigatorio: number;

  @Column("number", { name: "COD_INFORMADO_REQUERENTE" })
  codInformadoRequerente: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO_DOC_TP_ARQ_PESSOAL" })
  codAssuntoDocTpArqPessoal: number;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) =>
      tblAssuntoDocumentoTipo.tblAssuntoDocTpArqPessoals,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo: TblAssuntoDocumentoTipo;

  @ManyToOne(
    () => TblDocumentoTipoPessoal,
    (tblDocumentoTipoPessoal) =>
      tblDocumentoTipoPessoal.tblAssuntoDocTpArqPessoals,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "COD_DOCUMENTO_TIPO_PESSOAL",
      referencedColumnName: "codDocumentoTipoPessoal",
    },
  ])
  codDocumentoTipoPessoal: TblDocumentoTipoPessoal;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";

@Index(
  "PK_TBL_ASSUNTO_DOC_RELACIONAME",
  ["codRelacionamentoTipo", "codAssuntoDocumentoTipo"],
  { unique: true }
)
@Entity("TBL_ASSUNTO_DOC_RELACIONAMENTO")
export class TblAssuntoDocRelacionamento {
  @Column("number", {
    primary: true,
    name: "COD_RELACIONAMENTO_TIPO",
    precision: 10,
    scale: 0,
  })
  codRelacionamentoTipo: number;

  @Column("number", {
    primary: true,
    name: "COD_ASSUNTO_DOCUMENTO_TIPO",
    precision: 10,
    scale: 0,
  })
  codAssuntoDocumentoTipo: number;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) =>
      tblAssuntoDocumentoTipo.tblAssuntoDocRelacionamentos,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo2: TblAssuntoDocumentoTipo;
}

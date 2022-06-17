import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressadoDocumento } from "./TblInteressadoDocumento";
import { TblInteressado } from "./TblInteressado";

@Index("PK_TBL_INTERESSADO_DOC_ASS", ["codInteressadoDocAssinatura"], {
  unique: true,
})
@Entity("TBL_INTERESSADO_DOC_ASSINATURA")
export class TblInteressadoDocAssinatura {
  @Column("date", { name: "DT_ASSINATURA" })
  dtAssinatura: Date;

  @Column("number", { primary: true, name: "COD_INTERESSADO_DOC_ASSINATURA" })
  codInteressadoDocAssinatura: number;

  @ManyToOne(
    () => TblInteressadoDocumento,
    (tblInteressadoDocumento) =>
      tblInteressadoDocumento.tblInteressadoDocAssinaturas
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_DOCUMENTO",
      referencedColumnName: "codInteressadoDocumento",
    },
  ])
  codInteressadoDocumento: TblInteressadoDocumento;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoDocAssinaturas
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAtributo } from "./TblAtributo";
import { TblDocumentoTipo } from "./TblDocumentoTipo";

@Index("PK_TBL_DOCUMENTO_TIPO_ATRIBUTO", ["codAtributo", "codDocumentoTipo"], {
  unique: true,
})
@Entity("TBL_DOCUMENTO_TIPO_ATRIBUTO")
export class TblDocumentoTipoAtributo {
  @Column("date", {
    name: "DT_INCLUSAO",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtInclusao: Date | null;

  @Column("number", { primary: true, name: "COD_DOCUMENTO_TIPO", scale: 0 })
  codDocumentoTipo: number;

  @Column("number", { primary: true, name: "COD_ATRIBUTO", scale: 0 })
  codAtributo: number;

  @ManyToOne(
    () => TblAtributo,
    (tblAtributo) => tblAtributo.tblDocumentoTipoAtributos
  )
  @JoinColumn([{ name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" }])
  codAtributo2: TblAtributo;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblDocumentoTipoAtributos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo2: TblDocumentoTipo;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";

@Index("SYS_C00269678", ["codAcervoDocumento", "codAtributo"], { unique: true })
@Entity("TBL_ACERVO_DOCUMENTO_ATRIBUTO")
export class TblAcervoDocumentoAtributo {
  @Column("varchar2", { name: "TXT_VALOR", nullable: true, length: 4000 })
  txtValor: string | null;

  @Column("number", {
    primary: true,
    name: "COD_ATRIBUTO",
    precision: 10,
    scale: 0,
  })
  codAtributo: number;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_DOCUMENTO",
    precision: 10,
    scale: 0,
  })
  codAcervoDocumento: number;

  @ManyToOne(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.tblAcervoDocumentoAtributos
  )
  @JoinColumn([
    {
      name: "COD_ACERVO_DOCUMENTO",
      referencedColumnName: "codAcervoDocumento",
    },
  ])
  codAcervoDocumento2: TblAcervoDocumento;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAcervoTipo } from "./TblAcervoTipo";

@Index("SYS_C00269766", ["codAcervoTipo", "codAtributo"], { unique: true })
@Entity("TBL_ACERVO_TIPO_ATRIBUTO")
export class TblAcervoTipoAtributo {
  @Column("number", {
    name: "COD_PESQUISA",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codPesquisa: number;

  @Column("timestamp", {
    name: "DT_INCLUSAO",
    scale: 6,
    default: () => "(CURRENT_TIMESTAMP)",
  })
  dtInclusao: Date;

  @Column("number", {
    primary: true,
    name: "COD_ATRIBUTO",
    precision: 10,
    scale: 0,
  })
  codAtributo: number;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_TIPO",
    precision: 5,
    scale: 0,
  })
  codAcervoTipo: number;

  @ManyToOne(
    () => TblAcervoTipo,
    (tblAcervoTipo) => tblAcervoTipo.tblAcervoTipoAtributos
  )
  @JoinColumn([
    { name: "COD_ACERVO_TIPO", referencedColumnName: "codAcervoTipo" },
  ])
  codAcervoTipo2: TblAcervoTipo;
}

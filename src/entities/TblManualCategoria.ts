import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblManual } from "./TblManual";

@Index("PK_TBL_MANUAL_CATEGORIA", ["codCategoria"], { unique: true })
@Entity("TBL_MANUAL_CATEGORIA")
export class TblManualCategoria {
  @Column("varchar2", { name: "TXT_CATEGORIA", nullable: true, length: 255 })
  txtCategoria: string | null;

  @Column("number", {
    name: "COD_CATEGORIA_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codCategoriaSuperior: number;

  @Column("number", { primary: true, name: "COD_CATEGORIA", scale: 0 })
  codCategoria: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(() => TblManual, (tblManual) => tblManual.codCategoria)
  tblManuals: TblManual[];
}

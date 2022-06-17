import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LOTE", ["codLote"], { unique: true })
@Entity("TBL_LOTE")
export class TblLote {
  @Column("number", {
    primary: true,
    name: "COD_LOTE",
    precision: 10,
    scale: 0,
  })
  codLote: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("DR$IX_TXT_REFERENCIA$RC", ["rowNo"], { unique: true })
@Entity("DR$IX_TXT_REFERENCIA$R")
export class DrIxTxtReferenciaR {
  @Column("blob", { name: "DATA", nullable: true })
  data: Buffer | null;

  @Column("number", { primary: true, name: "ROW_NO", precision: 5, scale: 0 })
  rowNo: number;
}

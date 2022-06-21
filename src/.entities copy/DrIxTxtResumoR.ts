import { Column, Entity, Index } from "typeorm";

@Index("DR$IX_TXT_RESUMO$RC", ["rowNo"], { unique: true })
@Entity("DR$IX_TXT_RESUMO$R")
export class DrIxTxtResumoR {
  @Column("blob", { name: "DATA", nullable: true })
  data: Buffer | null;

  @Column("number", { primary: true, name: "ROW_NO", precision: 5, scale: 0 })
  rowNo: number;
}

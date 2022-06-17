import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462826", ["nltDocid"], { unique: true })
@Entity("DR$IX_TXT_REFERENCIA$N")
export class DrIxTxtReferenciaN {
  @Column("number", {
    primary: true,
    name: "NLT_DOCID",
    precision: 38,
    scale: 0,
  })
  nltDocid: number;

  @Column("char", { name: "NLT_MARK", length: 1 })
  nltMark: string;
}

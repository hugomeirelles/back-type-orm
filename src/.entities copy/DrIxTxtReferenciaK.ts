import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462820", ["textkey"], { unique: true })
@Entity("DR$IX_TXT_REFERENCIA$K")
export class DrIxTxtReferenciaK {
  @Column("number", { name: "DOCID", nullable: true, precision: 38, scale: 0 })
  docid: number | null;

  @Column("rowid", { primary: true, name: "TEXTKEY" })
  textkey: number;
}

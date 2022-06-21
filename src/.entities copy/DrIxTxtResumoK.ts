import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462800", ["textkey"], { unique: true })
@Entity("DR$IX_TXT_RESUMO$K")
export class DrIxTxtResumoK {
  @Column("rowid", { primary: true, name: "TEXTKEY" })
  textkey: number;

  @Column("number", { name: "DOCID", nullable: true, precision: 38, scale: 0 })
  docid: number | null;
}

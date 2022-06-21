import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462900", ["textkey"], { unique: true })
@Entity("DR$IX_TXT_INTERESSADO$K")
export class DrIxTxtInteressadoK {
  @Column("rowid", { primary: true, name: "TEXTKEY" })
  textkey: number;

  @Column("number", { name: "DOCID", nullable: true, precision: 38, scale: 0 })
  docid: number | null;
}

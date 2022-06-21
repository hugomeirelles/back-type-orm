import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462860", ["textkey"], { unique: true })
@Entity("DR$IX_TXT_COMENTARIO$K")
export class DrIxTxtComentarioK {
  @Column("rowid", { primary: true, name: "TEXTKEY" })
  textkey: number;

  @Column("number", { name: "DOCID", nullable: true, precision: 38, scale: 0 })
  docid: number | null;
}

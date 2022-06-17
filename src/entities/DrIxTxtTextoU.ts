import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270488", ["rid"], { unique: true })
@Entity("DR$IX_TXT_TEXTO$U")
export class DrIxTxtTextoU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

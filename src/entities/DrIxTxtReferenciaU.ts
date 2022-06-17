import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270476", ["rid"], { unique: true })
@Entity("DR$IX_TXT_REFERENCIA$U")
export class DrIxTxtReferenciaU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

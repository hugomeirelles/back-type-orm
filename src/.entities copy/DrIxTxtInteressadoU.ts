import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270524", ["rid"], { unique: true })
@Entity("DR$IX_TXT_INTERESSADO$U")
export class DrIxTxtInteressadoU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

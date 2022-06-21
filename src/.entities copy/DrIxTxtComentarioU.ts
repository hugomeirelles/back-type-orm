import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270500", ["rid"], { unique: true })
@Entity("DR$IX_TXT_COMENTARIO$U")
export class DrIxTxtComentarioU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

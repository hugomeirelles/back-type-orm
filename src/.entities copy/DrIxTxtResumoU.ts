import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270464", ["rid"], { unique: true })
@Entity("DR$IX_TXT_RESUMO$U")
export class DrIxTxtResumoU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

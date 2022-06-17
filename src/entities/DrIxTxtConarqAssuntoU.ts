import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270536", ["rid"], { unique: true })
@Entity("DR$IX_TXT_CONARQ_ASSUNTO$U")
export class DrIxTxtConarqAssuntoU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

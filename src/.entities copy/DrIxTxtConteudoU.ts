import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270560", ["rid"], { unique: true })
@Entity("DR$IX_TXT_CONTEUDO$U")
export class DrIxTxtConteudoU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

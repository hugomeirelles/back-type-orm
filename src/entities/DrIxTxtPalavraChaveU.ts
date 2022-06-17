import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270512", ["rid"], { unique: true })
@Entity("DR$IX_TXT_PALAVRA_CHAVE$U")
export class DrIxTxtPalavraChaveU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

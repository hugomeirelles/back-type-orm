import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00270548", ["rid"], { unique: true })
@Entity("DR$IX_TXT_IDENTIFICACAO$U")
export class DrIxTxtIdentificacaoU {
  @Column("rowid", { primary: true, name: "RID" })
  rid: number;
}

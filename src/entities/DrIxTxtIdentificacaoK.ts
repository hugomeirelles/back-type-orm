import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462940", ["textkey"], { unique: true })
@Entity("DR$IX_TXT_IDENTIFICACAO$K")
export class DrIxTxtIdentificacaoK {
  @Column("rowid", { primary: true, name: "TEXTKEY" })
  textkey: number;

  @Column("number", { name: "DOCID", nullable: true, precision: 38, scale: 0 })
  docid: number | null;
}

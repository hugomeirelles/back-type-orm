import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462960", ["textkey"], { unique: true })
@Entity("DR$IX_TXT_CONTEUDO$K")
export class DrIxTxtConteudoK {
  @Column("rowid", { primary: true, name: "TEXTKEY" })
  textkey: number;

  @Column("number", { name: "DOCID", nullable: true, precision: 38, scale: 0 })
  docid: number | null;
}

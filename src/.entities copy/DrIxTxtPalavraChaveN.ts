import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462886", ["nltDocid"], { unique: true })
@Entity("DR$IX_TXT_PALAVRA_CHAVE$N")
export class DrIxTxtPalavraChaveN {
  @Column("char", { name: "NLT_MARK", length: 1 })
  nltMark: string;

  @Column("number", {
    primary: true,
    name: "NLT_DOCID",
    precision: 38,
    scale: 0,
  })
  nltDocid: number;
}

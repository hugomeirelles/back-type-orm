import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462926", ["nltDocid"], { unique: true })
@Entity("DR$IX_TXT_CONARQ_ASSUNTO$N")
export class DrIxTxtConarqAssuntoN {
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

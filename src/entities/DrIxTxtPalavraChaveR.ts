import { Column, Entity, Index } from "typeorm";

@Index("DR$IX_TXT_PALAVRA_CHAVE$RC", ["rowNo"], { unique: true })
@Entity("DR$IX_TXT_PALAVRA_CHAVE$R")
export class DrIxTxtPalavraChaveR {
  @Column("number", { primary: true, name: "ROW_NO", precision: 5, scale: 0 })
  rowNo: number;

  @Column("blob", { name: "DATA", nullable: true })
  data: Buffer | null;
}

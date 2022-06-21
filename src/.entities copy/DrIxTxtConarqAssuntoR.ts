import { Column, Entity, Index } from "typeorm";

@Index("DR$IX_TXT_CONARQ_ASSUNTO$RC", ["rowNo"], { unique: true })
@Entity("DR$IX_TXT_CONARQ_ASSUNTO$R")
export class DrIxTxtConarqAssuntoR {
  @Column("blob", { name: "DATA", nullable: true })
  data: Buffer | null;

  @Column("number", { primary: true, name: "ROW_NO", precision: 5, scale: 0 })
  rowNo: number;
}

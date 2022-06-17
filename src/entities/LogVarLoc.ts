import { Column, Entity } from "typeorm";

@Entity("LOG_VAR_LOC")
export class LogVarLoc {
  @Column("varchar2", { name: "VAL_TX", length: 72 })
  valTx: string;

  @Column("number", { name: "VAL_NU", scale: 0 })
  valNu: number;

  @Column("number", { name: "LOC_NU", nullable: true, scale: 0 })
  locNu: number | null;
}

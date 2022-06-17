import { Column, Entity } from "typeorm";

@Entity("LOG_VAR_BAI")
export class LogVarBai {
  @Column("varchar2", { name: "VDB_TX", length: 72 })
  vdbTx: string;

  @Column("number", { name: "VDB_NU", scale: 0 })
  vdbNu: number;

  @Column("number", { name: "BAI_NU", scale: 0 })
  baiNu: number;
}

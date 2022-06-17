import { Column, Entity } from "typeorm";

@Entity("LOG_VAR_BAI_1803")
export class LogVarBai_1803 {
  @Column("varchar2", { name: "VDB_TX", length: 72 })
  vdbTx: string;

  @Column("number", { name: "VDB_NU", scale: 0 })
  vdbNu: number;

  @Column("number", { name: "BAI_NU", scale: 0 })
  baiNu: number;
}

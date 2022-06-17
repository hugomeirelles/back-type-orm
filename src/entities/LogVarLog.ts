import { Column, Entity } from "typeorm";

@Entity("LOG_VAR_LOG")
export class LogVarLog {
  @Column("varchar2", { name: "VLO_TX", nullable: true, length: 150 })
  vloTx: string | null;

  @Column("number", { name: "VLO_NU", nullable: true, scale: 0 })
  vloNu: number | null;

  @Column("varchar2", { name: "TLO_TX", nullable: true, length: 36 })
  tloTx: string | null;

  @Column("number", { name: "LOG_NU", nullable: true, scale: 0 })
  logNu: number | null;
}

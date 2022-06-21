import { Column, Entity } from "typeorm";

@Entity("LOG_NUM_SEC_1803")
export class LogNumSec_1803 {
  @Column("varchar2", { name: "SEC_NU_INI", length: 10 })
  secNuIni: string;

  @Column("varchar2", { name: "SEC_NU_FIM", length: 10 })
  secNuFim: string;

  @Column("varchar2", { name: "SEC_IN_LADO", length: 1 })
  secInLado: string;

  @Column("number", { name: "LOG_NU", scale: 0 })
  logNu: number;
}

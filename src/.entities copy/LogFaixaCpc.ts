import { Column, Entity } from "typeorm";

@Entity("LOG_FAIXA_CPC")
export class LogFaixaCpc {
  @Column("number", { name: "CPC_NU", scale: 0 })
  cpcNu: number;

  @Column("varchar2", { name: "CPC_INICIAL", length: 6 })
  cpcInicial: string;

  @Column("varchar2", { name: "CPC_FINAL", length: 6 })
  cpcFinal: string;
}

import { Column, Entity } from "typeorm";

@Entity("LOG_FAIXA_UOP")
export class LogFaixaUop {
  @Column("number", { name: "UOP_NU", scale: 0 })
  uopNu: number;

  @Column("varchar2", { name: "FNC_INICIAL", length: 8 })
  fncInicial: string;

  @Column("varchar2", { name: "FNC_FINAL", length: 6 })
  fncFinal: string;
}

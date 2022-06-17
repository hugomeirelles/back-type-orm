import { Column, Entity } from "typeorm";

@Entity("LOG_FAIXA_UOP_1803")
export class LogFaixaUop_1803 {
  @Column("number", { name: "UOP_NU", scale: 0 })
  uopNu: number;

  @Column("varchar2", { name: "FNC_INICIAL", length: 8 })
  fncInicial: string;

  @Column("varchar2", { name: "FNC_FINAL", length: 6 })
  fncFinal: string;
}

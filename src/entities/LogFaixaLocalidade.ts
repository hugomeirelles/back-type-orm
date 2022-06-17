import { Column, Entity } from "typeorm";

@Entity("LOG_FAIXA_LOCALIDADE")
export class LogFaixaLocalidade {
  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("varchar2", { name: "LOC_CEP_INI", length: 8 })
  locCepIni: string;

  @Column("varchar2", { name: "LOC_CEP_FIM", length: 8 })
  locCepFim: string;
}

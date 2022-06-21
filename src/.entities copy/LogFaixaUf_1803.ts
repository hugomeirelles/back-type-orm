import { Column, Entity } from "typeorm";

@Entity("LOG_FAIXA_UF_1803")
export class LogFaixaUf_1803 {
  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("varchar2", { name: "UFE_CEP_INI", length: 8 })
  ufeCepIni: string;

  @Column("varchar2", { name: "UFE_CEP_FIM", length: 8 })
  ufeCepFim: string;
}

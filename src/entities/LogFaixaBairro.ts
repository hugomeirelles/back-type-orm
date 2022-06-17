import { Column, Entity } from "typeorm";

@Entity("LOG_FAIXA_BAIRRO")
export class LogFaixaBairro {
  @Column("varchar2", { name: "FCB_CEP_INI", length: 8 })
  fcbCepIni: string;

  @Column("varchar2", { name: "FCB_CEP_FIM", length: 8 })
  fcbCepFim: string;

  @Column("number", { name: "BAI_NU", scale: 0 })
  baiNu: number;
}

import { Column, Entity } from "typeorm";

@Entity("LOG_LOGRADOURO")
export class LogLogradouro {
  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("varchar2", { name: "TLO_TX", length: 36 })
  tloTx: string;

  @Column("varchar2", { name: "LOG_STA_TLO", nullable: true, length: 1 })
  logStaTlo: string | null;

  @Column("number", { name: "LOG_NU", scale: 0 })
  logNu: number;

  @Column("varchar2", { name: "LOG_NO_ABREV", nullable: true, length: 100 })
  logNoAbrev: string | null;

  @Column("varchar2", { name: "LOG_NO", length: 100 })
  logNo: string;

  @Column("varchar2", { name: "LOG_COMPLEMENTO", nullable: true, length: 100 })
  logComplemento: string | null;

  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("varchar2", { name: "CEP", length: 8 })
  cep: string;

  @Column("number", { name: "BAI_NU_INI", nullable: true, scale: 0 })
  baiNuIni: number | null;

  @Column("number", { name: "BAI_NU_FIM", nullable: true, scale: 0 })
  baiNuFim: number | null;
}

import { Column, Entity } from "typeorm";

@Entity("LOG_BAIRRO")
export class LogBairro {
  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("number", { name: "BAI_NU", scale: 0 })
  baiNu: number;

  @Column("varchar2", { name: "BAI_NO_ABREV", nullable: true, length: 36 })
  baiNoAbrev: string | null;

  @Column("varchar2", { name: "BAI_NO", length: 72 })
  baiNo: string;
}

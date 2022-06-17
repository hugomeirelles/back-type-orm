import { Column, Entity } from "typeorm";

@Entity("LOG_BAIRRO_1803")
export class LogBairro_1803 {
  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("varchar2", { name: "BAI_OPERACAO", nullable: true, length: 3 })
  baiOperacao: string | null;

  @Column("number", { name: "BAI_NU", scale: 0 })
  baiNu: number;

  @Column("varchar2", { name: "BAI_NO_ABREV", nullable: true, length: 36 })
  baiNoAbrev: string | null;

  @Column("varchar2", { name: "BAI_NO", length: 72 })
  baiNo: string;
}

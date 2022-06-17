import { Column, Entity } from "typeorm";

@Entity("LOG_UNID_OPER")
export class LogUnidOper {
  @Column("number", { name: "UOP_NU", scale: 0 })
  uopNu: number;

  @Column("varchar2", { name: "UOP_NO_ABREV", nullable: true, length: 36 })
  uopNoAbrev: string | null;

  @Column("varchar2", { name: "UOP_NO", length: 100 })
  uopNo: string;

  @Column("varchar2", { name: "UOP_IN_CP", length: 1 })
  uopInCp: string;

  @Column("varchar2", { name: "UOP_ENDERECO", length: 100 })
  uopEndereco: string;

  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("number", { name: "LOG_NU", nullable: true, scale: 0 })
  logNu: number | null;

  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("varchar2", { name: "CEP", length: 8 })
  cep: string;

  @Column("number", { name: "BAI_NU", scale: 0 })
  baiNu: number;
}

import { Column, Entity } from "typeorm";

@Entity("LOG_CPC")
export class LogCpc {
  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("number", { name: "CPC_NU", scale: 0 })
  cpcNu: number;

  @Column("varchar2", { name: "CPC_NO", length: 100 })
  cpcNo: string;

  @Column("varchar2", { name: "CPC_ENDERECO", length: 100 })
  cpcEndereco: string;

  @Column("varchar2", { name: "CEP", length: 8 })
  cep: string;
}

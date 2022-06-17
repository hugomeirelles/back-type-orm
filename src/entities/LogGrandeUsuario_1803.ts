import { Column, Entity } from "typeorm";

@Entity("LOG_GRANDE_USUARIO_1803")
export class LogGrandeUsuario_1803 {
  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("number", { name: "LOG_NU", nullable: true, scale: 0 })
  logNu: number | null;

  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("number", { name: "GRU_NU", scale: 0 })
  gruNu: number;

  @Column("varchar2", { name: "GRU_NO_ABREV", nullable: true, length: 50 })
  gruNoAbrev: string | null;

  @Column("varchar2", { name: "GRU_NO", length: 72 })
  gruNo: string;

  @Column("varchar2", { name: "GRU_ENDERECO", length: 100 })
  gruEndereco: string;

  @Column("varchar2", { name: "CEP", length: 8 })
  cep: string;

  @Column("number", { name: "BAI_NU", scale: 0 })
  baiNu: number;
}

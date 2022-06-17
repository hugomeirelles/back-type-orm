import { Column, Entity } from "typeorm";

@Entity("LOG_LOCALIDADE")
export class LogLocalidade {
  @Column("varchar2", { name: "UFE_SG", length: 2 })
  ufeSg: string;

  @Column("number", { name: "MUN_NU", nullable: true, scale: 0 })
  munNu: number | null;

  @Column("number", { name: "LOC_NU_SUB", nullable: true, scale: 0 })
  locNuSub: number | null;

  @Column("number", { name: "LOC_NU", scale: 0 })
  locNu: number;

  @Column("varchar2", { name: "LOC_NO_ABREV", nullable: true, length: 36 })
  locNoAbrev: string | null;

  @Column("varchar2", { name: "LOC_NO", length: 72 })
  locNo: string;

  @Column("varchar2", { name: "LOC_IN_TIPO_LOC", length: 1 })
  locInTipoLoc: string;

  @Column("varchar2", { name: "LOC_IN_SIT", length: 1 })
  locInSit: string;

  @Column("varchar2", { name: "CEP", nullable: true, length: 8 })
  cep: string | null;
}

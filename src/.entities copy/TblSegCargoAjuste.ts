import { Column, Entity } from "typeorm";

@Entity("TBL_SEG_CARGO_AJUSTE")
export class TblSegCargoAjuste {
  @Column("varchar2", { name: "TXT_CARGO_ATUAL", nullable: true, length: 255 })
  txtCargoAtual: string | null;

  @Column("varchar2", {
    name: "TXT_CARGO_ANTERIOR",
    nullable: true,
    length: 255,
  })
  txtCargoAnterior: string | null;

  @Column("number", {
    name: "COD_ORGAO_ATUAL",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoAtual: number | null;

  @Column("number", {
    name: "COD_ORGAO_ANTERIOR",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoAnterior: number | null;
}

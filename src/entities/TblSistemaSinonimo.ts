import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_SINONIMO", ["codSinonimo"], { unique: true })
@Entity("TBL_SISTEMA_SINONIMO")
export class TblSistemaSinonimo {
  @Column("varchar2", { name: "TXT_SINONIMO", length: 255 })
  txtSinonimo: string;

  @Column("varchar2", { name: "TXT_PALAVRA", length: 255 })
  txtPalavra: string;

  @Column("number", {
    primary: true,
    name: "COD_SINONIMO",
    precision: 6,
    scale: 0,
  })
  codSinonimo: number;

  @Column("number", { name: "COD_RELEVANCIA", scale: 0, default: () => "0" })
  codRelevancia: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

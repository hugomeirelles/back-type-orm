import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_VALOR_TEMP", ["codJudicialTemp", "codJudicialValor"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_VALOR_TEMP")
export class TblJudicialValorTemp {
  @Column("number", { name: "COD_VALOR_TIPO", scale: 0 })
  codValorTipo: number;

  @Column("number", { name: "COD_VALOR", precision: 18, scale: 2 })
  codValor: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL_VALOR", scale: 0 })
  codJudicialValor: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL_TEMP", scale: 0 })
  codJudicialTemp: number;
}

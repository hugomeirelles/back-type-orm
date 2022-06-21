import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_ATO_TEMP", ["codJudicialTemp", "codJudicialAto"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_ATO_TEMP")
export class TblJudicialAtoTemp {
  @Column("varchar2", { name: "TXT_ATO_NUMERO", length: 50 })
  txtAtoNumero: string;

  @Column("number", { primary: true, name: "COD_JUDICIAL_TEMP", scale: 0 })
  codJudicialTemp: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL_ATO", scale: 0 })
  codJudicialAto: number;

  @Column("number", { name: "COD_ATO_TIPO", scale: 0 })
  codAtoTipo: number;
}

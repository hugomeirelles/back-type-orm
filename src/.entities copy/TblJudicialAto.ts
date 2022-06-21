import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAtoTipo } from "./TblAtoTipo";
import { TblJudicial } from "./TblJudicial";

@Index("PK_TBL_JUDICIAL_ATO", ["codJudicial", "codJudicialAto"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_ATO")
export class TblJudicialAto {
  @Column("varchar2", { name: "TXT_ATO_NUMERO", length: 50 })
  txtAtoNumero: string;

  @Column("number", { primary: true, name: "COD_JUDICIAL_ATO", scale: 0 })
  codJudicialAto: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @ManyToOne(() => TblAtoTipo, (tblAtoTipo) => tblAtoTipo.tblJudicialAtoes)
  @JoinColumn([{ name: "COD_ATO_TIPO", referencedColumnName: "codAtoTipo" }])
  codAtoTipo: TblAtoTipo;

  @ManyToOne(() => TblJudicial, (tblJudicial) => tblJudicial.tblJudicialAtoes)
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;
}

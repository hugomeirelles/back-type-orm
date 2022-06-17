import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicial } from "./TblJudicial";
import { TblJudicialParteTipo } from "./TblJudicialParteTipo";

@Entity("TBL_JUDICIAL_PARTE")
export class TblJudicialParte {
  @Column("number", { name: "COD_PARTE", scale: 0 })
  codParte: number;

  @ManyToOne(() => TblJudicial, (tblJudicial) => tblJudicial.tblJudicialPartes)
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial: TblJudicial;

  @ManyToOne(
    () => TblJudicialParteTipo,
    (tblJudicialParteTipo) => tblJudicialParteTipo.tblJudicialPartes
  )
  @JoinColumn([
    { name: "COD_PARTE_TIPO", referencedColumnName: "codJudicialParteTipo" },
  ])
  codParteTipo: TblJudicialParteTipo;
}

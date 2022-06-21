import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFeriadoTipo } from "./TblFeriadoTipo";

@Index("TBL_FERIADO_PK", ["codFeriado"], { unique: true })
@Entity("TBL_FERIADO")
export class TblFeriado {
  @Column("varchar2", { name: "TXT_FERIADO", nullable: true, length: 100 })
  txtFeriado: string | null;

  @Column("date", { name: "DT_FERIADO", nullable: true })
  dtFeriado: Date | null;

  @Column("number", { primary: true, name: "COD_FERIADO" })
  codFeriado: number;

  @ManyToOne(
    () => TblFeriadoTipo,
    (tblFeriadoTipo) => tblFeriadoTipo.tblFeriados
  )
  @JoinColumn([{ name: "COD_TIPO", referencedColumnName: "codTipo" }])
  codTipo: TblFeriadoTipo;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressado } from "./TblInteressado";

@Index("TBL_MINUTA_REMETENTE_INDX", ["codMinuta", "codRemetente"], {})
@Entity("TBL_MINUTA_REMETENTE")
export class TblMinutaRemetente {
  @Column("date", {
    name: "DT_INCLUSAO",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtInclusao: Date | null;

  @Column("number", {
    name: "COD_REMETENTE_TIPO",
    scale: 0,
    default: () => "0",
  })
  codRemetenteTipo: number;

  @Column("number", { name: "COD_REMETENTE", scale: 0 })
  codRemetente: number;

  @Column("number", { name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblMinutaRemetentes
  )
  @JoinColumn([
    { name: "COD_REMETENTE", referencedColumnName: "codInteressado" },
  ])
  codRemetente2: TblInteressado;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressado } from "./TblInteressado";

@Index("TBL_MINUTA_INTERESSADO_INDX", ["codMinuta", "codInteressado"], {})
@Entity("TBL_MINUTA_INTERESSADO")
export class TblMinutaInteressado {
  @Column("date", {
    name: "DT_INCLUSAO",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtInclusao: Date | null;

  @Column("number", { name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @Column("number", {
    name: "COD_INTERESSADO_TIPO",
    scale: 0,
    default: () => "0",
  })
  codInteressadoTipo: number;

  @Column("number", { name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblMinutaInteressados
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado2: TblInteressado;
}

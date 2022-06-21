import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";
import { TblInteressado } from "./TblInteressado";

@Index(
  "PK_PROTOCOLO_INTERESSADO_HIST",
  ["codProtocolo", "codInteressado", "dtInclusao"],
  { unique: true }
)
@Entity("TBL_PROTOCOLO_INTERESSADO_HIST")
export class TblProtocoloInteressadoHist {
  @Column("timestamp", {
    primary: true,
    name: "DT_INCLUSAO",
    scale: 6,
    default: () => "(CURRENT_TIMESTAMP)",
  })
  dtInclusao: Date;

  @Column("number", {
    primary: true,
    name: "COD_PROTOCOLO",
    precision: 10,
    scale: 0,
  })
  codProtocolo: number;

  @Column("number", {
    primary: true,
    name: "COD_INTERESSADO",
    precision: 10,
    scale: 0,
  })
  codInteressado: number;

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblProtocoloInteressadoHists
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo2: TblProtocolo;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblProtocoloInteressadoHists
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado2: TblInteressado;
}

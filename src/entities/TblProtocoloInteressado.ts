import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblProtocolo } from "./TblProtocolo";
import { TblInteressadoVinculoEmpre } from "./TblInteressadoVinculoEmpre";

@Index(
  "PK_PROTOCOLO_INTERESSADO",
  ["codProtocolo", "codInteressado", "codInteressadoTipo"],
  { unique: true }
)
@Index("TBL_PROTOCOLO_INTERESSADO_INDX", ["codProtocolo", "codInteressado"], {})
@Entity("TBL_PROTOCOLO_INTERESSADO")
export class TblProtocoloInteressado {
  @Column("date", {
    name: "DT_INCLUSAO",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtInclusao: Date | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    primary: true,
    name: "COD_INTERESSADO_TIPO",
    scale: 0,
    default: () => "0",
  })
  codInteressadoTipo: number;

  @Column("number", { primary: true, name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblProtocoloInteressados
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado2: TblInteressado;

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblProtocoloInteressados
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo2: TblProtocolo;

  @ManyToOne(
    () => TblInteressadoVinculoEmpre,
    (tblInteressadoVinculoEmpre) =>
      tblInteressadoVinculoEmpre.tblProtocoloInteressados
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_VINCULO_EMPRE",
      referencedColumnName: "codInteressadoVinculoEmpre",
    },
  ])
  codInteressadoVinculoEmpre: TblInteressadoVinculoEmpre;
}

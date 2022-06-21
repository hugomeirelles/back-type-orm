import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressado } from "./TblInteressado";

@Index(
  "PK_QUADRO_SOCIETARIO",
  ["codInteressadoEmpresa", "codInteressadoSocio"],
  { unique: true }
)
@Entity("TBL_QUADRO_SOCIETARIO")
export class TblQuadroSocietario {
  @Column("number", { primary: true, name: "COD_INTERESSADO_SOCIO" })
  codInteressadoSocio: number;

  @Column("number", { primary: true, name: "COD_INTERESSADO_EMPRESA" })
  codInteressadoEmpresa: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblQuadroSocietarios
  )
  @JoinColumn([
    { name: "COD_INTERESSADO_EMPRESA", referencedColumnName: "codInteressado" },
  ])
  codInteressadoEmpresa2: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblQuadroSocietarios2
  )
  @JoinColumn([
    { name: "COD_INTERESSADO_SOCIO", referencedColumnName: "codInteressado" },
  ])
  codInteressadoSocio2: TblInteressado;
}

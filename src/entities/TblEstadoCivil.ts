import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("PK_TBL_ESTADO_CIVIL", ["codEstadoCivil"], { unique: true })
@Entity("TBL_ESTADO_CIVIL")
export class TblEstadoCivil {
  @Column("varchar2", { name: "TXT_ESTADO_CIVIL", length: 255 })
  txtEstadoCivil: string;

  @Column("number", {
    primary: true,
    name: "COD_ESTADO_CIVIL",
    precision: 10,
    scale: 0,
  })
  codEstadoCivil: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codEstadoCivil
  )
  tblInteressados: TblInteressado[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codEstadoCivil
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];
}

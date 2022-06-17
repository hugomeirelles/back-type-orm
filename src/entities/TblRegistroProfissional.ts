import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("PK_REGISTRO_PROFISSIONAL", ["codTipoRegistro"], { unique: true })
@Entity("TBL_REGISTRO_PROFISSIONAL")
export class TblRegistroProfissional {
  @Column("varchar2", { name: "TXT_TIPO_REGISTRO", length: 250 })
  txtTipoRegistro: string;

  @Column("number", {
    primary: true,
    name: "COD_TIPO_REGISTRO",
    precision: 10,
    scale: 0,
  })
  codTipoRegistro: number;

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codTipoRegistro
  )
  tblInteressados: TblInteressado[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codRegistroProfissional
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];
}

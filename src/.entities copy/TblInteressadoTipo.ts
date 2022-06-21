import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocoloInteressadoEnde } from "./TblProtocoloInteressadoEnde";

@Index("PK_INTERESSADO_TIPO", ["codInteressadoTipo"], { unique: true })
@Entity("TBL_INTERESSADO_TIPO")
export class TblInteressadoTipo {
  @Column("varchar2", { name: "TXT_INTERESSADO_TIPO", length: 100 })
  txtInteressadoTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_INTERESSADO_TIPO",
    precision: 10,
    scale: 0,
  })
  codInteressadoTipo: number;

  @OneToMany(
    () => TblProtocoloInteressadoEnde,
    (tblProtocoloInteressadoEnde) =>
      tblProtocoloInteressadoEnde.codInteressadoTipo2
  )
  tblProtocoloInteressadoEndes: TblProtocoloInteressadoEnde[];
}

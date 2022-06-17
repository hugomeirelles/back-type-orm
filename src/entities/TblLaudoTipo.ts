import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocoloParecer } from "./TblProtocoloParecer";

@Index("PK_TBL_LAUDO_TIPO", ["codLaudoTipo"], { unique: true })
@Entity("TBL_LAUDO_TIPO")
export class TblLaudoTipo {
  @Column("varchar2", { name: "TXT_LAUDO_TIPO", length: 255 })
  txtLaudoTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_LAUDO_TIPO",
    precision: 10,
    scale: 0,
  })
  codLaudoTipo: number;

  @OneToMany(
    () => TblProtocoloParecer,
    (tblProtocoloParecer) => tblProtocoloParecer.codLaudoTipo
  )
  tblProtocoloParecers: TblProtocoloParecer[];
}

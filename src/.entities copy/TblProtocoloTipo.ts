import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";
import { TblProtocoloNumero } from "./TblProtocoloNumero";

@Index("PK_TBL_TIPODOCUMENTO", ["codProtocoloTipo"], { unique: true })
@Entity("TBL_PROTOCOLO_TIPO")
export class TblProtocoloTipo {
  @Column("varchar2", { name: "TXT_PROTOCOLO_TIPO", length: 30 })
  txtProtocoloTipo: string;

  @Column("number", { primary: true, name: "COD_PROTOCOLO_TIPO", scale: 0 })
  codProtocoloTipo: number;

  @Column("number", { name: "COD_LOTE", scale: 0, default: () => "1" })
  codLote: number;

  @OneToMany(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.codProtocoloTipo2
  )
  tblProtocolos: TblProtocolo[];

  @OneToMany(
    () => TblProtocoloNumero,
    (tblProtocoloNumero) => tblProtocoloNumero.codProtocoloTipo2
  )
  tblProtocoloNumeros: TblProtocoloNumero[];
}

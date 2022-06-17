import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAssuntoDocTipoSecao } from "./TblAssuntoDocTipoSecao";
import { TblProtocoloSecao } from "./TblProtocoloSecao";

@Index("SYS_C00269564", ["codSecao"], { unique: true })
@Entity("TBL_SECAO")
export class TblSecao {
  @Column("varchar2", { name: "TXT_SECAO", length: 155 })
  txtSecao: string;

  @Column("number", {
    primary: true,
    name: "COD_SECAO",
    precision: 2,
    scale: 0,
  })
  codSecao: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;

  @OneToMany(
    () => TblAssuntoDocTipoSecao,
    (tblAssuntoDocTipoSecao) => tblAssuntoDocTipoSecao.codSecao2
  )
  tblAssuntoDocTipoSecaos: TblAssuntoDocTipoSecao[];

  @OneToMany(
    () => TblProtocoloSecao,
    (tblProtocoloSecao) => tblProtocoloSecao.codSecao
  )
  tblProtocoloSecaos: TblProtocoloSecao[];
}

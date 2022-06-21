import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblJudicialAto } from "./TblJudicialAto";

@Index("PK_TBL_ATO_TIPO", ["codAtoTipo"], { unique: true })
@Entity("TBL_ATO_TIPO")
export class TblAtoTipo {
  @Column("varchar2", { name: "TXT_ATO_TIPO", length: 100 })
  txtAtoTipo: string;

  @Column("number", { primary: true, name: "COD_ATO_TIPO", scale: 0 })
  codAtoTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblJudicialAto,
    (tblJudicialAto) => tblJudicialAto.codAtoTipo
  )
  tblJudicialAtoes: TblJudicialAto[];
}

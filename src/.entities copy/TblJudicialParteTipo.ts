import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblJudicialParte } from "./TblJudicialParte";

@Index("PK_TBL_JUDICIAL_PARTE_TIPO", ["codJudicialParteTipo"], { unique: true })
@Entity("TBL_JUDICIAL_PARTE_TIPO")
export class TblJudicialParteTipo {
  @Column("varchar2", { name: "TXT_JUDICIAL_PARTE_TIPO", length: 255 })
  txtJudicialParteTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_JUDICIAL_PARTE_TIPO",
    scale: 0,
  })
  codJudicialParteTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblJudicialParte,
    (tblJudicialParte) => tblJudicialParte.codParteTipo
  )
  tblJudicialPartes: TblJudicialParte[];
}

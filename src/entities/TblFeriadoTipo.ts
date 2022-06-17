import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblFeriado } from "./TblFeriado";

@Index("PK_FERIADO_TIPO", ["codTipo"], { unique: true })
@Entity("TBL_FERIADO_TIPO")
export class TblFeriadoTipo {
  @Column("varchar2", { name: "TXT_TIPO", nullable: true, length: 20 })
  txtTipo: string | null;

  @Column("number", { primary: true, name: "COD_TIPO" })
  codTipo: number;

  @OneToMany(() => TblFeriado, (tblFeriado) => tblFeriado.codTipo)
  tblFeriados: TblFeriado[];
}

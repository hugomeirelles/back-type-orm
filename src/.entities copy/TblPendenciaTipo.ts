import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblPendencia } from "./TblPendencia";

@Index("TBL_PENDENCIA_TIPO_PK", ["codPendenciaTipo"], { unique: true })
@Entity("TBL_PENDENCIA_TIPO")
export class TblPendenciaTipo {
  @Column("varchar2", { name: "TXT_PENDENCIA_TIPO", length: 100 })
  txtPendenciaTipo: string;

  @Column("number", { primary: true, name: "COD_PENDENCIA_TIPO" })
  codPendenciaTipo: number;

  @Column("number", { name: "COD_ATIVO", default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblPendencia,
    (tblPendencia) => tblPendencia.codPendenciaTipo
  )
  tblPendencias: TblPendencia[];
}

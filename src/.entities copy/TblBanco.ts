import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";

@Index("PK_TBL_BANCO", ["codBanco"], { unique: true })
@Entity("TBL_BANCO")
export class TblBanco {
  @Column("varchar2", { name: "TXT_BANCO", length: 100 })
  txtBanco: string;

  @Column("number", { name: "COD_NUMERO", scale: 0 })
  codNumero: number;

  @Column("number", { primary: true, name: "COD_BANCO", scale: 0 })
  codBanco: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(() => TblInteressado, (tblInteressado) => tblInteressado.codBanco)
  tblInteressados: TblInteressado[];
}

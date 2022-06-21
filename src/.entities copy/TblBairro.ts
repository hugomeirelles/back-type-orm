import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";

@Index("PK_BAIRRO", ["codBairro"], { unique: true })
@Entity("TBL_BAIRRO")
export class TblBairro {
  @Column("varchar2", { name: "TXT_DESCRICAO", length: 255 })
  txtDescricao: string;

  @Column("number", {
    primary: true,
    name: "COD_BAIRRO",
    precision: 10,
    scale: 0,
  })
  codBairro: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;

  @OneToMany(() => TblInteressado, (tblInteressado) => tblInteressado.codBairro)
  tblInteressados: TblInteressado[];
}

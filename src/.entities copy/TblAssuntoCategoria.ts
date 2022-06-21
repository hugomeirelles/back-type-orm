import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAssuntoDescricao } from "./TblAssuntoDescricao";

@Index("PK_TBL_ASSUNTO_CATEGORIA", ["codAssuntoCategoria"], { unique: true })
@Entity("TBL_ASSUNTO_CATEGORIA")
export class TblAssuntoCategoria {
  @Column("varchar2", {
    name: "TXT_ASSUNTO_CATEGORIA",
    nullable: true,
    length: 100,
  })
  txtAssuntoCategoria: string | null;

  @Column("number", { primary: true, name: "COD_ASSUNTO_CATEGORIA", scale: 0 })
  codAssuntoCategoria: number;

  @OneToMany(
    () => TblAssuntoDescricao,
    (tblAssuntoDescricao) => tblAssuntoDescricao.codAssuntoCategoria
  )
  tblAssuntoDescricaos: TblAssuntoDescricao[];
}

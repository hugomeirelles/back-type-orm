import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblNoticia } from "./TblNoticia";

@Index("PK_TBL_NOTICIA_CATEGORIA", ["codNoticiaCategoria"], { unique: true })
@Entity("TBL_NOTICIA_CATEGORIA")
export class TblNoticiaCategoria {
  @Column("varchar2", { name: "TXT_NOTICIA_CATEGORIA", length: 255 })
  txtNoticiaCategoria: string;

  @Column("number", { primary: true, name: "COD_NOTICIA_CATEGORIA", scale: 0 })
  codNoticiaCategoria: number;

  @OneToMany(() => TblNoticia, (tblNoticia) => tblNoticia.codNoticiaCategoria)
  tblNoticias: TblNoticia[];
}

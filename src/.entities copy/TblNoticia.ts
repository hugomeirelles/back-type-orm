import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblNoticiaCategoria } from "./TblNoticiaCategoria";

@Index("PK_TBL_NOTICIA", ["codNoticia"], { unique: true })
@Entity("TBL_NOTICIA")
export class TblNoticia {
  @Column("varchar2", { name: "TXT_TITULO", length: 255 })
  txtTitulo: string;

  @Column("clob", { name: "TXT_NOTICIA", nullable: true })
  txtNoticia: string | null;

  @Column("date", { name: "DT_NOTICIA", default: () => "sysdate" })
  dtNoticia: Date;

  @Column("number", { name: "COD_PUBLICACAO", scale: 0, default: () => "0" })
  codPublicacao: number;

  @Column("number", { name: "COD_NOVIDADE", scale: 0, default: () => "0" })
  codNovidade: number;

  @Column("number", { primary: true, name: "COD_NOTICIA", scale: 0 })
  codNoticia: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @ManyToOne(
    () => TblNoticiaCategoria,
    (tblNoticiaCategoria) => tblNoticiaCategoria.tblNoticias
  )
  @JoinColumn([
    {
      name: "COD_NOTICIA_CATEGORIA",
      referencedColumnName: "codNoticiaCategoria",
    },
  ])
  codNoticiaCategoria: TblNoticiaCategoria;
}

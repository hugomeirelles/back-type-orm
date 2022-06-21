import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblArquivo } from "./TblArquivo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index(
  "PK_ARQUIVOINVENTARIOCOMENTARIO",
  ["codInventario", "dtComentario", "hrComentario"],
  { unique: true }
)
@Entity("TBL_ARQUIVO_COMENTARIO")
export class TblArquivoComentario {
  @Column("varchar2", { name: "TXT_COMENTARIO", length: 500 })
  txtComentario: string;

  @Column("date", {
    primary: true,
    name: "HR_COMENTARIO",
    default: () => "sysdate",
  })
  hrComentario: Date;

  @Column("date", {
    primary: true,
    name: "DT_COMENTARIO",
    default: () => "sysdate",
  })
  dtComentario: Date;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @ManyToOne(() => TblArquivo, (tblArquivo) => tblArquivo.tblArquivoComentarios)
  @JoinColumn([
    { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
  ])
  codInventario2: TblArquivo;

/*   @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblArquivoComentarios
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario; */
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index(
  "PK_TBL_EMPRESTIMO_COMENTARIO",
  ["codEmprestimo", "dtComentario", "hrComentario"],
  { unique: true }
)
@Entity("TBL_EMPRESTIMO_COMENTARIO")
export class TblEmprestimoComentario {
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

  @Column("number", { primary: true, name: "COD_EMPRESTIMO", scale: 0 })
  codEmprestimo: number;

  @ManyToOne(
    () => TblEmprestimo,
    (tblEmprestimo) => tblEmprestimo.tblEmprestimoComentarios
  )
  @JoinColumn([
    { name: "COD_EMPRESTIMO", referencedColumnName: "codEmprestimo" },
  ])
  codEmprestimo2: TblEmprestimo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblEmprestimoComentarios
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

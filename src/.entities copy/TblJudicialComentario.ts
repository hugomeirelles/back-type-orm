import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicial } from "./TblJudicial";
import { TblSegUsuario } from "./TblSegUsuario";

@Index(
  "PK_TBL_JUDICIAL_COMENTARIO",
  ["codJudicial", "dtComentario", "hrComentario"],
  { unique: true }
)
@Entity("TBL_JUDICIAL_COMENTARIO")
export class TblJudicialComentario {
  @Column("varchar2", { name: "TXT_COMENTARIO", length: 500 })
  txtComentario: string;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

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

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @ManyToOne(
    () => TblJudicial,
    (tblJudicial) => tblJudicial.tblJudicialComentarios
  )
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblJudicialComentarios
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

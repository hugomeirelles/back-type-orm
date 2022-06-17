import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_AQUISICAO_COMENTARIO",
  ["codAquisicao", "dtComentario", "hrComentario"],
  { unique: true }
)
@Entity("TBL_AQUISICAO_COMENTARIO")
export class TblAquisicaoComentario {
  @Column("varchar2", { name: "TXT_COMENTARIO", length: 500 })
  txtComentario: string;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", {
    primary: true,
    name: "HR_COMENTARIO",
    default: () => "SYSDATE",
  })
  hrComentario: Date;

  @Column("date", {
    primary: true,
    name: "DT_COMENTARIO",
    default: () => "SYSDATE",
  })
  dtComentario: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_AQUISICAO", scale: 0 })
  codAquisicao: number;
}

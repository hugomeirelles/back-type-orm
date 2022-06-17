import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblTarefa } from "./TblTarefa";

@Index(
  "PK_TBL_TAREFA_RESPONSABILIDADE",
  ["codTarefa", "codGrupo", "codUsuario"],
  { unique: true }
)
@Entity("TBL_TAREFA_RESPONSABILIDADE")
export class TblTarefaResponsabilidade {
  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_TAREFA", scale: 0 })
  codTarefa: number;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @ManyToOne(
    () => TblTarefa,
    (tblTarefa) => tblTarefa.tblTarefaResponsabilidades
  )
  @JoinColumn([{ name: "COD_TAREFA", referencedColumnName: "codTarefa" }])
  codTarefa2: TblTarefa;
}

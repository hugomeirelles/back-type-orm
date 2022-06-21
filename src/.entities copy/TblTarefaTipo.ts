import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblTarefa } from "./TblTarefa";

@Index("PK_TBL_TAREFA_TIPO", ["codTarefaTipo"], { unique: true })
@Entity("TBL_TAREFA_TIPO")
export class TblTarefaTipo {
  @Column("varchar2", { name: "TXT_TAREFA_TIPO", length: 255 })
  txtTarefaTipo: string;

  @Column("varchar2", { name: "TXT_TAREFA_SIGLA", length: 4 })
  txtTarefaSigla: string;

  @Column("number", { primary: true, name: "COD_TAREFA_TIPO", scale: 0 })
  codTarefaTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(() => TblTarefa, (tblTarefa) => tblTarefa.codTarefaTipo)
  tblTarefas: TblTarefa[];
}

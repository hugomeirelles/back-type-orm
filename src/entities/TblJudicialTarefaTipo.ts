import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_TAREFA_TIPO", ["codJudicialTarefaTipo"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_TAREFA_TIPO")
export class TblJudicialTarefaTipo {
  @Column("varchar2", { name: "TXT_JUDICIAL_TAREFA_TIPO", length: 255 })
  txtJudicialTarefaTipo: string;

  @Column("varchar2", { name: "TXT_JUDICIAL_TAREFA_SIGLA", length: 4 })
  txtJudicialTarefaSigla: string;

  @Column("number", {
    primary: true,
    name: "COD_JUDICIAL_TAREFA_TIPO",
    scale: 0,
  })
  codJudicialTarefaTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

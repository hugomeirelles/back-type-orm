import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_TAREFA", ["codJudicial", "codTarefa"], { unique: true })
@Entity("TBL_JUDICIAL_TAREFA")
export class TblJudicialTarefa {
  @Column("clob", { name: "TXT_COMPLEMENTO", nullable: true })
  txtComplemento: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_TAREFA", default: () => "sysdate" })
  dtTarefa: Date;

  @Column("date", { name: "DT_PRAZO_ATENDIMENTO", nullable: true })
  dtPrazoAtendimento: Date | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_TAREFA", scale: 0 })
  codTarefa: number;

  @Column("number", { name: "COD_RESPONSAVEL", nullable: true, scale: 0 })
  codResponsavel: number | null;

  @Column("number", { name: "COD_PRAZO", scale: 0, default: () => "(0)" })
  codPrazo: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_JUDICIAL_TAREFA_TIPO", scale: 0 })
  codJudicialTarefaTipo: number;

  @Column("number", {
    name: "COD_JUDICIAL_ATIVIDADE_TIPO",
    nullable: true,
    scale: 0,
  })
  codJudicialAtividadeTipo: number | null;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { name: "COD_ATIVIDADE", nullable: true, scale: 0 })
  codAtividade: number | null;
}

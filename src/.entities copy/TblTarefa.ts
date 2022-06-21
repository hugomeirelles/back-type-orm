import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblTarefaTipo } from "./TblTarefaTipo";
import { TblTarefaDocumento } from "./TblTarefaDocumento";
import { TblTarefaResponsabilidade } from "./TblTarefaResponsabilidade";

@Index("PK_TBL_TAREFA", ["codTarefa"], { unique: true })
@Entity("TBL_TAREFA")
export class TblTarefa {
  @Column("clob", { name: "TXT_COMPLEMENTO", nullable: true })
  txtComplemento: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_TAREFA", default: () => "sysdate" })
  dtTarefa: Date;

  @Column("date", { name: "DT_PRAZO_ATENDIMENTO", nullable: true })
  dtPrazoAtendimento: Date | null;

  @Column("date", { name: "DT_FINALIZACAO", nullable: true })
  dtFinalizacao: Date | null;

  @Column("number", {
    name: "COD_USUARIO_FINALIZACAO",
    nullable: true,
    scale: 0,
  })
  codUsuarioFinalizacao: number | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_URGENCIA", scale: 0, default: () => "(0)" })
  codUrgencia: number;

  @Column("number", { primary: true, name: "COD_TAREFA", scale: 0 })
  codTarefa: number;

  @Column("number", { name: "COD_PROTOCOLO", nullable: true, scale: 0 })
  codProtocolo: number | null;

  @Column("number", { name: "COD_PRAZO", scale: 0, default: () => "(0)" })
  codPrazo: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", {
    name: "COD_JUDICIAL_ATIVIDADE_TIPO",
    nullable: true,
    scale: 0,
  })
  codJudicialAtividadeTipo: number | null;

  @Column("number", { name: "COD_JUDICIAL", nullable: true, scale: 0 })
  codJudicial: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(() => TblTarefaTipo, (tblTarefaTipo) => tblTarefaTipo.tblTarefas)
  @JoinColumn([
    { name: "COD_TAREFA_TIPO", referencedColumnName: "codTarefaTipo" },
  ])
  codTarefaTipo: TblTarefaTipo;

  @OneToMany(
    () => TblTarefaDocumento,
    (tblTarefaDocumento) => tblTarefaDocumento.codTarefa2
  )
  tblTarefaDocumentos: TblTarefaDocumento[];

  @OneToMany(
    () => TblTarefaResponsabilidade,
    (tblTarefaResponsabilidade) => tblTarefaResponsabilidade.codTarefa2
  )
  tblTarefaResponsabilidades: TblTarefaResponsabilidade[];
}

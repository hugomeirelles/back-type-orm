import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicialAtividadeTipo } from "./TblJudicialAtividadeTipo";

@Index("PK_TBL_JUDICIAL_ATIVIDADE", ["codJudicial", "codAtividade"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_ATIVIDADE")
export class TblJudicialAtividade {
  @Column("clob", { name: "TXT_COMPLEMENTO", nullable: true })
  txtComplemento: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", {
    name: "DT_ATIVIDADE",
    nullable: true,
    default: () => "sysdate",
  })
  dtAtividade: Date | null;

  @Column("date", { name: "DT_ATENDIMENTO", nullable: true })
  dtAtendimento: Date | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_TAREFA", scale: 0 })
  codTarefa: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { primary: true, name: "COD_ATIVIDADE", scale: 0 })
  codAtividade: number;

  @ManyToOne(
    () => TblJudicialAtividadeTipo,
    (tblJudicialAtividadeTipo) => tblJudicialAtividadeTipo.tblJudicialAtividades
  )
  @JoinColumn([
    {
      name: "COD_JUDICIAL_ATIVIDADE_TIPO",
      referencedColumnName: "codJudicialAtividadeTipo",
    },
  ])
  codJudicialAtividadeTipo: TblJudicialAtividadeTipo;
}

import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblJudicialAtividade } from "./TblJudicialAtividade";

@Index("PK_TBL_JUDICIAL_ATIVIDADE_TIPO", ["codJudicialAtividadeTipo"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_ATIVIDADE_TIPO")
export class TblJudicialAtividadeTipo {
  @Column("varchar2", { name: "TXT_JUDICIAL_ATIVIDADE_TIPO", length: 255 })
  txtJudicialAtividadeTipo: string;

  @Column("varchar2", { name: "TXT_JUDICIAL_ATIVIDADE_SIGLA", length: 5 })
  txtJudicialAtividadeSigla: string;

  @Column("number", {
    primary: true,
    name: "COD_JUDICIAL_ATIVIDADE_TIPO",
    scale: 0,
  })
  codJudicialAtividadeTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblJudicialAtividade,
    (tblJudicialAtividade) => tblJudicialAtividade.codJudicialAtividadeTipo
  )
  tblJudicialAtividades: TblJudicialAtividade[];
}

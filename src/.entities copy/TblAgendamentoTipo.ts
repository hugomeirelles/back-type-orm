import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAtendimentoTipo } from "./TblAtendimentoTipo";
import { TblAgendamentoHorario } from "./TblAgendamentoHorario";

@Index("PK_TBL_AGENDAMENTO_TIPO", ["codTipoAtendimento", "codAgendamento"], {
  unique: true,
})
@Entity("TBL_AGENDAMENTO_TIPO")
export class TblAgendamentoTipo {
  @Column("number", { primary: true, name: "COD_TIPO_ATENDIMENTO" })
  codTipoAtendimento: number;

  @Column("number", { primary: true, name: "COD_AGENDAMENTO" })
  codAgendamento: number;

  @Column("number", { name: "COD_AGENDADO" })
  codAgendado: number;

  @ManyToOne(
    () => TblAtendimentoTipo,
    (tblAtendimentoTipo) => tblAtendimentoTipo.tblAgendamentoTipos
  )
  @JoinColumn([
    {
      name: "COD_TIPO_ATENDIMENTO",
      referencedColumnName: "codTipoAtendimento",
    },
  ])
  codTipoAtendimento2: TblAtendimentoTipo;

  @ManyToOne(
    () => TblAgendamentoHorario,
    (tblAgendamentoHorario) => tblAgendamentoHorario.tblAgendamentoTipos
  )
  @JoinColumn([
    { name: "COD_AGENDAMENTO", referencedColumnName: "codAgendamentoHorario" },
  ])
  codAgendamento2: TblAgendamentoHorario;
}

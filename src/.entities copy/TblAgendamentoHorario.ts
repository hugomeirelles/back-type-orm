import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblAtendimentoPosto } from "./TblAtendimentoPosto";
import { TblAgendamentoTipo } from "./TblAgendamentoTipo";

@Index("PK_TBL_AGENDAMENTO_HORARIO", ["codAgendamentoHorario"], {
  unique: true,
})
@Entity("TBL_AGENDAMENTO_HORARIO")
export class TblAgendamentoHorario {
  @Column("varchar2", {
    name: "TXT_JUSTIFICATIVA_CANCELAMENTO",
    nullable: true,
    length: 1000,
  })
  txtJustificativaCancelamento: string | null;

  @Column("varchar2", {
    name: "TXT_DESCRICAO_ATENDIMENTO",
    nullable: true,
    length: 500,
  })
  txtDescricaoAtendimento: string | null;

  @Column("date", { name: "DT_CANCELAMENTO", nullable: true })
  dtCancelamento: Date | null;

  @Column("date", { name: "DT_AGENDAMENTO" })
  dtAgendamento: Date;

  @Column("number", { name: "COD_SITUACAO" })
  codSituacao: number;

  @Column("number", { name: "COD_SEM_CADASTRO", default: () => "0" })
  codSemCadastro: number;

  @Column("number", {
    name: "COD_COMPARECIMENTO",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codComparecimento: number;

  @Column("number", { primary: true, name: "COD_AGENDAMENTO_HORARIO" })
  codAgendamentoHorario: number;

  @Column("number", { name: "COD_AGENDAMENTO_ATENDIMENTO", nullable: true })
  codAgendamentoAtendimento: number | null;

  @Column("number", {
    name: "COD_AGENDADO",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codAgendado: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblAgendamentoHorarios
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_AGENDADO",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoAgendado: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblAgendamentoHorarios2
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_ATENDENTE",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoAtendente: TblInteressado;

  @ManyToOne(
    () => TblAtendimentoPosto,
    (tblAtendimentoPosto) => tblAtendimentoPosto.tblAgendamentoHorarios
  )
  @JoinColumn([
    {
      name: "COD_POSTO_ATENDIMENTO",
      referencedColumnName: "codPostoAtendimento",
    },
  ])
  codPostoAtendimento: TblAtendimentoPosto;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblAgendamentoHorarios3
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_CANCELAMENTO",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoCancelamento: TblInteressado;

  @OneToMany(
    () => TblAgendamentoTipo,
    (tblAgendamentoTipo) => tblAgendamentoTipo.codAgendamento2
  )
  tblAgendamentoTipos: TblAgendamentoTipo[];
}

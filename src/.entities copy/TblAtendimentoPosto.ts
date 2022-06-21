import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAgendamentoHorario } from "./TblAgendamentoHorario";
import { TblOrgao } from "./TblOrgao";
import { TblAtendimentoTipo } from "./TblAtendimentoTipo";

@Index("PK_TBL_ATENDIMENTO_POSTO", ["codPostoAtendimento"], { unique: true })
@Entity("TBL_ATENDIMENTO_POSTO")
export class TblAtendimentoPosto {
  @Column("varchar2", { name: "TXT_POSTO_ATENDIMENTO", length: 100 })
  txtPostoAtendimento: string;

  @Column("number", {
    primary: true,
    name: "COD_POSTO_ATENDIMENTO",
    precision: 10,
    scale: 0,
  })
  codPostoAtendimento: number;

  @Column("number", { name: "COD_EMPRESA", precision: 10, scale: 0 })
  codEmpresa: number;

  @Column("number", { name: "COD_ATIVO", precision: 10, scale: 0 })
  codAtivo: number;

  @OneToMany(
    () => TblAgendamentoHorario,
    (tblAgendamentoHorario) => tblAgendamentoHorario.codPostoAtendimento
  )
  tblAgendamentoHorarios: TblAgendamentoHorario[];

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblAtendimentoPostos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToMany(
    () => TblAtendimentoTipo,
    (tblAtendimentoTipo) => tblAtendimentoTipo.tblAtendimentoPostos
  )
  @JoinTable({
    name: "TBL_ATENDIMENTO_POSTO_TIPO",
    joinColumns: [
      {
        name: "COD_POSTO_ATENDIMENTO",
        referencedColumnName: "codPostoAtendimento",
      },
    ],
    inverseJoinColumns: [
      {
        name: "COD_TIPO_ATENDIMENTO",
        referencedColumnName: "codTipoAtendimento",
      },
    ],
  })
  tblAtendimentoTipos: TblAtendimentoTipo[];
}

import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { TblAgendamentoTipo } from "./TblAgendamentoTipo";
import { TblAtendimentoPosto } from "./TblAtendimentoPosto";

@Index("PK_TBL_ATENDIMENTO_TIPO", ["codTipoAtendimento"], { unique: true })
@Entity("TBL_ATENDIMENTO_TIPO")
export class TblAtendimentoTipo {
  @Column("varchar2", { name: "TXT_TIPO_ATENDIMENTO", length: 100 })
  txtTipoAtendimento: string;

  @Column("varchar2", { name: "TXT_DOCUMENTO", nullable: true, length: 2000 })
  txtDocumento: string | null;

  @Column("number", {
    primary: true,
    name: "COD_TIPO_ATENDIMENTO",
    precision: 10,
    scale: 0,
  })
  codTipoAtendimento: number;

  @Column("number", {
    name: "COD_EMPRESA",
    precision: 10,
    scale: 0,
    default: () => "(11)",
  })
  codEmpresa: number;

  @Column("number", { name: "COD_ATIVO", precision: 10, scale: 0 })
  codAtivo: number;

  @OneToMany(
    () => TblAgendamentoTipo,
    (tblAgendamentoTipo) => tblAgendamentoTipo.codTipoAtendimento2
  )
  tblAgendamentoTipos: TblAgendamentoTipo[];

  @ManyToMany(
    () => TblAtendimentoPosto,
    (tblAtendimentoPosto) => tblAtendimentoPosto.tblAtendimentoTipos
  )
  tblAtendimentoPostos: TblAtendimentoPosto[];
}

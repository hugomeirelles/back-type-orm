import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoExecucao } from "./TblContratoExecucao";
import { TblImpostoTipo } from "./TblImpostoTipo";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_IMPO",
  ["codContrato", "codExecucao", "codImposto"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_IMPOSTO")
export class TblContratoExecucaoImposto {
  @Column("number", {
    name: "COD_PERCENTUAL",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  codPercentual: number | null;

  @Column("number", {
    name: "COD_IMPOSTO_VALOR",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codImpostoValor: number | null;

  @Column("number", { primary: true, name: "COD_IMPOSTO", scale: 0 })
  codImposto: number;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @ManyToOne(
    () => TblContratoExecucao,
    (tblContratoExecucao) => tblContratoExecucao.tblContratoExecucaoImpostos
  )
  @JoinColumn([
    { name: "COD_CONTRATO", referencedColumnName: "codContrato" },
    { name: "COD_EXECUCAO", referencedColumnName: "codExecucao" },
  ])
  tblContratoExecucao: TblContratoExecucao;

  @ManyToOne(
    () => TblImpostoTipo,
    (tblImpostoTipo) => tblImpostoTipo.tblContratoExecucaoImpostos
  )
  @JoinColumn([
    { name: "COD_IMPOSTO_TIPO", referencedColumnName: "codImpostoTipo" },
  ])
  codImpostoTipo: TblImpostoTipo;
}

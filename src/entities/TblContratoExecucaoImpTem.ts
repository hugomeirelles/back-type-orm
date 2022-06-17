import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_TEMP",
  ["codContrato", "codExecucao", "codImposto"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_IMP_TEM")
export class TblContratoExecucaoImpTem {
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

  @Column("number", { name: "COD_IMPOSTO_TIPO", nullable: true, scale: 0 })
  codImpostoTipo: number | null;

  @Column("number", { primary: true, name: "COD_IMPOSTO", scale: 0 })
  codImposto: number;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

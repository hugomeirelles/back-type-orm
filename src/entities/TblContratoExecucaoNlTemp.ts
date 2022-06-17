import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_NL_P",
  ["codContrato", "codExecucao", "codNotaLancamento"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_NL_TEMP")
export class TblContratoExecucaoNlTemp {
  @Column("varchar2", {
    name: "TXT_NOTA_LANCAMENTO",
    nullable: true,
    length: 10,
  })
  txtNotaLancamento: string | null;

  @Column("varchar2", {
    name: "TXT_NOTA_FISCAL_LANCAMENTO",
    nullable: true,
    length: 10,
  })
  txtNotaFiscalLancamento: string | null;

  @Column("date", { name: "DT_VALIDADE", nullable: true })
  dtValidade: Date | null;

  @Column("date", { name: "DT_NOTA_LANCAMENTO", nullable: true })
  dtNotaLancamento: Date | null;

  @Column("number", {
    name: "COD_NOTA_LANCAMENTO_VALOR",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codNotaLancamentoValor: number | null;

  @Column("number", { primary: true, name: "COD_NOTA_LANCAMENTO", scale: 0 })
  codNotaLancamento: number;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

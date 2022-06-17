import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoExecucao } from "./TblContratoExecucao";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_NL",
  ["codContrato", "codExecucao", "codNotaLancamento"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_NL")
export class TblContratoExecucaoNl {
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

  @ManyToOne(
    () => TblContratoExecucao,
    (tblContratoExecucao) => tblContratoExecucao.tblContratoExecucaoNls
  )
  @JoinColumn([
    { name: "COD_CONTRATO", referencedColumnName: "codContrato" },
    { name: "COD_EXECUCAO", referencedColumnName: "codExecucao" },
  ])
  tblContratoExecucao: TblContratoExecucao;
}

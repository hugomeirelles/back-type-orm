import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_O_TE",
  ["codContrato", "codExecucao", "codOrdemBancaria"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_OB_TEMP")
export class TblContratoExecucaoObTemp {
  @Column("varchar2", {
    name: "TXT_ORDEM_BANCARIA",
    nullable: true,
    length: 10,
  })
  txtOrdemBancaria: string | null;

  @Column("number", { primary: true, name: "COD_ORDEM_BANCARIA", scale: 0 })
  codOrdemBancaria: number;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", {
    name: "COD_ANO_ORDEM_BANCARIA",
    nullable: true,
    scale: 0,
  })
  codAnoOrdemBancaria: number | null;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoExecucao } from "./TblContratoExecucao";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_OB",
  ["codContrato", "codExecucao", "codOrdemBancaria"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_OB")
export class TblContratoExecucaoOb {
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

  @ManyToOne(
    () => TblContratoExecucao,
    (tblContratoExecucao) => tblContratoExecucao.tblContratoExecucaoObs
  )
  @JoinColumn([
    { name: "COD_CONTRATO", referencedColumnName: "codContrato" },
    { name: "COD_EXECUCAO", referencedColumnName: "codExecucao" },
  ])
  tblContratoExecucao: TblContratoExecucao;
}

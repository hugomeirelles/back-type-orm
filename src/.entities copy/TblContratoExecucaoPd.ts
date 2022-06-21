import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoExecucao } from "./TblContratoExecucao";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_PD",
  ["codContrato", "codExecucao", "codProgramaDesembolso"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_PD")
export class TblContratoExecucaoPd {
  @Column("varchar2", {
    name: "TXT_PROGRAMA_DESEMBOLSO",
    nullable: true,
    length: 10,
  })
  txtProgramaDesembolso: string | null;

  @Column("date", { name: "DT_PROGRAMA_DESEMBOLSO", nullable: true })
  dtProgramaDesembolso: Date | null;

  @Column("number", {
    primary: true,
    name: "COD_PROGRAMA_DESEMBOLSO",
    scale: 0,
  })
  codProgramaDesembolso: number;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @ManyToOne(
    () => TblContratoExecucao,
    (tblContratoExecucao) => tblContratoExecucao.tblContratoExecucaoPds
  )
  @JoinColumn([
    { name: "COD_CONTRATO", referencedColumnName: "codContrato" },
    { name: "COD_EXECUCAO", referencedColumnName: "codExecucao" },
  ])
  tblContratoExecucao: TblContratoExecucao;
}

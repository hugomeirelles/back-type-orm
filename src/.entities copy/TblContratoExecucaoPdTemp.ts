import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_P_TE",
  ["codContrato", "codExecucao", "codProgramaDesembolso"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_PD_TEMP")
export class TblContratoExecucaoPdTemp {
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
}

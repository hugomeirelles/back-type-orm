import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_CONTRATO_ADITIVO_ORCAM",
  ["codContrato", "codAditivo", "codOrcamento"],
  { unique: true }
)
@Entity("TBL_CONTRATO_ADITIVO_ORCAMENTO")
export class TblContratoAditivoOrcamento {
  @Column("varchar2", { name: "TXT_NOTA_EMPENHO", nullable: true, length: 255 })
  txtNotaEmpenho: string | null;

  @Column("varchar2", {
    name: "TXT_ELEMENTO_DESPESA",
    nullable: true,
    length: 25,
  })
  txtElementoDespesa: string | null;

  @Column("date", { name: "DT_EMPENHO", nullable: true })
  dtEmpenho: Date | null;

  @Column("number", {
    name: "COD_VALOR_EMPENHO",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorEmpenho: number | null;

  @Column("number", { name: "COD_PROGRAMA", nullable: true, scale: 0 })
  codPrograma: number | null;

  @Column("number", { primary: true, name: "COD_ORCAMENTO", scale: 0 })
  codOrcamento: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", { primary: true, name: "COD_ADITIVO", scale: 0 })
  codAditivo: number;

  @Column("number", { name: "COD_ACAO", nullable: true, scale: 0 })
  codAcao: number | null;
}

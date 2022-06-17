import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoAcompanhamento } from "./TblContratoAcompanhamento";

@Index(
  "PK_TBL_CONTRATO_ACOMPANHAMENT",
  ["codContrato", "codAcompanhamento", "codCronograma"],
  { unique: true }
)
@Entity("TBL_CONTRATO_ACOMPANHAMENTO_ET")
export class TblContratoAcompanhamentoEt {
  @Column("number", { primary: true, name: "COD_CRONOGRAMA", scale: 0 })
  codCronograma: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", { primary: true, name: "COD_ACOMPANHAMENTO", scale: 0 })
  codAcompanhamento: number;

  @ManyToOne(
    () => TblContratoAcompanhamento,
    (tblContratoAcompanhamento) =>
      tblContratoAcompanhamento.tblContratoAcompanhamentoEts
  )
  @JoinColumn([
    { name: "COD_CONTRATO", referencedColumnName: "codContrato" },
    { name: "COD_ACOMPANHAMENTO", referencedColumnName: "codAcompanhamento" },
  ])
  tblContratoAcompanhamento: TblContratoAcompanhamento;
}

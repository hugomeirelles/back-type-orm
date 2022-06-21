import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_RESPONSAVEL", ["codContrato", "codResponsavel"], {
  unique: true,
})
@Entity("TBL_CONTRATO_RESPONSAVEL")
export class TblContratoResponsavel {
  @Column("number", { primary: true, name: "COD_RESPONSAVEL", scale: 0 })
  codResponsavel: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

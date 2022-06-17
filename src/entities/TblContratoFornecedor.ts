import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_FORNECEDOR", ["codContrato", "codFornecedor"], {
  unique: true,
})
@Entity("TBL_CONTRATO_FORNECEDOR")
export class TblContratoFornecedor {
  @Column("number", { primary: true, name: "COD_FORNECEDOR", scale: 0 })
  codFornecedor: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_AQUISICAO_FORNECEDOR",
  ["codAquisicao", "codFornecedor", "codIndicado"],
  { unique: true }
)
@Entity("TBL_AQUISICAO_FORNECEDOR")
export class TblAquisicaoFornecedor {
  @Column("number", {
    primary: true,
    name: "COD_INDICADO",
    scale: 0,
    default: () => "1",
  })
  codIndicado: number;

  @Column("number", { primary: true, name: "COD_FORNECEDOR", scale: 0 })
  codFornecedor: number;

  @Column("number", { primary: true, name: "COD_AQUISICAO", scale: 0 })
  codAquisicao: number;
}

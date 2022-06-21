import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_LICITACAO_FORNECEDOR",
  ["codLicitacao", "codFornecedor", "codIndicado"],
  { unique: true }
)
@Entity("TBL_LICITACAO_FORNECEDOR")
export class TblLicitacaoFornecedor {
  @Column("number", { primary: true, name: "COD_LICITACAO", scale: 0 })
  codLicitacao: number;

  @Column("number", {
    primary: true,
    name: "COD_INDICADO",
    scale: 0,
    default: () => "1",
  })
  codIndicado: number;

  @Column("number", { primary: true, name: "COD_FORNECEDOR", scale: 0 })
  codFornecedor: number;
}

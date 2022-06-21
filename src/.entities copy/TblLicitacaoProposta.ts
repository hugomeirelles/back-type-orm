import { Column, Entity } from "typeorm";

@Entity("TBL_LICITACAO_PROPOSTA")
export class TblLicitacaoProposta {
  @Column("number", {
    name: "COD_VALOR_PROPOSTA",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorProposta: number | null;

  @Column("number", {
    name: "COD_SITUACAO_FISCAL",
    scale: 0,
    default: () => "0",
  })
  codSituacaoFiscal: number;

  @Column("number", { name: "COD_PUBLICACAO", scale: 0, default: () => "0" })
  codPublicacao: number;

  @Column("number", { name: "COD_LICITACAO", scale: 0 })
  codLicitacao: number;

  @Column("number", { name: "COD_FORNECEDOR", scale: 0 })
  codFornecedor: number;

  @Column("number", { name: "COD_DOCUMENTACAO", scale: 0, default: () => "0" })
  codDocumentacao: number;
}

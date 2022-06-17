import { Column, Entity } from "typeorm";

@Entity("TBL_LICITACAO_PROPOSTA_COTACAO")
export class TblLicitacaoPropostaCotacao {
  @Column("number", { name: "COD_VALOR_UNITARIO", precision: 8, scale: 2 })
  codValorUnitario: number;

  @Column("varchar2", { name: "COD_MATERIAL", length: 13 })
  codMaterial: string;

  @Column("number", { name: "COD_LICITACAO", scale: 0 })
  codLicitacao: number;

  @Column("number", { name: "COD_FORNECEDOR", scale: 0 })
  codFornecedor: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LICITACAO_MATERIAL", ["codLicitacao", "codMaterial"], {
  unique: true,
})
@Entity("TBL_LICITACAO_MATERIAL")
export class TblLicitacaoMaterial {
  @Column("number", { name: "COD_QUANTIDADE", scale: 0 })
  codQuantidade: number;

  @Column("varchar2", { primary: true, name: "COD_MATERIAL", length: 13 })
  codMaterial: string;

  @Column("number", { primary: true, name: "COD_LICITACAO", scale: 0 })
  codLicitacao: number;
}

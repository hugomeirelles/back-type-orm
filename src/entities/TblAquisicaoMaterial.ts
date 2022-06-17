import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_AQUISICAO_MATERIAL", ["codAquisicao", "codMaterial"], {
  unique: true,
})
@Entity("TBL_AQUISICAO_MATERIAL")
export class TblAquisicaoMaterial {
  @Column("number", {
    name: "COD_VALOR_UNITARIO",
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  codValorUnitario: number;

  @Column("number", { name: "COD_QUANTIDADE", scale: 0 })
  codQuantidade: number;

  @Column("varchar2", { primary: true, name: "COD_MATERIAL", length: 13 })
  codMaterial: string;

  @Column("number", { primary: true, name: "COD_AQUISICAO", scale: 0 })
  codAquisicao: number;
}

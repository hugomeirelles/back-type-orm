import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_MATERIAL", ["codMaterial"], { unique: true })
@Entity("TBL_MATERIAL")
export class TblMaterial {
  @Column("varchar2", { name: "TXT_UNIDADE_MEDIDA", nullable: true, length: 2 })
  txtUnidadeMedida: string | null;

  @Column("varchar2", { name: "TXT_MATERIAL", length: 255 })
  txtMaterial: string;

  @Column("clob", { name: "TXT_ESPECIFICACAO", nullable: true })
  txtEspecificacao: string | null;

  @Column("varchar2", { name: "TXT_COMPLEMENTO", nullable: true, length: 2 })
  txtComplemento: string | null;

  @Column("number", {
    name: "COD_MATERIAL_TIPO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codMaterialTipo: number;

  @Column("number", {
    name: "COD_MATERIAL_PARCIAL",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codMaterialParcial: number | null;

  @Column("number", {
    name: "COD_MATERIAL",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  codMaterial: number | null;

  @Column("number", {
    name: "COD_MARCA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codMarca: number | null;

  @Column("number", { name: "COD_GRAU", precision: 10, scale: 0 })
  codGrau: number;

  @Column("number", {
    name: "COD_DATA_VALIDADE",
    nullable: true,
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  codDataValidade: number | null;

  @Column("varchar2", { name: "COD_CATEGORIA", length: 10 })
  codCategoria: string;

  @Column("number", {
    name: "COD_CATALOGO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codCatalogo: number | null;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}

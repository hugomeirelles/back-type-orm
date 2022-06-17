import { Column, Entity, Index } from "typeorm";

@Index("PK_ACERVO_TIO_PERMISSAO_ORG", ["codAcervoTipo", "codOrgao"], {
  unique: true,
})
@Entity("TBL_ACERVO_TIPO_PERMISSAO_ORG")
export class TblAcervoTipoPermissaoOrg {
  @Column("number", {
    primary: true,
    name: "COD_ORGAO",
    precision: 10,
    scale: 0,
  })
  codOrgao: number;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_TIPO",
    precision: 10,
    scale: 0,
  })
  codAcervoTipo: number;
}

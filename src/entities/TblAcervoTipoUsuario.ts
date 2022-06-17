import { Column, Entity, Index } from "typeorm";

@Index("PK_ACERVO_TIPO_USUARIO", ["codAcervoTipo", "codUsuario"], {
  unique: true,
})
@Entity("TBL_ACERVO_TIPO_USUARIO")
export class TblAcervoTipoUsuario {
  @Column("number", {
    primary: true,
    name: "COD_USUARIO",
    precision: 10,
    scale: 0,
  })
  codUsuario: number;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_TIPO",
    precision: 10,
    scale: 0,
  })
  codAcervoTipo: number;
}

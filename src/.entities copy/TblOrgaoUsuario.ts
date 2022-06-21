import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_ORGAO_USUARIO", ["codOrgao", "codUsuario"], { unique: true })
@Entity("TBL_ORGAO_USUARIO")
export class TblOrgaoUsuario {
  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_CLASSIFICACAO", scale: 0, default: () => "1" })
  codClassificacao: number;
}

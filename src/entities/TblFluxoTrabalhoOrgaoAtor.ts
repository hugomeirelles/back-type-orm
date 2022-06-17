import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_FLUXO_TRABALHO_ORGAO_AT", ["codFluxoTrabalho", "codOrgao"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRABALHO_ORGAO_ATOR")
export class TblFluxoTrabalhoOrgaoAtor {
  @Column("number", {
    name: "COD_USUARIO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codUsuario: number | null;

  @Column("number", {
    primary: true,
    name: "COD_ORGAO",
    precision: 10,
    scale: 0,
  })
  codOrgao: number;

  @Column("number", {
    name: "COD_GRUPO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codGrupo: number | null;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO",
    precision: 10,
    scale: 0,
  })
  codFluxoTrabalho: number;
}

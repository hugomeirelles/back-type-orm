import { Column, Entity, Index } from "typeorm";

@Index("PK_FLUXO_TRABALHO_GRUPO_USU", ["codGrupo", "codUsuario", "codOrgao"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRABALHO_GRUPO_USU")
export class TblFluxoTrabalhoGrupoUsu {
  @Column("number", {
    primary: true,
    name: "COD_USUARIO",
    precision: 22,
    scale: 0,
  })
  codUsuario: number;

  @Column("number", {
    name: "COD_PROXIMA_DISTRIBUICAO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codProximaDistribuicao: number | null;

  @Column("number", {
    primary: true,
    name: "COD_ORGAO",
    precision: 22,
    scale: 0,
  })
  codOrgao: number;

  @Column("number", {
    name: "COD_ORDEM",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrdem: number | null;

  @Column("number", {
    primary: true,
    name: "COD_GRUPO",
    precision: 22,
    scale: 0,
  })
  codGrupo: number;
}

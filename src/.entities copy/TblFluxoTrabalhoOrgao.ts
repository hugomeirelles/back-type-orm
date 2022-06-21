import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_FLUXO_TRABALHO_ORGAO",
  ["codFluxoTrabalho", "codOrgao", "codOrdem"],
  { unique: true }
)
@Entity("TBL_FLUXO_TRABALHO_ORGAO")
export class TblFluxoTrabalhoOrgao {
  @Column("number", {
    primary: true,
    name: "COD_ORGAO",
    precision: 10,
    scale: 0,
  })
  codOrgao: number;

  @Column("number", {
    primary: true,
    name: "COD_ORDEM",
    precision: 10,
    scale: 0,
  })
  codOrdem: number;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO",
    precision: 10,
    scale: 0,
  })
  codFluxoTrabalho: number;
}

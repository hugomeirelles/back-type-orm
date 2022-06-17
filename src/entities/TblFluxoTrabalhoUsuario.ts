import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_FLUXO_TRABALHO_USUARIO",
  ["codUsuario", "codFluxoTrabalhoExecucao"],
  { unique: true }
)
@Entity("TBL_FLUXO_TRABALHO_USUARIO")
export class TblFluxoTrabalhoUsuario {
  @Column("number", {
    primary: true,
    name: "COD_USUARIO",
    precision: 22,
    scale: 0,
  })
  codUsuario: number;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO_EXECUCAO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoExecucao: number;
}

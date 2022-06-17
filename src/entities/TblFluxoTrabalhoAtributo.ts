import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_FLUXO_TRABALHO_ATRIBUTO",
  ["codFluxoTrabalho", "codAtributo", "txtCondicao"],
  { unique: true }
)
@Entity("TBL_FLUXO_TRABALHO_ATRIBUTO")
export class TblFluxoTrabalhoAtributo {
  @Column("varchar2", { name: "TXT_VALOR", length: 100 })
  txtValor: string;

  @Column("varchar2", { primary: true, name: "TXT_CONDICAO", length: 10 })
  txtCondicao: string;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO",
    precision: 10,
    scale: 0,
  })
  codFluxoTrabalho: number;

  @Column("number", {
    primary: true,
    name: "COD_ATRIBUTO",
    precision: 10,
    scale: 0,
  })
  codAtributo: number;
}

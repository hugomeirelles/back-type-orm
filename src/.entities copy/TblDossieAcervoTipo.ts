import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAcervoTipo } from "./TblAcervoTipo";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";

@Index(
  "PK_TBL_DOSSIE_ACERVO_TIPO",
  ["codAcervoTipo", "codDossieConfiguracao"],
  { unique: true }
)
@Entity("TBL_DOSSIE_ACERVO_TIPO")
export class TblDossieAcervoTipo {
  @Column("number", { name: "COD_ORDEM", nullable: true })
  codOrdem: number | null;

  @Column("number", { primary: true, name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @Column("number", { primary: true, name: "COD_ACERVO_TIPO" })
  codAcervoTipo: number;

  @ManyToOne(
    () => TblAcervoTipo,
    (tblAcervoTipo) => tblAcervoTipo.tblDossieAcervoTipos
  )
  @JoinColumn([
    { name: "COD_ACERVO_TIPO", referencedColumnName: "codAcervoTipo" },
  ])
  codAcervoTipo2: TblAcervoTipo;

  @ManyToOne(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblDossieAcervoTipos
  )
  @JoinColumn([
    {
      name: "COD_DOSSIE_CONFIGURACAO",
      referencedColumnName: "codDossieConfiguracao",
    },
  ])
  codDossieConfiguracao2: TblDossieConfiguracao;
}

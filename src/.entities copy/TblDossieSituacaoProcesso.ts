import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";

@Index(
  "PK_TBL_DOSSIE_SITUACAO_PROCESS",
  ["codSituacao", "codDossieConfiguracao"],
  { unique: true }
)
@Entity("TBL_DOSSIE_SITUACAO_PROCESSO")
export class TblDossieSituacaoProcesso {
  @Column("number", { primary: true, name: "COD_SITUACAO" })
  codSituacao: number;

  @Column("number", { primary: true, name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @ManyToOne(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblDossieSituacaoProcessos
  )
  @JoinColumn([
    {
      name: "COD_DOSSIE_CONFIGURACAO",
      referencedColumnName: "codDossieConfiguracao",
    },
  ])
  codDossieConfiguracao2: TblDossieConfiguracao;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";

@Index(
  "PK_TBL_DOSSIE_SITUACAO_DOCUMEN",
  ["codDossieConfiguracao", "codSituacao"],
  { unique: true }
)
@Entity("TBL_DOSSIE_SITUACAO_DOCUMENTO")
export class TblDossieSituacaoDocumento {
  @Column("number", { primary: true, name: "COD_SITUACAO" })
  codSituacao: number;

  @Column("number", { primary: true, name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @ManyToOne(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblDossieSituacaoDocumentos
  )
  @JoinColumn([
    {
      name: "COD_DOSSIE_CONFIGURACAO",
      referencedColumnName: "codDossieConfiguracao",
    },
  ])
  codDossieConfiguracao2: TblDossieConfiguracao;
}

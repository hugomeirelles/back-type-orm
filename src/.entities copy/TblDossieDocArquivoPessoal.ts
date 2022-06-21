import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDocumentoTipoPessoal } from "./TblDocumentoTipoPessoal";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";

@Index(
  "PK_TBL_DOSSIE_DOC_ARQUIVO_PESS",
  ["codDocumentoTipoPessoal", "codDossieConfiguracao"],
  { unique: true }
)
@Entity("TBL_DOSSIE_DOC_ARQUIVO_PESSOAL")
export class TblDossieDocArquivoPessoal {
  @Column("number", { name: "COD_ORDEM", nullable: true })
  codOrdem: number | null;

  @Column("number", { primary: true, name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @Column("number", { primary: true, name: "COD_DOCUMENTO_TIPO_PESSOAL" })
  codDocumentoTipoPessoal: number;

  @ManyToOne(
    () => TblDocumentoTipoPessoal,
    (tblDocumentoTipoPessoal) =>
      tblDocumentoTipoPessoal.tblDossieDocArquivoPessoals
  )
  @JoinColumn([
    {
      name: "COD_DOCUMENTO_TIPO_PESSOAL",
      referencedColumnName: "codDocumentoTipoPessoal",
    },
  ])
  codDocumentoTipoPessoal2: TblDocumentoTipoPessoal;

  @ManyToOne(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblDossieDocArquivoPessoals
  )
  @JoinColumn([
    {
      name: "COD_DOSSIE_CONFIGURACAO",
      referencedColumnName: "codDossieConfiguracao",
    },
  ])
  codDossieConfiguracao2: TblDossieConfiguracao;
}

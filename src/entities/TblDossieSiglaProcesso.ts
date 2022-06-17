import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";
import { TblSiglaProcesso } from "./TblSiglaProcesso";

@Index("PK_TBL_DOSSIE_SIGLA_PROCESSO", ["codDossieConfiguracao", "codSigla"], {
  unique: true,
})
@Entity("TBL_DOSSIE_SIGLA_PROCESSO")
export class TblDossieSiglaProcesso {
  @Column("number", { primary: true, name: "COD_SIGLA" })
  codSigla: number;

  @Column("number", { name: "COD_ORDEM", nullable: true })
  codOrdem: number | null;

  @Column("number", { primary: true, name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @ManyToOne(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblDossieSiglaProcessos
  )
  @JoinColumn([
    {
      name: "COD_DOSSIE_CONFIGURACAO",
      referencedColumnName: "codDossieConfiguracao",
    },
  ])
  codDossieConfiguracao2: TblDossieConfiguracao;

  @ManyToOne(
    () => TblSiglaProcesso,
    (tblSiglaProcesso) => tblSiglaProcesso.tblDossieSiglaProcessos
  )
  @JoinColumn([{ name: "COD_SIGLA", referencedColumnName: "codSigla" }])
  codSigla2: TblSiglaProcesso;
}

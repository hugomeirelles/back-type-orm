import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";

@Index(
  "PK_TBL_DOSSIE_SERVICO_DOCUMENT",
  ["codDossieConfiguracao", "codAssuntoDocumentoTipo"],
  { unique: true }
)
@Entity("TBL_DOSSIE_SERVICO_DOCUMENTO")
export class TblDossieServicoDocumento {
  @Column("number", { name: "COD_ORDEM", nullable: true })
  codOrdem: number | null;

  @Column("number", { primary: true, name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO_DOCUMENTO_TIPO" })
  codAssuntoDocumentoTipo: number;

  @ManyToOne(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblDossieServicoDocumentos
  )
  @JoinColumn([
    {
      name: "COD_DOSSIE_CONFIGURACAO",
      referencedColumnName: "codDossieConfiguracao",
    },
  ])
  codDossieConfiguracao2: TblDossieConfiguracao;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) =>
      tblAssuntoDocumentoTipo.tblDossieServicoDocumentos
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo2: TblAssuntoDocumentoTipo;
}

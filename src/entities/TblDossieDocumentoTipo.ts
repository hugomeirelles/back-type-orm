import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDocumentoTipo } from "./TblDocumentoTipo";
import { TblDossieDocumentoTipoAgru } from "./TblDossieDocumentoTipoAgru";

@Index("PK_TBL_DOSSIE_DOCUMENTO_TIPO", ["codDossieDocumentoTipo"], {
  unique: true,
})
@Entity("TBL_DOSSIE_DOCUMENTO_TIPO")
export class TblDossieDocumentoTipo {
  @Column("number", { name: "COD_ORDEM", nullable: true })
  codOrdem: number | null;

  @Column("number", { primary: true, name: "COD_DOSSIE_DOCUMENTO_TIPO" })
  codDossieDocumentoTipo: number;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblDossieDocumentoTipos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo: TblDocumentoTipo;

  @ManyToOne(
    () => TblDossieDocumentoTipoAgru,
    (tblDossieDocumentoTipoAgru) =>
      tblDossieDocumentoTipoAgru.tblDossieDocumentoTipos
  )
  @JoinColumn([
    {
      name: "COD_DOSSIE_DOCUMENTO_TIPO_AGRU",
      referencedColumnName: "codDossieDocumentoTipoAgru",
    },
  ])
  codDossieDocumentoTipoAgru: TblDossieDocumentoTipoAgru;
}

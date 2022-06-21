import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblDossieDocumentoTipo } from "./TblDossieDocumentoTipo";
import { TblDocumentoTipoAgrupador } from "./TblDocumentoTipoAgrupador";

@Index("PK_DOSSIE_DOCUMENTO_TIPO_AGRU", ["codDossieDocumentoTipoAgru"], {
  unique: true,
})
@Entity("TBL_DOSSIE_DOCUMENTO_TIPO_AGRU")
export class TblDossieDocumentoTipoAgru {
  @Column("number", { name: "COD_ORDEM" })
  codOrdem: number;

  @Column("number", { primary: true, name: "COD_DOSSIE_DOCUMENTO_TIPO_AGRU" })
  codDossieDocumentoTipoAgru: number;

  @Column("number", { name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @OneToMany(
    () => TblDossieDocumentoTipo,
    (tblDossieDocumentoTipo) =>
      tblDossieDocumentoTipo.codDossieDocumentoTipoAgru
  )
  tblDossieDocumentoTipos: TblDossieDocumentoTipo[];

  @ManyToOne(
    () => TblDocumentoTipoAgrupador,
    (tblDocumentoTipoAgrupador) =>
      tblDocumentoTipoAgrupador.tblDossieDocumentoTipoAgrus
  )
  @JoinColumn([
    {
      name: "COD_DOCUMENTO_TIPO_AGRUPADOR",
      referencedColumnName: "codDocumentoTipoAgrupador",
    },
  ])
  codDocumentoTipoAgrupador: TblDocumentoTipoAgrupador;
}

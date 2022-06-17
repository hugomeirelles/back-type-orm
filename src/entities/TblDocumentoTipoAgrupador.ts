import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblDossieDocumentoTipoAgru } from "./TblDossieDocumentoTipoAgru";

@Index("PK_TBL_DOCUMENTO_TIPO_AGRUPADO", ["codDocumentoTipoAgrupador"], {
  unique: true,
})
@Entity("TBL_DOCUMENTO_TIPO_AGRUPADOR")
export class TblDocumentoTipoAgrupador {
  @Column("varchar2", { name: "TXT_DOCUMENTO_TIPO_AGRUPADOR", length: 50 })
  txtDocumentoTipoAgrupador: string;

  @Column("number", { primary: true, name: "COD_DOCUMENTO_TIPO_AGRUPADOR" })
  codDocumentoTipoAgrupador: number;

  @Column("number", { name: "COD_ATIVO" })
  codAtivo: number;

  @OneToMany(
    () => TblDossieDocumentoTipoAgru,
    (tblDossieDocumentoTipoAgru) =>
      tblDossieDocumentoTipoAgru.codDocumentoTipoAgrupador
  )
  tblDossieDocumentoTipoAgrus: TblDossieDocumentoTipoAgru[];
}

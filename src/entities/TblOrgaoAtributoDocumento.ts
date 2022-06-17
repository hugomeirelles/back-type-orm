import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAtributo } from "./TblAtributo";
import { TblOrgao } from "./TblOrgao";

@Index(
  "PK_ORGAOATRIBUTOTIPODOCUMENTO",
  ["codOrgao", "codAtributo", "codDocumentoTipo"],
  { unique: true }
)
@Entity("TBL_ORGAO_ATRIBUTO_DOCUMENTO")
export class TblOrgaoAtributoDocumento {
  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { primary: true, name: "COD_DOCUMENTO_TIPO", scale: 0 })
  codDocumentoTipo: number;

  @Column("number", { primary: true, name: "COD_ATRIBUTO", scale: 0 })
  codAtributo: number;

  @ManyToOne(
    () => TblAtributo,
    (tblAtributo) => tblAtributo.tblOrgaoAtributoDocumentos
  )
  @JoinColumn([{ name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" }])
  codAtributo2: TblAtributo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblOrgaoAtributoDocumentos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;
}

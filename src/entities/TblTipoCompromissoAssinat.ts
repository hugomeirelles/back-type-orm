import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblDocumentoAssinatura } from "./TblDocumentoAssinatura";

@Index("PK_TIPO_COMPROMISSO_ASSINAT", ["codTipoCompromissoAssinat"], {
  unique: true,
})
@Entity("TBL_TIPO_COMPROMISSO_ASSINAT")
export class TblTipoCompromissoAssinat {
  @Column("varchar2", { name: "TXT_TITULO", length: 255 })
  txtTitulo: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 4000 })
  txtDescricao: string;

  @Column("number", { primary: true, name: "COD_TIPO_COMPROMISSO_ASSINAT" })
  codTipoCompromissoAssinat: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;

  @OneToMany(
    () => TblDocumentoAssinatura,
    (tblDocumentoAssinatura) => tblDocumentoAssinatura.codTipoCompromissoAssinat
  )
  tblDocumentoAssinaturas: TblDocumentoAssinatura[];
}

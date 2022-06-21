import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAssuntoDocTipoAtributo } from "./TblAssuntoDocTipoAtributo";
import { TblSecao } from "./TblSecao";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";

@Index("PK_ASSUNTO_DOC_TIPO_SECAO", ["codAssuntoDocTipoSecao"], {
  unique: true,
})
@Index(
  "UC_ASSUNTO_DOC_TIPO_SECAO_01",
  ["codSecao", "codAssuntoDocumentoTipo"],
  { unique: true }
)
@Entity("TBL_ASSUNTO_DOC_TIPO_SECAO")
export class TblAssuntoDocTipoSecao {
  @Column("number", { name: "COD_SECAO", unique: true })
  codSecao: number;

  @Column("number", { name: "COD_REGISTRO_OBRIGATORIO" })
  codRegistroObrigatorio: number;

  @Column("number", { name: "COD_ORDEM" })
  codOrdem: number;

  @Column("number", { name: "COD_ATRIBUTO_MULTIVALORADO" })
  codAtributoMultivalorado: number;

  @Column("number", { name: "COD_ASSUNTO_DOCUMENTO_TIPO", unique: true })
  codAssuntoDocumentoTipo: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO_DOC_TIPO_SECAO" })
  codAssuntoDocTipoSecao: number;

  @OneToMany(
    () => TblAssuntoDocTipoAtributo,
    (tblAssuntoDocTipoAtributo) =>
      tblAssuntoDocTipoAtributo.codAssuntoDocTipoSecao
  )
  tblAssuntoDocTipoAtributos: TblAssuntoDocTipoAtributo[];

  @ManyToOne(() => TblSecao, (tblSecao) => tblSecao.tblAssuntoDocTipoSecaos)
  @JoinColumn([{ name: "COD_SECAO", referencedColumnName: "codSecao" }])
  codSecao2: TblSecao;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) =>
      tblAssuntoDocumentoTipo.tblAssuntoDocTipoSecaos,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo2: TblAssuntoDocumentoTipo;
}

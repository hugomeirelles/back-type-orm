import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAssuntoDocTipoSecao } from "./TblAssuntoDocTipoSecao";
import { TblAtributo } from "./TblAtributo";

@Index("PK_TBL_ASSUNTO_DOC_TIPO_ATRIBUTO", ["codAssuntoDocTipoAtributo"], {
  unique: true,
})
@Entity("TBL_ASSUNTO_DOC_TIPO_ATRIBUTO")
export class TblAssuntoDocTipoAtributo {
  @Column("number", { name: "COD_UNICO_LINHA", default: () => "(0)" })
  codUnicoLinha: number;

  @Column("number", {
    name: "COD_ORDEM",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codOrdem: number | null;

  @Column("number", {
    name: "COD_OBRIGATORIO",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codObrigatorio: number;

  @Column("number", { name: "COD_DUPLICIDADE", scale: 0 })
  codDuplicidade: number;

  @Column("number", {
    primary: true,
    name: "COD_ASSUNTO_DOC_TIPO_ATRIBUTO",
    scale: 0,
  })
  codAssuntoDocTipoAtributo: number;

  @ManyToOne(
    () => TblAssuntoDocTipoSecao,
    (tblAssuntoDocTipoSecao) =>
      tblAssuntoDocTipoSecao.tblAssuntoDocTipoAtributos
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOC_TIPO_SECAO",
      referencedColumnName: "codAssuntoDocTipoSecao",
    },
  ])
  codAssuntoDocTipoSecao: TblAssuntoDocTipoSecao;

  @ManyToOne(
    () => TblAtributo,
    (tblAtributo) => tblAtributo.tblAssuntoDocTipoAtributos
  )
  @JoinColumn([{ name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" }])
  codAtributo: TblAtributo;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAssuntoCategoria } from "./TblAssuntoCategoria";

@Index("PK_TBL_ASSUNTO_DESCRICAO", ["codAssuntoDescricao"], { unique: true })
@Entity("TBL_ASSUNTO_DESCRICAO")
export class TblAssuntoDescricao {
  @Column("varchar2", {
    name: "TXT_ASSUNTO_DESCRICAO",
    nullable: true,
    length: 4000,
  })
  txtAssuntoDescricao: string | null;

  @Column("number", {
    name: "COD_PROTOCOLO_TIPO",
    scale: 0,
    default: () => "(0)",
  })
  codProtocoloTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO_DESCRICAO", scale: 0 })
  codAssuntoDescricao: number;

  @ManyToOne(
    () => TblAssuntoCategoria,
    (tblAssuntoCategoria) => tblAssuntoCategoria.tblAssuntoDescricaos
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_CATEGORIA",
      referencedColumnName: "codAssuntoCategoria",
    },
  ])
  codAssuntoCategoria: TblAssuntoCategoria;
}

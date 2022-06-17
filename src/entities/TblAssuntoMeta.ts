import { Column, Entity, Index } from "typeorm";

@Index(
  "CONS_UNIQUE_TBL_ASSUNTO_META",
  ["codAssuntoMeta", "codOrgao", "codAssunto"],
  { unique: true }
)
@Index("SYS_C00269780", ["codAssuntoMeta"], { unique: true })
@Entity("TBL_ASSUNTO_META")
export class TblAssuntoMeta {
  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_META" })
  codMeta: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO_META", scale: 0 })
  codAssuntoMeta: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO", scale: 0 })
  codAssunto: number;
}

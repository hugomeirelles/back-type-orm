import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_ETIQUETA_PADRAO", ["codEtiquetaPadrao"], {
  unique: true,
})
@Entity("TBL_SISTEMA_ETIQUETA_PADRAO")
export class TblSistemaEtiquetaPadrao {
  @Column("clob", { name: "TXT_PADRAO", nullable: true })
  txtPadrao: string | null;

  @Column("varchar2", {
    name: "TXT_ETIQUETA_PADRAO",
    nullable: true,
    length: 100,
  })
  txtEtiquetaPadrao: string | null;

  @Column("date", { name: "DT_ETIQUETA_PADRAO", default: () => "sysdate" })
  dtEtiquetaPadrao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_ETIQUETA_PADRAO", scale: 0 })
  codEtiquetaPadrao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_AREA", scale: 0, default: () => "(0)" })
  codArea: number;
}

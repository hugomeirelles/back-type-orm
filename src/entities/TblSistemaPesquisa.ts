import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_PESQUISA", ["codPesquisa"], { unique: true })
@Entity("TBL_SISTEMA_PESQUISA")
export class TblSistemaPesquisa {
  @Column("clob", { name: "TXT_PESQUISA", nullable: true })
  txtPesquisa: string | null;

  @Column("clob", { name: "TXT_CRITERIO", nullable: true })
  txtCriterio: string | null;

  @Column("date", { name: "DT_PESQUISA", default: () => "sysdate" })
  dtPesquisa: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", {
    primary: true,
    name: "COD_PESQUISA",
    precision: 6,
    scale: 0,
  })
  codPesquisa: number;

  @Column("number", { name: "COD_AREA", scale: 0 })
  codArea: number;
}

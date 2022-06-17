import { Column, Entity } from "typeorm";

@Entity("TBL_GRUPO_HISTORICO")
export class TblGrupoHistorico {
  @Column("clob", { name: "TXT_SQL", nullable: true })
  txtSql: string | null;

  @Column("date", { name: "DT_ACAO", default: () => "sysdate" })
  dtAcao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @Column("number", { name: "COD_ACAO", scale: 0 })
  codAcao: number;
}

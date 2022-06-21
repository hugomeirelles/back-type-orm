import { Column, Entity } from "typeorm";

@Entity("TBL_CONTRATO_HISTORICO")
export class TblContratoHistorico {
  @Column("clob", { name: "TXT_SQL", nullable: true })
  txtSql: string | null;

  @Column("date", { name: "DT_ACAO", default: () => "SYSDATE" })
  dtAcao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", { name: "COD_ACAO", scale: 0 })
  codAcao: number;
}

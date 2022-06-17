import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_RESULTADO", ["codJudicial", "codResultado"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_RESULTADO")
export class TblJudicialResultado {
  @Column("clob", { name: "TXT_DECISAO_COMPLEMENTO", nullable: true })
  txtDecisaoComplemento: string | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_USUARIO_RESULTADO", nullable: true, scale: 0 })
  codUsuarioResultado: number | null;

  @Column("number", { primary: true, name: "COD_RESULTADO", scale: 0 })
  codResultado: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { name: "COD_DECISAO_TIPO", scale: 0 })
  codDecisaoTipo: number;

  @Column("number", { name: "COD_DECISAO_RECORRIDA", nullable: true, scale: 0 })
  codDecisaoRecorrida: number | null;
}

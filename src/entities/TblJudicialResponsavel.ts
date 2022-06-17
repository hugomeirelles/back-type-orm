import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_JUDICIAL_RESPONSAVEL",
  ["codJudicial", "codUsuarioResponsavel"],
  { unique: true }
)
@Entity("TBL_JUDICIAL_RESPONSAVEL")
export class TblJudicialResponsavel {
  @Column("clob", { name: "TXT_INFORMACAO_COMPLEMENTAR", nullable: true })
  txtInformacaoComplementar: string | null;

  @Column("date", { name: "DT_FINALIZACAO", nullable: true })
  dtFinalizacao: Date | null;

  @Column("date", { name: "DT_ATRIBUICAO" })
  dtAtribuicao: Date;

  @Column("number", {
    primary: true,
    name: "COD_USUARIO_RESPONSAVEL",
    scale: 0,
  })
  codUsuarioResponsavel: number;

  @Column("number", { name: "COD_USUARIO_ATRIBUIDOR", scale: 0 })
  codUsuarioAtribuidor: number;

  @Column("number", { name: "COD_RESPONSAVEL", scale: 0 })
  codResponsavel: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { name: "COD_EMAIL", scale: 0, default: () => "(0)" })
  codEmail: number;
}

import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_MINUTAAVALIACAOPARTICIPANTE",
  ["codMinuta", "codAvaliacao", "codUsuario", "codOrgao"],
  { unique: true }
)
@Entity("TBL_MINUTA_AVALIACAO_PARTICIPA")
export class TblMinutaAvaliacaoParticipa {
  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("date", { name: "DT_PRAZO" })
  dtPrazo: Date;

  @Column("date", { name: "DT_LEITURA", nullable: true })
  dtLeitura: Date | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", { name: "DT_AVALIACAO", nullable: true })
  dtAvaliacao: Date | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_RESULTADO", nullable: true, scale: 0 })
  codResultado: number | null;

  @Column("number", { name: "COD_ORGAO", scale: 0, default: () => "(48500)" })
  codOrgao: number;

  @Column("number", { name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @Column("number", { name: "COD_AVALIACAO", scale: 0 })
  codAvaliacao: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_MINUTA", ["codJudicial", "codMinuta"], { unique: true })
@Entity("TBL_JUDICIAL_MINUTA")
export class TblJudicialMinuta {
  @Column("date", { name: "DT_JUDICIAL_MINUTA", default: () => "sysdate" })
  dtJudicialMinuta: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;
}

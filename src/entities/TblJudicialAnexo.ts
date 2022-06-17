import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_ANEXO", ["codJudicial", "codJudicialAnexo"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_ANEXO")
export class TblJudicialAnexo {
  @Column("date", { name: "HR_VINCULAR", default: () => "sysdate" })
  hrVincular: Date;

  @Column("date", { name: "HR_DESVINCULAR", nullable: true })
  hrDesvincular: Date | null;

  @Column("date", { name: "DT_VINCULAR", default: () => "sysdate" })
  dtVincular: Date;

  @Column("date", { name: "DT_DESVINCULAR", nullable: true })
  dtDesvincular: Date | null;

  @Column("number", { name: "COD_USUARIO_VINCULAR", scale: 0 })
  codUsuarioVincular: number;

  @Column("number", {
    name: "COD_USUARIO_DESVINCULAR",
    nullable: true,
    scale: 0,
  })
  codUsuarioDesvincular: number | null;

  @Column("number", { primary: true, name: "COD_JUDICIAL_ANEXO", scale: 0 })
  codJudicialAnexo: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_VISUALIZADOR", ["codJudicial", "codArquivo"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_VISUALIZADOR")
export class TblJudicialVisualizador {
  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_QTD_PAGINA", scale: 0, default: () => "(1)" })
  codQtdPagina: number;

  @Column("number", {
    name: "COD_PAGINA_INICIAL",
    scale: 0,
    default: () => "(1)",
  })
  codPaginaInicial: number;

  @Column("number", { name: "COD_PAGINA_FINAL", scale: 0 })
  codPaginaFinal: number;

  @Column("number", {
    name: "COD_JUDICIAL_ANEXO",
    scale: 0,
    default: () => "(0)",
  })
  codJudicialAnexo: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", {
    primary: true,
    name: "COD_ARQUIVO",
    scale: 0,
    default: () => "(1)",
  })
  codArquivo: number;
}

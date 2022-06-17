import { Column, Entity, Index } from "typeorm";

@Index("IDX$$_0001000D", ["codArquivo", "codPaginaInicial"], {})
@Index("PK_TBL_PROTOCOLO_VISUALIZADOR", ["codProtocolo", "codArquivo"], {
  unique: true,
})
@Index("TBL_PROTOCOLO_VIS_N1", ["codProtocolo", "codPaginaInicial"], {})
@Entity("TBL_PROTOCOLO_VISUALIZADOR")
export class TblProtocoloVisualizador {
  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_QTD_PAGINA", scale: 0, default: () => "(1)" })
  codQtdPagina: number;

  @Column("number", {
    name: "COD_PROTOCOLO_ANEXO",
    scale: 0,
    default: () => "(0)",
  })
  codProtocoloAnexo: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_PAGINA_INICIAL",
    scale: 0,
    default: () => "(1)",
  })
  codPaginaInicial: number;

  @Column("number", { name: "COD_PAGINA_FINAL", scale: 0 })
  codPaginaFinal: number;

  @Column("number", {
    primary: true,
    name: "COD_ARQUIVO",
    scale: 0,
    default: () => "(1)",
  })
  codArquivo: number;
}

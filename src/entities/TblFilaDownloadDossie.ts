import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_FILA_DOWNLOAD_DOSSIE", ["codFilaDownloadDossie"], {
  unique: true,
})
@Entity("TBL_FILA_DOWNLOAD_DOSSIE")
export class TblFilaDownloadDossie {
  @Column("varchar2", { name: "TXT_IDENTIFICADOR", length: 70 })
  txtIdentificador: string;

  @Column("varchar2", { name: "TXT_ERROR", nullable: true, length: 1000 })
  txtError: string | null;

  @Column("date", { name: "DT_SOLICITACAO", default: () => "(SYSDATE)" })
  dtSolicitacao: Date;

  @Column("date", { name: "DT_PROCESSADO", nullable: true })
  dtProcessado: Date | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_PROCESSADO", scale: 0, default: () => "(0)" })
  codProcessado: number;

  @Column("number", {
    primary: true,
    name: "COD_FILA_DOWNLOAD_DOSSIE",
    scale: 0,
  })
  codFilaDownloadDossie: number;
}

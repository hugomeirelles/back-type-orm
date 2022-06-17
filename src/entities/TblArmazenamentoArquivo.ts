import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_ARMAZENAMENTO_ARQUIVO", ["codArmazenamento", "txtArquivo"], {
  unique: true,
})
@Entity("TBL_ARMAZENAMENTO_ARQUIVO")
export class TblArmazenamentoArquivo {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0, default: () => "(1)" })
  codUsuario: number;

  @Column("number", { name: "COD_PAGINA", scale: 0, default: () => "(0)" })
  codPagina: number;

  @Column("number", { name: "COD_OCR", scale: 0, default: () => "(0)" })
  codOcr: number;

  @Column("number", { primary: true, name: "COD_ARMAZENAMENTO", scale: 0 })
  codArmazenamento: number;
}

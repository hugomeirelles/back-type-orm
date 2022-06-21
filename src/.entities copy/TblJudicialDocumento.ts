import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicial } from "./TblJudicial";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_JUDICIAL_DOCUMENTO", ["codJudicial", "txtArquivo"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_DOCUMENTO")
export class TblJudicialDocumento {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_PROTOCOLO", nullable: true, scale: 0 })
  codProtocolo: number | null;

  @Column("number", { name: "COD_PAGINA", scale: 0, default: () => "(0)" })
  codPagina: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { name: "COD_DOCUMENTO_TIPO", scale: 0 })
  codDocumentoTipo: number;

  @Column("number", {
    name: "COD_ARQUIVO",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  codArquivo: number | null;

  @ManyToOne(
    () => TblJudicial,
    (tblJudicial) => tblJudicial.tblJudicialDocumentos
  )
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblJudicialDocumentos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

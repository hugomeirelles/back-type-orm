import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPendencia } from "./TblPendencia";

@Index("PK_TBL_PENDENCIA_ARQUIVO", ["codPendenciaArquivo"], { unique: true })
@Entity("TBL_PENDENCIA_ARQUIVO")
export class TblPendenciaArquivo {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", nullable: true, length: 255 })
  txtHash: string | null;

  @Column("clob", { name: "TXT_ARQUIVO" })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("number", { name: "COD_TAMANHO" })
  codTamanho: number;

  @Column("number", { primary: true, name: "COD_PENDENCIA_ARQUIVO" })
  codPendenciaArquivo: number;

  @Column("number", { name: "COD_PAGINA", nullable: true })
  codPagina: number | null;

  @ManyToOne(
    () => TblPendencia,
    (tblPendencia) => tblPendencia.tblPendenciaArquivos
  )
  @JoinColumn([{ name: "COD_PENDENCIA", referencedColumnName: "codPendencia" }])
  codPendencia: TblPendencia;
}

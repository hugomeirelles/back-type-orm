import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { TblArquivo } from "./TblArquivo";

@Index("PK_ARQUIVOINVENTARIOETIQUETA", ["codInventario"], { unique: true })
@Entity("TBL_ARQUIVO_ETIQUETA")
export class TblArquivoEtiqueta {
  @Column("varchar2", { name: "TXT_TITULO", nullable: true, length: 255 })
  txtTitulo: string | null;

  @Column("varchar2", { name: "TXT_SUBTITULO", nullable: true, length: 255 })
  txtSubtitulo: string | null;

  @Column("clob", { name: "TXT_DESCRICAO", nullable: true })
  txtDescricao: string | null;

  @Column("clob", { name: "TXT_CLASSIFICACAO_ARQUIVISTICA", nullable: true })
  txtClassificacaoArquivistica: string | null;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToOne(() => TblArquivo, (tblArquivo) => tblArquivo.tblArquivoEtiqueta)
  @JoinColumn([
    { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
  ])
  codInventario2: TblArquivo;
}

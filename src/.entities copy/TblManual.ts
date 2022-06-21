import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblManualCategoria } from "./TblManualCategoria";

@Index("PK_TBL_MANUAL", ["codManual"], { unique: true })
@Entity("TBL_MANUAL")
export class TblManual {
  @Column("varchar2", { name: "TXT_MANUAL", length: 255 })
  txtManual: string;

  @Column("clob", { name: "TXT_DESCRICAO", nullable: true })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_MANUAL", default: () => "sysdate" })
  dtManual: Date;

  @Column("number", { name: "COD_PUBLICACAO", scale: 0, default: () => "(1)" })
  codPublicacao: number;

  @Column("number", { name: "COD_MANUAL", scale: 0 })
  codManual: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblManualCategoria,
    (tblManualCategoria) => tblManualCategoria.tblManuals
  )
  @JoinColumn([{ name: "COD_CATEGORIA", referencedColumnName: "codCategoria" }])
  codCategoria: TblManualCategoria;
}

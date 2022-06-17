import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDocumentoTipo } from "./TblDocumentoTipo";

@Index("PK_TBL_DOCUMENTO_TIPO_MODELO", ["codModelo"], { unique: true })
@Entity("TBL_DOCUMENTO_TIPO_MODELO")
export class TblDocumentoTipoModelo {
  @Column("clob", { name: "TXT_DESCRICAO", nullable: true })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO_DIGITAL", length: 255 })
  txtArquivoDigital: string;

  @Column("number", { primary: true, name: "COD_MODELO", scale: 0 })
  codModelo: number;

  @Column("number", {
    name: "COD_ACESSO_LIVRE",
    scale: 0,
    default: () => "(1)",
  })
  codAcessoLivre: number;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblDocumentoTipoModelos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo: TblDocumentoTipo;
}

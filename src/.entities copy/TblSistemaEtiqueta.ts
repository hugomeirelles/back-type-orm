import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_ETIQUETA", ["codEtiqueta"], { unique: true })
@Entity("TBL_SISTEMA_ETIQUETA")
export class TblSistemaEtiqueta {
  @Column("varchar2", {
    name: "TXT_SEPARADOR_VERTICAL",
    length: 5,
    default: () => "(0)",
  })
  txtSeparadorVertical: string;

  @Column("varchar2", {
    name: "TXT_SEPARADOR_HORIZONTAL",
    length: 5,
    default: () => "(0)",
  })
  txtSeparadorHorizontal: string;

  @Column("varchar2", {
    name: "TXT_MARGEM_SUPERIOR",
    length: 5,
    default: () => "(0)",
  })
  txtMargemSuperior: string;

  @Column("varchar2", {
    name: "TXT_MARGEM_LATERAL",
    length: 5,
    default: () => "(0)",
  })
  txtMargemLateral: string;

  @Column("varchar2", {
    name: "TXT_LARGURA_TABELA",
    length: 5,
    default: () => "(0)",
  })
  txtLarguraTabela: string;

  @Column("varchar2", { name: "TXT_LARGURA", length: 5, default: () => "(0)" })
  txtLargura: string;

  @Column("varchar2", { name: "TXT_IMAGEM", nullable: true, length: 100 })
  txtImagem: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 50 })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_ALTURA", length: 5, default: () => "(0)" })
  txtAltura: string;

  @Column("varchar2", { name: "TXT_ALINHAMENTO", nullable: true, length: 10 })
  txtAlinhamento: string | null;

  @Column("number", { name: "COD_LINHAS", scale: 0, default: () => "(0)" })
  codLinhas: number;

  @Column("number", { primary: true, name: "COD_ETIQUETA", scale: 0 })
  codEtiqueta: number;

  @Column("number", { name: "COD_COLUNAS", scale: 0, default: () => "(0)" })
  codColunas: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

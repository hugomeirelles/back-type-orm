import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { TblAssunto } from "./TblAssunto";
import { TblAssuntoDocTipoAtributo } from "./TblAssuntoDocTipoAtributo";
import { TblAtributoOpcao } from "./TblAtributoOpcao";
import { TblDocumentoTipoAtributo } from "./TblDocumentoTipoAtributo";
import { TblOrgaoAtributo } from "./TblOrgaoAtributo";
import { TblOrgaoAtributoDocumento } from "./TblOrgaoAtributoDocumento";
import { TblProtocoloAtributo } from "./TblProtocoloAtributo";
import { TblSegUsuarioAtributo } from "./TblSegUsuarioAtributo";

@Index("IX_A_COD_RESTRITO", ["codRestrito"], {})
@Index("PK_TBL_ATRIBUTO", ["codAtributo"], { unique: true })
@Index(
  "UK_ATRIBUTO_NOME_IDENTIFICADOR",
  ["txtAtributoNome", "txtIdentificador"],
  { unique: true }
)
@Entity("TBL_ATRIBUTO")
export class TblAtributo {
  @Column("varchar2", {
    name: "TXT_TITULO_DESCRICAO",
    nullable: true,
    length: 50,
  })
  txtTituloDescricao: string | null;

  @Column("varchar2", {
    name: "TXT_TAMANHO_ARQUIVO",
    nullable: true,
    length: 20,
  })
  txtTamanhoArquivo: string | null;

  @Column("varchar2", { name: "TXT_TABELA", nullable: true, length: 100 })
  txtTabela: string | null;

  @Column("varchar2", {
    name: "TXT_IDENTIFICADOR",
    nullable: true,
    unique: true,
    length: 54,
  })
  txtIdentificador: string | null;

  @Column("varchar2", {
    name: "TXT_EXTENSAO_ARQUIVO",
    nullable: true,
    length: 255,
  })
  txtExtensaoArquivo: string | null;

  @Column("varchar2", {
    name: "TXT_DESCRICAO_ATRIBUTO",
    nullable: true,
    length: 500,
  })
  txtDescricaoAtributo: string | null;

  @Column("varchar2", {
    name: "TXT_CAMPO_ORDENACAO",
    nullable: true,
    length: 50,
  })
  txtCampoOrdenacao: string | null;

  @Column("varchar2", {
    name: "TXT_CAMPO_DESCRICAO",
    nullable: true,
    length: 50,
  })
  txtCampoDescricao: string | null;

  @Column("varchar2", { name: "TXT_CAMPO_CHAVE", nullable: true, length: 50 })
  txtCampoChave: string | null;

  @Column("varchar2", { name: "TXT_CAMPO", nullable: true, length: 100 })
  txtCampo: string | null;

  @Column("varchar2", { name: "TXT_ATRIBUTO_TAMANHO", length: 10 })
  txtAtributoTamanho: string;

  @Column("varchar2", { name: "TXT_ATRIBUTO_NOME", unique: true, length: 255 })
  txtAtributoNome: string;

  @Column("number", { name: "COD_VINCULADO", nullable: true })
  codVinculado: number | null;

  @Column("number", {
    name: "COD_TIPO_ORDENACAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codTipoOrdenacao: number | null;

  @Column("number", {
    name: "COD_RESTRITO",
    precision: 10,
    scale: 0,
    default: () => "0",
  })
  codRestrito: number;

  @Column("number", { name: "COD_OBRIGATORIO", scale: 0, default: () => "(0)" })
  codObrigatorio: number;

  @Column("number", { name: "COD_MULTIPLO", scale: 0, default: () => "(0)" })
  codMultiplo: number;

  @Column("number", { name: "COD_HTML", scale: 0, default: () => "(0)" })
  codHtml: number;

  @Column("number", {
    name: "COD_EXIBICAO_TAMANHO",
    scale: 0,
    default: () => "(50)",
  })
  codExibicaoTamanho: number;

  @Column("number", { name: "COD_ATRIBUTO_TIPO", scale: 0 })
  codAtributoTipo: number;

  @Column("number", { primary: true, name: "COD_ATRIBUTO", scale: 0 })
  codAtributo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ASSINATURA_DIGITAL",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codAssinaturaDigital: number | null;

  @ManyToMany(() => TblAssunto, (tblAssunto) => tblAssunto.tblAtributos)
  tblAssuntos: TblAssunto[];

  @OneToMany(
    () => TblAssuntoDocTipoAtributo,
    (tblAssuntoDocTipoAtributo) => tblAssuntoDocTipoAtributo.codAtributo
  )
  tblAssuntoDocTipoAtributos: TblAssuntoDocTipoAtributo[];

  @OneToMany(
    () => TblAtributoOpcao,
    (tblAtributoOpcao) => tblAtributoOpcao.codAtributo2
  )
  tblAtributoOpcaos: TblAtributoOpcao[];

  @OneToMany(
    () => TblDocumentoTipoAtributo,
    (tblDocumentoTipoAtributo) => tblDocumentoTipoAtributo.codAtributo2
  )
  tblDocumentoTipoAtributos: TblDocumentoTipoAtributo[];

  @OneToMany(
    () => TblOrgaoAtributo,
    (tblOrgaoAtributo) => tblOrgaoAtributo.codAtributo2
  )
  tblOrgaoAtributos: TblOrgaoAtributo[];

  @OneToMany(
    () => TblOrgaoAtributoDocumento,
    (tblOrgaoAtributoDocumento) => tblOrgaoAtributoDocumento.codAtributo2
  )
  tblOrgaoAtributoDocumentos: TblOrgaoAtributoDocumento[];

  @OneToMany(
    () => TblProtocoloAtributo,
    (tblProtocoloAtributo) => tblProtocoloAtributo.codAtributo
  )
  tblProtocoloAtributos: TblProtocoloAtributo[];

  @OneToMany(
    () => TblSegUsuarioAtributo,
    (tblSegUsuarioAtributo) => tblSegUsuarioAtributo.codAtributo
  )
  tblSegUsuarioAtributos: TblSegUsuarioAtributo[];
}

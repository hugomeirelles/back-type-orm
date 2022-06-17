import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { TblAssunto } from "./TblAssunto";
import { TblSuporteTipo } from "./TblSuporteTipo";
import { TblArquivoComentario } from "./TblArquivoComentario";
import { TblArquivoDocumento } from "./TblArquivoDocumento";
import { TblArquivoEliminar } from "./TblArquivoEliminar";
import { TblArquivoEmprestimo } from "./TblArquivoEmprestimo";
import { TblArquivoEtiqueta } from "./TblArquivoEtiqueta";
import { TblArquivoMovimento } from "./TblArquivoMovimento";
import { TblArquivoProtocolo } from "./TblArquivoProtocolo";
import { TblEmprestimo } from "./TblEmprestimo";
import { TblListagemEliminacao } from "./TblListagemEliminacao";

@Index("IX_A_COD_ATIVO", ["codAtivo"], {})
@Index("PK_TBL_ARQUIVO_INVENTARIO", ["codInventario"], { unique: true })
@Entity("TBL_ARQUIVO")
export class TblArquivo {
  @Column("varchar2", { name: "TXT_TIPOLOGIA", nullable: true, length: 100 })
  txtTipologia: string | null;

  @Column("varchar2", { name: "TXT_SALA", nullable: true, length: 50 })
  txtSala: string | null;

  @Column("varchar2", { name: "TXT_PRATELEIRA", nullable: true, length: 255 })
  txtPrateleira: string | null;

  @Column("varchar2", { name: "TXT_PASTA", nullable: true, length: 255 })
  txtPasta: string | null;

  @Column("varchar2", {
    name: "TXT_PALAVRA_CHAVE",
    nullable: true,
    length: 255,
  })
  txtPalavraChave: string | null;

  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("clob", { name: "TXT_NUMERO", nullable: true })
  txtNumero: string | null;

  @Column("varchar2", {
    name: "TXT_MOTIVO_EXCLUSAO",
    nullable: true,
    length: 255,
  })
  txtMotivoExclusao: string | null;

  @Column("varchar2", { name: "TXT_MODULO", nullable: true, length: 255 })
  txtModulo: string | null;

  @Column("varchar2", { name: "TXT_LIVRO", nullable: true, length: 255 })
  txtLivro: string | null;

  @Column("varchar2", { name: "TXT_INTERESSADO", nullable: true, length: 255 })
  txtInteressado: string | null;

  @Column("varchar2", { name: "TXT_GAVETA", nullable: true, length: 50 })
  txtGaveta: string | null;

  @Column("varchar2", { name: "TXT_FACE", nullable: true, length: 255 })
  txtFace: string | null;

  @Column("varchar2", { name: "TXT_ESTANTE", nullable: true, length: 255 })
  txtEstante: string | null;

  @Column("varchar2", { name: "TXT_DOSSIE", nullable: true, length: 255 })
  txtDossie: string | null;

  @Column("clob", { name: "TXT_DESCRICAO", nullable: true })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_DATALIMITE2", nullable: true, length: 255 })
  txtDatalimite2: string | null;

  @Column("varchar2", { name: "TXT_DATALIMITE", nullable: true, length: 255 })
  txtDatalimite: string | null;

  @Column("varchar2", { name: "TXT_CORREDOR", nullable: true, length: 255 })
  txtCorredor: string | null;

  @Column("varchar2", { name: "TXT_CAIXA", nullable: true, length: 255 })
  txtCaixa: string | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", { name: "DT_DATALIMITE", nullable: true })
  dtDatalimite: Date | null;

  @Column("number", {
    name: "COD_UNIDADE_ARQUIVAMENTO",
    nullable: true,
    scale: 0,
  })
  codUnidadeArquivamento: number | null;

  @Column("number", { name: "COD_SITUACAO", scale: 0, default: () => "(20)" })
  codSituacao: number;

  @Column("number", { name: "COD_ORIGEM", nullable: true, scale: 0 })
  codOrigem: number | null;

  @Column("number", { name: "COD_NUMERACAO", scale: 0, default: () => "1" })
  codNumeracao: number;

  @Column("number", { name: "COD_MIGRACAO", nullable: true, scale: 0 })
  codMigracao: number | null;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @Column("number", { name: "COD_FUNDO", scale: 0, default: () => "(1)" })
  codFundo: number;

  @Column("number", { name: "COD_EMPRESA", nullable: true, scale: 0 })
  codEmpresa: number | null;

  @Column("number", { name: "COD_DOCUMENTO_TIPO", nullable: true, scale: 0 })
  codDocumentoTipo: number | null;

  @Column("number", { name: "COD_DESTINACAO", nullable: true, scale: 0 })
  codDestinacao: number | null;

  @Column("number", { name: "COD_CAIXA_TIPO", scale: 0, default: () => "(1)" })
  codCaixaTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ARQUIVO_CENTRAL",
    scale: 0,
    default: () => "(1)",
  })
  codArquivoCentral: number;

  @ManyToOne(() => TblAssunto, (tblAssunto) => tblAssunto.tblArquivos)
  @JoinColumn([{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }])
  codAssunto: TblAssunto;

  @ManyToOne(
    () => TblSuporteTipo,
    (tblSuporteTipo) => tblSuporteTipo.tblArquivos
  )
  @JoinColumn([
    { name: "COD_SUPORTE_TIPO", referencedColumnName: "codSuporteTipo" },
  ])
  codSuporteTipo: TblSuporteTipo;

  @OneToMany(
    () => TblArquivoComentario,
    (tblArquivoComentario) => tblArquivoComentario.codInventario2
  )
  tblArquivoComentarios: TblArquivoComentario[];

  @OneToMany(
    () => TblArquivoDocumento,
    (tblArquivoDocumento) => tblArquivoDocumento.codInventario2
  )
  tblArquivoDocumentos: TblArquivoDocumento[];

  @OneToMany(
    () => TblArquivoEliminar,
    (tblArquivoEliminar) => tblArquivoEliminar.codInventario2
  )
  tblArquivoEliminars: TblArquivoEliminar[];

  @OneToMany(
    () => TblArquivoEmprestimo,
    (tblArquivoEmprestimo) => tblArquivoEmprestimo.codInventario2
  )
  tblArquivoEmprestimos: TblArquivoEmprestimo[];

  @OneToOne(
    () => TblArquivoEtiqueta,
    (tblArquivoEtiqueta) => tblArquivoEtiqueta.codInventario2
  )
  tblArquivoEtiqueta: TblArquivoEtiqueta;

  @OneToMany(
    () => TblArquivoMovimento,
    (tblArquivoMovimento) => tblArquivoMovimento.codInventario2
  )
  tblArquivoMovimentos: TblArquivoMovimento[];

  @OneToMany(
    () => TblArquivoProtocolo,
    (tblArquivoProtocolo) => tblArquivoProtocolo.codInventario2
  )
  tblArquivoProtocolos: TblArquivoProtocolo[];

  @ManyToMany(() => TblEmprestimo, (tblEmprestimo) => tblEmprestimo.tblArquivos)
  tblEmprestimos: TblEmprestimo[];

  @ManyToMany(
    () => TblListagemEliminacao,
    (tblListagemEliminacao) => tblListagemEliminacao.tblArquivos
  )
  tblListagemEliminacaos: TblListagemEliminacao[];
}

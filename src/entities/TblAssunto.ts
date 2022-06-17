import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { TblArquivo } from "./TblArquivo";
import { TblAtributo } from "./TblAtributo";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";
import { TblAssuntoIndice } from "./TblAssuntoIndice";
import { TblOrgao } from "./TblOrgao";
import { TblAssuntoPadrao } from "./TblAssuntoPadrao";
import { TblCaixa } from "./TblCaixa";
import { TblProtocolo } from "./TblProtocolo";

@Index("IX_TXT_CONARQ_ASSUNTO", ["txtConarqAssunto"], {})
@Index("PK_TBL_ASSUNTO", ["codAssunto"], { unique: true })
@Entity("TBL_ASSUNTO")
export class TblAssunto {
  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("varchar2", {
    name: "TXT_DESCRICAO_EVENTO",
    nullable: true,
    length: 255,
  })
  txtDescricaoEvento: string | null;

  @Column("varchar2", {
    name: "TXT_COR",
    length: 7,
    default: () => "'#ffffff'",
  })
  txtCor: string;

  @Column("varchar2", {
    name: "TXT_CONARQ_SUBGRUPO",
    nullable: true,
    length: 3,
  })
  txtConarqSubgrupo: string | null;

  @Column("varchar2", {
    name: "TXT_CONARQ_SUBCLASSE",
    nullable: true,
    length: 3,
  })
  txtConarqSubclasse: string | null;

  @Column("clob", { name: "TXT_CONARQ_RESUMO", nullable: true })
  txtConarqResumo: string | null;

  @Column("varchar2", { name: "TXT_CONARQ_GRUPO", nullable: true, length: 3 })
  txtConarqGrupo: string | null;

  @Column("varchar2", { name: "TXT_CONARQ_CODIGO", nullable: true, length: 15 })
  txtConarqCodigo: string | null;

  @Column("varchar2", { name: "TXT_CONARQ_CLASSE", nullable: true, length: 3 })
  txtConarqClasse: string | null;

  @Column("varchar2", {
    name: "TXT_CONARQ_ASSUNTO",
    nullable: true,
    length: 255,
  })
  txtConarqAssunto: string | null;

  @Column("varchar2", { name: "TXT_ASSUNTO", nullable: true, length: 200 })
  txtAssunto: string | null;

  @Column("date", { name: "DT_CRIACAO", default: () => "sysdate" })
  dtCriacao: Date;

  @Column("number", {
    name: "COD_PRAZO",
    nullable: true,
    scale: 0,
    default: () => "NULL",
  })
  codPrazo: number | null;

  @Column("number", { name: "COD_PERMISSAO", nullable: true })
  codPermissao: number | null;

  @Column("number", {
    name: "COD_ORGAO_RESPONSAVEL",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codOrgaoResponsavel: number | null;

  @Column("number", {
    name: "COD_MUDANCA_SUPORTE",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codMudancaSuporte: number;

  @Column("number", {
    name: "COD_GUARDA_INTERMEDIARIA",
    nullable: true,
    scale: 0,
  })
  codGuardaIntermediaria: number | null;

  @Column("number", { name: "COD_GUARDA_CORRENTE", nullable: true, scale: 0 })
  codGuardaCorrente: number | null;

  @Column("number", { name: "COD_EMPRESA", scale: 0, default: () => "(1)" })
  codEmpresa: number;

  @Column("number", { name: "COD_DESTINACAO_FINAL", nullable: true, scale: 0 })
  codDestinacaoFinal: number | null;

  @Column("number", {
    name: "COD_CONTAGEM_PRAZO",
    scale: 0,
    default: () => "(0)",
  })
  codContagemPrazo: number;

  @Column("number", {
    name: "COD_CLASSIFICACAO",
    scale: 0,
    default: () => "(1)",
  })
  codClassificacao: number;

  @Column("number", { name: "COD_CHAVE_SICNET", nullable: true, scale: 0 })
  codChaveSicnet: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ASSUNTO_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codAssuntoSuperior: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO", scale: 0 })
  codAssunto: number;

  @Column("number", {
    name: "COD_AREA_MEIO_FIM",
    scale: 0,
    default: () => "(1)",
  })
  codAreaMeioFim: number;

  @Column("number", {
    name: "COD_AREA",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codArea: number | null;

  @Column("number", {
    name: "COD_ALTERAR_ACESSO_TIPO",
    scale: 0,
    default: () => "(1)",
  })
  codAlterarAcessoTipo: number;

  @Column("number", { name: "COD_ACESSO_TIPO", scale: 0, default: () => "(0)" })
  codAcessoTipo: number;

  @OneToMany(() => TblArquivo, (tblArquivo) => tblArquivo.codAssunto)
  tblArquivos: TblArquivo[];

  @ManyToMany(() => TblAtributo, (tblAtributo) => tblAtributo.tblAssuntos)
  @JoinTable({
    name: "TBL_ASSUNTO_ATRIBUTO",
    joinColumns: [{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }],
    inverseJoinColumns: [
      { name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" },
    ],
  })
  tblAtributos: TblAtributo[];

  @OneToMany(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) => tblAssuntoDocumentoTipo.codAssunto
  )
  tblAssuntoDocumentoTipos: TblAssuntoDocumentoTipo[];

  @OneToMany(
    () => TblAssuntoIndice,
    (tblAssuntoIndice) => tblAssuntoIndice.codAssunto2
  )
  tblAssuntoIndices: TblAssuntoIndice[];

  @ManyToMany(() => TblOrgao, (tblOrgao) => tblOrgao.tblAssuntos)
  @JoinTable({
    name: "TBL_ASSUNTO_ORGAO",
    joinColumns: [{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }],
    inverseJoinColumns: [
      { name: "COD_ORGAO", referencedColumnName: "codOrgao" },
    ],
  })
  tblOrgaos: TblOrgao[];

  @OneToMany(
    () => TblAssuntoPadrao,
    (tblAssuntoPadrao) => tblAssuntoPadrao.codAssunto2
  )
  tblAssuntoPadraos: TblAssuntoPadrao[];

  @OneToMany(() => TblCaixa, (tblCaixa) => tblCaixa.codAssunto)
  tblCaixas: TblCaixa[];

  @OneToMany(() => TblProtocolo, (tblProtocolo) => tblProtocolo.codAssunto2)
  tblProtocolos: TblProtocolo[];
}

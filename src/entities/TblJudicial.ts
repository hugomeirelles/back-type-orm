import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblJudicialSituacao } from "./TblJudicialSituacao";
import { TblJudicialArmazenar } from "./TblJudicialArmazenar";
import { TblAssuntoCnj } from "./TblAssuntoCnj";
import { TblJudicialAto } from "./TblJudicialAto";
import { TblJudicialComentario } from "./TblJudicialComentario";
import { TblJudicialDocumento } from "./TblJudicialDocumento";
import { TblJudicialEmpreendimento } from "./TblJudicialEmpreendimento";
import { TblJudicialMovimento } from "./TblJudicialMovimento";
import { TblJudicialNumero } from "./TblJudicialNumero";
import { TblJudicialParte } from "./TblJudicialParte";
import { TblSegUsuarioJudicial } from "./TblSegUsuarioJudicial";

@Index("PK_TBL_JUDICIAL", ["codJudicial"], { unique: true })
@Entity("TBL_JUDICIAL")
export class TblJudicial {
  @Column("varchar2", { name: "TXT_VARA", nullable: true, length: 100 })
  txtVara: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_REGISTRO",
    nullable: true,
    length: 50,
  })
  txtNumeroRegistro: string | null;

  @Column("varchar2", { name: "TXT_NUMERO_CNJ", nullable: true, length: 50 })
  txtNumeroCnj: string | null;

  @Column("varchar2", { name: "TXT_NUMERO_CLASSE", nullable: true, length: 50 })
  txtNumeroClasse: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", nullable: true, length: 50 })
  txtNumero: string | null;

  @Column("varchar2", { name: "TXT_LOCALIZACAO", nullable: true, length: 50 })
  txtLocalizacao: string | null;

  @Column("clob", { name: "TXT_ASSUNTO", nullable: true })
  txtAssunto: string | null;

  @Column("date", { name: "DT_DECISAO_URGENCIA", nullable: true })
  dtDecisaoUrgencia: Date | null;

  @Column("date", { name: "DT_DECISAO_DEFINITIVA", nullable: true })
  dtDecisaoDefinitiva: Date | null;

  @Column("date", { name: "DT_AUTUACAO", nullable: true })
  dtAutuacao: Date | null;

  @Column("number", { name: "COD_VARA", nullable: true, scale: 0 })
  codVara: number | null;

  @Column("number", {
    name: "COD_VALOR_TOTAL",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  codValorTotal: number | null;

  @Column("number", {
    name: "COD_VALOR_INEXISTENTE",
    scale: 0,
    default: () => "(0)",
  })
  codValorInexistente: number;

  @Column("number", {
    name: "COD_VALOR",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  codValor: number | null;

  @Column("number", { name: "COD_USUARIO_CONDUTOR", nullable: true, scale: 0 })
  codUsuarioCondutor: number | null;

  @Column("number", {
    name: "COD_TUTELA_URGENCIA_2GRAU",
    nullable: true,
    scale: 0,
  })
  codTutelaUrgencia_2Grau: number | null;

  @Column("number", {
    name: "COD_TUTELA_URGENCIA_1GRAU",
    nullable: true,
    scale: 0,
  })
  codTutelaUrgencia_1Grau: number | null;

  @Column("number", {
    name: "COD_TUTELA_URGENCIA_EXTRAORDI",
    nullable: true,
    scale: 0,
  })
  codTutelaUrgenciaExtraordi: number | null;

  @Column("number", { name: "COD_TUTELA_TIPO", nullable: true, scale: 0 })
  codTutelaTipo: number | null;

  @Column("number", {
    name: "COD_TUTELA_DEFINITIVA_2GRAU",
    nullable: true,
    scale: 0,
  })
  codTutelaDefinitiva_2Grau: number | null;

  @Column("number", {
    name: "COD_TUTELA_DEFINITIVA_1GRAU",
    nullable: true,
    scale: 0,
  })
  codTutelaDefinitiva_1Grau: number | null;

  @Column("number", {
    name: "COD_TUTELA_DEFINITIVA_EXTRAORD",
    nullable: true,
    scale: 0,
  })
  codTutelaDefinitivaExtraord: number | null;

  @Column("number", {
    name: "COD_SUSPENSAO_TUTELA_URGENCIA",
    nullable: true,
    scale: 0,
  })
  codSuspensaoTutelaUrgencia: number | null;

  @Column("number", { name: "COD_SUSPENSAO_ACORDAO", nullable: true, scale: 0 })
  codSuspensaoAcordao: number | null;

  @Column("number", {
    name: "COD_SUPERINTENDENCIA_INEXISTEN",
    nullable: true,
    scale: 0,
  })
  codSuperintendenciaInexisten: number | null;

  @Column("number", { name: "COD_ORGAO_JULGADOR", nullable: true, scale: 0 })
  codOrgaoJulgador: number | null;

  @Column("number", { name: "COD_ORGAO", nullable: true, scale: 0 })
  codOrgao: number | null;

  @Column("number", {
    name: "COD_LIMINAR_VIGOR",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codLiminarVigor: number | null;

  @Column("number", {
    name: "COD_JUDICIAL_SITUACAO_GERAL",
    scale: 0,
    default: () => "(1)",
  })
  codJudicialSituacaoGeral: number;

  @Column("number", {
    name: "COD_JUDICIAL_DECISAO_URGENCIA",
    nullable: true,
    scale: 0,
    default: () => "(1)",
  })
  codJudicialDecisaoUrgencia: number | null;

  @Column("number", {
    name: "COD_JUDICIAL_DECISAO_DEFINITIV",
    nullable: true,
    scale: 0,
    default: () => "(1)",
  })
  codJudicialDecisaoDefinitiv: number | null;

  @Column("number", {
    name: "COD_JUDICIAL_CLASSIFICACAO",
    nullable: true,
    scale: 0,
  })
  codJudicialClassificacao: number | null;

  @Column("number", { name: "COD_JUDICIAL_CLASSE", nullable: true, scale: 0 })
  codJudicialClasse: number | null;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { name: "COD_INDICE_REAJUSTE", nullable: true, scale: 0 })
  codIndiceReajuste: number | null;

  @Column("number", { name: "COD_EXECUTANTE", nullable: true, scale: 0 })
  codExecutante: number | null;

  @Column("number", {
    name: "COD_EMPREENDIMENTO_INEXISTENTE",
    scale: 0,
    default: () => "(0)",
  })
  codEmpreendimentoInexistente: number;

  @Column("number", {
    name: "COD_DECISAO_LIMINAR_FINAL",
    nullable: true,
    scale: 0,
  })
  codDecisaoLiminarFinal: number | null;

  @Column("number", {
    name: "COD_CADASTRO_SICAU",
    scale: 0,
    default: () => "(0)",
  })
  codCadastroSicau: number;

  @Column("number", {
    name: "COD_ATO_INEXISTENTE",
    scale: 0,
    default: () => "(0)",
  })
  codAtoInexistente: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblJudicialSituacao,
    (tblJudicialSituacao) => tblJudicialSituacao.tblJudicials
  )
  @JoinColumn([
    {
      name: "COD_JUDICIAL_SITUACAO",
      referencedColumnName: "codJudicialSituacao",
    },
  ])
  codJudicialSituacao: TblJudicialSituacao;

  @OneToMany(
    () => TblJudicialArmazenar,
    (tblJudicialArmazenar) => tblJudicialArmazenar.codJudicial2
  )
  tblJudicialArmazenars: TblJudicialArmazenar[];

  @ManyToMany(
    () => TblAssuntoCnj,
    (tblAssuntoCnj) => tblAssuntoCnj.tblJudicials
  )
  tblAssuntoCnjs: TblAssuntoCnj[];

  @OneToMany(
    () => TblJudicialAto,
    (tblJudicialAto) => tblJudicialAto.codJudicial2
  )
  tblJudicialAtoes: TblJudicialAto[];

  @OneToMany(
    () => TblJudicialComentario,
    (tblJudicialComentario) => tblJudicialComentario.codJudicial2
  )
  tblJudicialComentarios: TblJudicialComentario[];

  @OneToMany(
    () => TblJudicialDocumento,
    (tblJudicialDocumento) => tblJudicialDocumento.codJudicial2
  )
  tblJudicialDocumentos: TblJudicialDocumento[];

  @OneToMany(
    () => TblJudicialEmpreendimento,
    (tblJudicialEmpreendimento) => tblJudicialEmpreendimento.codJudicial2
  )
  tblJudicialEmpreendimentos: TblJudicialEmpreendimento[];

  @OneToMany(
    () => TblJudicialMovimento,
    (tblJudicialMovimento) => tblJudicialMovimento.codJudicial2
  )
  tblJudicialMovimentos: TblJudicialMovimento[];

  @OneToMany(
    () => TblJudicialNumero,
    (tblJudicialNumero) => tblJudicialNumero.codJudicial2
  )
  tblJudicialNumeros: TblJudicialNumero[];

  @OneToMany(
    () => TblJudicialParte,
    (tblJudicialParte) => tblJudicialParte.codJudicial
  )
  tblJudicialPartes: TblJudicialParte[];

  @OneToMany(
    () => TblSegUsuarioJudicial,
    (tblSegUsuarioJudicial) => tblSegUsuarioJudicial.codJudicial2
  )
  tblSegUsuarioJudicials: TblSegUsuarioJudicial[];
}

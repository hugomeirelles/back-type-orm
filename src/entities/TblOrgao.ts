import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblArquivoMovimento } from "./TblArquivoMovimento";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";
import { TblAssunto } from "./TblAssunto";
import { TblAtendimentoPosto } from "./TblAtendimentoPosto";
import { TblDespachoPadraoOrgao } from "./TblDespachoPadraoOrgao";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";
import { TblFluxoTrabalhoAtividade } from "./TblFluxoTrabalhoAtividade";
import { TblFluxoTrabalhoConfigura } from "./TblFluxoTrabalhoConfigura";
import { TblFluxoTrabalhoExecucao } from "./TblFluxoTrabalhoExecucao";
import { TblFluxoTrabAtivAnterior } from "./TblFluxoTrabAtivAnterior";
import { TblFluxoTrabDistribuicao } from "./TblFluxoTrabDistribuicao";
import { TblFluxoTrabObjFluxograma } from "./TblFluxoTrabObjFluxograma";
import { TblJudicialMovimento } from "./TblJudicialMovimento";
import { TblMinutaAcesso } from "./TblMinutaAcesso";
import { TblMinutaDistribuicao } from "./TblMinutaDistribuicao";
import { TblMinutaMovimento } from "./TblMinutaMovimento";
import { TblEstado } from "./TblEstado";
import { TblOrgaoTipo } from "./TblOrgaoTipo";
import { TblOrgaoAtributo } from "./TblOrgaoAtributo";
import { TblOrgaoAtributoDocumento } from "./TblOrgaoAtributoDocumento";
import { TblOrgaoSituacao } from "./TblOrgaoSituacao";
import { TblPendencia } from "./TblPendencia";
import { TblPendenciaUsuarioExterno } from "./TblPendenciaUsuarioExterno";
import { TblProtocoloAssinatura } from "./TblProtocoloAssinatura";
import { TblProtocoloCancelar } from "./TblProtocoloCancelar";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblProtocoloGuia } from "./TblProtocoloGuia";
import { TblProtocoloMovimento } from "./TblProtocoloMovimento";
import { TblProtocoloNumero } from "./TblProtocoloNumero";
import { TblProtocoloResponsavel } from "./TblProtocoloResponsavel";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblSegUsuarioPerfil } from "./TblSegUsuarioPerfil";
import { TblSegUsuarioPerfilFuncao } from "./TblSegUsuarioPerfilFuncao";

@Index("PK_TBL_ORGAO", ["codOrgao"], { unique: true })
@Entity("TBL_ORGAO")
export class TblOrgao {
  @Column("varchar2", {
    name: "TXT_SIGLA_IDENTIFICACAO",
    nullable: true,
    length: 60,
  })
  txtSiglaIdentificacao: string | null;

  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 60 })
  txtSigla: string | null;

  @Column("varchar2", {
    name: "TXT_ORGAO_PROTOCOLO",
    nullable: true,
    length: 20,
  })
  txtOrgaoProtocolo: string | null;

  @Column("varchar2", { name: "TXT_ORGAO", length: 255 })
  txtOrgao: string;

  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 255 })
  txtEndereco: string | null;

  @Column("varchar2", { name: "TXT_EMAIL", nullable: true, length: 100 })
  txtEmail: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 255 })
  txtDescricao: string;

  @Column("varchar2", { name: "TXT_CPROD", nullable: true, length: 6 })
  txtCprod: string | null;

  @Column("varchar2", { name: "TXT_CNPJ", nullable: true, length: 15 })
  txtCnpj: string | null;

  @Column("varchar2", { name: "TXT_CIDADE", nullable: true, length: 255 })
  txtCidade: string | null;

  @Column("varchar2", { name: "TXT_CEP", nullable: true, length: 10 })
  txtCep: string | null;

  @Column("number", {
    name: "COD_TRAMITACAO_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codTramitacaoSuperior: number;

  @Column("number", { name: "COD_TRAMITACAO", scale: 0, default: () => "(1)" })
  codTramitacao: number;

  @Column("number", {
    name: "COD_SIGLA_SUPERIOR",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codSiglaSuperior: number | null;

  @Column("number", {
    name: "COD_PROTOCOLIZADOR",
    scale: 0,
    default: () => "(0)",
  })
  codProtocolizador: number;

  @Column("number", {
    name: "COD_ORGAO_SUPERIOR_CIVICO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoSuperiorCivico: number | null;

  @Column("number", {
    name: "COD_ORGAO_SUPERIOR",
    scale: 0,
    default: () => "(1)",
  })
  codOrgaoSuperior: number;

  @Column("varchar2", { name: "COD_ORGAO_SIAPE", nullable: true, length: 9 })
  codOrgaoSiape: string | null;

  @Column("number", {
    name: "COD_ORGAO_CIVICO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoCivico: number | null;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", {
    name: "COD_NUMERACAO_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codNumeracaoSuperior: number;

  @Column("number", { name: "COD_INTERESSADO", nullable: true, scale: 0 })
  codInteressado: number | null;

  @Column("number", { name: "COD_EMPRESA", scale: 0, default: () => "(0)" })
  codEmpresa: number;

  @Column("number", {
    name: "COD_DISTRIBUICAO_TIPO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codDistribuicaoTipo: number | null;

  @Column("number", {
    name: "COD_DISTRIBUICAO_AUTO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codDistribuicaoAuto: number | null;

  @Column("number", {
    name: "COD_CONTROLE_PRAZO",
    scale: 0,
    default: () => "(0)",
  })
  codControlePrazo: number;

  @Column("number", {
    name: "COD_CONTROLAR_NUMERACAO",
    scale: 0,
    default: () => "(1)",
  })
  codControlarNumeracao: number;

  @Column("number", { name: "COD_CHAVE_SICNET", nullable: true, scale: 0 })
  codChaveSicnet: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ARQUIVO_CENTRAL",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codArquivoCentral: number | null;

  @OneToMany(
    () => TblArquivoMovimento,
    (tblArquivoMovimento) => tblArquivoMovimento.codOrgaoOrigem2
  )
  tblArquivoMovimentos: TblArquivoMovimento[];

  @OneToMany(
    () => TblArquivoMovimento,
    (tblArquivoMovimento) => tblArquivoMovimento.codOrgaoDestino2
  )
  tblArquivoMovimentos2: TblArquivoMovimento[];

  @OneToMany(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) => tblAssuntoDocumentoTipo.codOrgao
  )
  tblAssuntoDocumentoTipos: TblAssuntoDocumentoTipo[];

  @OneToMany(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) => tblAssuntoDocumentoTipo.codOrgaoGestor
  )
  tblAssuntoDocumentoTipos2: TblAssuntoDocumentoTipo[];

  @ManyToMany(() => TblAssunto, (tblAssunto) => tblAssunto.tblOrgaos)
  tblAssuntos: TblAssunto[];

  @OneToMany(
    () => TblAtendimentoPosto,
    (tblAtendimentoPosto) => tblAtendimentoPosto.codOrgao
  )
  tblAtendimentoPostos: TblAtendimentoPosto[];

  @OneToMany(
    () => TblDespachoPadraoOrgao,
    (tblDespachoPadraoOrgao) => tblDespachoPadraoOrgao.codOrgao
  )
  tblDespachoPadraoOrgaos: TblDespachoPadraoOrgao[];

  @ManyToMany(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblOrgaos
  )
  tblDossieConfiguracaos: TblDossieConfiguracao[];

  @OneToMany(
    () => TblFluxoTrabalhoAtividade,
    (tblFluxoTrabalhoAtividade) => tblFluxoTrabalhoAtividade.codOrgao
  )
  tblFluxoTrabalhoAtividades: TblFluxoTrabalhoAtividade[];

  @OneToMany(
    () => TblFluxoTrabalhoConfigura,
    (tblFluxoTrabalhoConfigura) => tblFluxoTrabalhoConfigura.codOrgao
  )
  tblFluxoTrabalhoConfiguras: TblFluxoTrabalhoConfigura[];

  @OneToMany(
    () => TblFluxoTrabalhoExecucao,
    (tblFluxoTrabalhoExecucao) => tblFluxoTrabalhoExecucao.codOrgaoAtual
  )
  tblFluxoTrabalhoExecucaos: TblFluxoTrabalhoExecucao[];

  @OneToMany(
    () => TblFluxoTrabalhoExecucao,
    (tblFluxoTrabalhoExecucao) => tblFluxoTrabalhoExecucao.codOrgaoCriacao
  )
  tblFluxoTrabalhoExecucaos2: TblFluxoTrabalhoExecucao[];

  @OneToMany(
    () => TblFluxoTrabAtivAnterior,
    (tblFluxoTrabAtivAnterior) => tblFluxoTrabAtivAnterior.codOrgaoAnterior
  )
  tblFluxoTrabAtivAnteriors: TblFluxoTrabAtivAnterior[];

  @OneToMany(
    () => TblFluxoTrabDistribuicao,
    (tblFluxoTrabDistribuicao) => tblFluxoTrabDistribuicao.codOrgao
  )
  tblFluxoTrabDistribuicaos: TblFluxoTrabDistribuicao[];

  @OneToMany(
    () => TblFluxoTrabObjFluxograma,
    (tblFluxoTrabObjFluxograma) => tblFluxoTrabObjFluxograma.codOrgao
  )
  tblFluxoTrabObjFluxogramas: TblFluxoTrabObjFluxograma[];

  @OneToMany(
    () => TblJudicialMovimento,
    (tblJudicialMovimento) => tblJudicialMovimento.codOrgao
  )
  tblJudicialMovimentos: TblJudicialMovimento[];

  @OneToMany(
    () => TblMinutaAcesso,
    (tblMinutaAcesso) => tblMinutaAcesso.codOrgao2
  )
  tblMinutaAcessos: TblMinutaAcesso[];

  @OneToMany(
    () => TblMinutaDistribuicao,
    (tblMinutaDistribuicao) => tblMinutaDistribuicao.codOrgao
  )
  tblMinutaDistribuicaos: TblMinutaDistribuicao[];

  @OneToMany(
    () => TblMinutaMovimento,
    (tblMinutaMovimento) => tblMinutaMovimento.codOrgaoOrigem
  )
  tblMinutaMovimentos: TblMinutaMovimento[];

  @OneToMany(
    () => TblMinutaMovimento,
    (tblMinutaMovimento) => tblMinutaMovimento.codOrgaoDestino
  )
  tblMinutaMovimentos2: TblMinutaMovimento[];

  @ManyToOne(() => TblEstado, (tblEstado) => tblEstado.tblOrgaos)
  @JoinColumn([{ name: "COD_ESTADO", referencedColumnName: "codEstado" }])
  codEstado: TblEstado;

  @ManyToOne(() => TblOrgaoTipo, (tblOrgaoTipo) => tblOrgaoTipo.tblOrgaos)
  @JoinColumn([
    { name: "COD_ORGAO_TIPO", referencedColumnName: "codOrgaoTipo" },
  ])
  codOrgaoTipo: TblOrgaoTipo;

  @OneToMany(
    () => TblOrgaoAtributo,
    (tblOrgaoAtributo) => tblOrgaoAtributo.codOrgao2
  )
  tblOrgaoAtributos: TblOrgaoAtributo[];

  @OneToMany(
    () => TblOrgaoAtributoDocumento,
    (tblOrgaoAtributoDocumento) => tblOrgaoAtributoDocumento.codOrgao2
  )
  tblOrgaoAtributoDocumentos: TblOrgaoAtributoDocumento[];

  @OneToMany(
    () => TblOrgaoSituacao,
    (tblOrgaoSituacao) => tblOrgaoSituacao.codOrgao2
  )
  tblOrgaoSituacaos: TblOrgaoSituacao[];

  @OneToMany(() => TblPendencia, (tblPendencia) => tblPendencia.codOrgao)
  tblPendencias: TblPendencia[];

  @OneToMany(
    () => TblPendenciaUsuarioExterno,
    (tblPendenciaUsuarioExterno) => tblPendenciaUsuarioExterno.codOrgao
  )
  tblPendenciaUsuarioExternos: TblPendenciaUsuarioExterno[];

  @OneToMany(
    () => TblProtocoloAssinatura,
    (tblProtocoloAssinatura) => tblProtocoloAssinatura.codOrgao
  )
  tblProtocoloAssinaturas: TblProtocoloAssinatura[];

  @OneToMany(
    () => TblProtocoloCancelar,
    (tblProtocoloCancelar) => tblProtocoloCancelar.codOrgao
  )
  tblProtocoloCancelars: TblProtocoloCancelar[];

  @OneToMany(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) => tblProtocoloDocumento.codOrgao
  )
  tblProtocoloDocumentos: TblProtocoloDocumento[];

  @OneToMany(
    () => TblProtocoloGuia,
    (tblProtocoloGuia) => tblProtocoloGuia.codOrgao2
  )
  tblProtocoloGuias: TblProtocoloGuia[];

  @OneToMany(
    () => TblProtocoloMovimento,
    (tblProtocoloMovimento) => tblProtocoloMovimento.codOrgaoOrigem2
  )
  tblProtocoloMovimentos: TblProtocoloMovimento[];

  @OneToMany(
    () => TblProtocoloMovimento,
    (tblProtocoloMovimento) => tblProtocoloMovimento.codOrgaoDestino2
  )
  tblProtocoloMovimentos2: TblProtocoloMovimento[];

  @OneToMany(
    () => TblProtocoloNumero,
    (tblProtocoloNumero) => tblProtocoloNumero.codOrgao2
  )
  tblProtocoloNumeros: TblProtocoloNumero[];

  @OneToMany(
    () => TblProtocoloResponsavel,
    (tblProtocoloResponsavel) => tblProtocoloResponsavel.codOrgaoAtribuidor
  )
  tblProtocoloResponsavels: TblProtocoloResponsavel[];

  @OneToMany(() => TblSegUsuario, (tblSegUsuario) => tblSegUsuario.codOrgao)
  tblSegUsuarios: TblSegUsuario[];

  @OneToMany(
    () => TblSegUsuarioPerfil,
    (tblSegUsuarioPerfil) => tblSegUsuarioPerfil.codOrgao2
  )
  tblSegUsuarioPerfils: TblSegUsuarioPerfil[];

  @OneToMany(
    () => TblSegUsuarioPerfilFuncao,
    (tblSegUsuarioPerfilFuncao) => tblSegUsuarioPerfilFuncao.codOrgao2
  )
  tblSegUsuarioPerfilFuncaos: TblSegUsuarioPerfilFuncao[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAcervoDocPalavraChave } from "./TblAcervoDocPalavraChave";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblAcervoDocumentoHistorico } from "./TblAcervoDocumentoHistorico";
import { TblArquivoComentario } from "./TblArquivoComentario";
import { TblArquivoDocumento } from "./TblArquivoDocumento";
import { TblArquivoEliminar } from "./TblArquivoEliminar";
import { TblAutorizacaoAcesso } from "./TblAutorizacaoAcesso";
import { TblCaixa } from "./TblCaixa";
import { TblCaixaComentario } from "./TblCaixaComentario";
import { TblEmprestimo } from "./TblEmprestimo";
import { TblEmprestimoArquivoDigital } from "./TblEmprestimoArquivoDigital";
import { TblEmprestimoComentario } from "./TblEmprestimoComentario";
import { TblEmprestimoDevolucao } from "./TblEmprestimoDevolucao";
import { TblEmprestimoProrrogacao } from "./TblEmprestimoProrrogacao";
import { TblFluxoTrabAcompanhamento } from "./TblFluxoTrabAcompanhamento";
import { TblFluxoTrabalhoAcao } from "./TblFluxoTrabalhoAcao";
import { TblFluxoTrabalhoAtividade } from "./TblFluxoTrabalhoAtividade";
import { TblFluxoTrabalhoComentario } from "./TblFluxoTrabalhoComentario";
import { TblFluxoTrabalhoExecucao } from "./TblFluxoTrabalhoExecucao";
import { TblFluxoTrabDistribuicao } from "./TblFluxoTrabDistribuicao";
import { TblJudicialArmazenar } from "./TblJudicialArmazenar";
import { TblJudicialComentario } from "./TblJudicialComentario";
import { TblJudicialDocumento } from "./TblJudicialDocumento";
import { TblJudicialGrupo } from "./TblJudicialGrupo";
import { TblJudicialNumero } from "./TblJudicialNumero";
import { TblMinuta } from "./TblMinuta";
import { TblMinutaArquivo } from "./TblMinutaArquivo";
import { TblMinutaAvaliacao } from "./TblMinutaAvaliacao";
import { TblMinutaDistribuicao } from "./TblMinutaDistribuicao";
import { TblPendencia } from "./TblPendencia";
import { TblPendenciaResposta } from "./TblPendenciaResposta";
import { TblPendenciaUsuarioExterno } from "./TblPendenciaUsuarioExterno";
import { TblProtocoloAnexo } from "./TblProtocoloAnexo";
import { TblProtocoloAnexoHistorico } from "./TblProtocoloAnexoHistorico";
import { TblProtocoloArmazenar } from "./TblProtocoloArmazenar";
import { TblProtocoloArquivo } from "./TblProtocoloArquivo";
import { TblProtocoloCancelar } from "./TblProtocoloCancelar";
import { TblProtocoloComentario } from "./TblProtocoloComentario";
import { TblProtocoloDistribuicao } from "./TblProtocoloDistribuicao";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblProtocoloEliminar } from "./TblProtocoloEliminar";
import { TblProtocoloEmprestimo } from "./TblProtocoloEmprestimo";
import { TblProtocoloExpedicao } from "./TblProtocoloExpedicao";
import { TblProtocoloInternet } from "./TblProtocoloInternet";
import { TblProtocoloMinuta } from "./TblProtocoloMinuta";
import { TblProtocoloMovimentoCancel } from "./TblProtocoloMovimentoCancel";
import { TblProtocoloParecer } from "./TblProtocoloParecer";
import { TblProtocoloProvidencia } from "./TblProtocoloProvidencia";
import { TblProtocoloReclassificacao } from "./TblProtocoloReclassificacao";
import { TblProtocoloResponsavel } from "./TblProtocoloResponsavel";
import { TblProtocoloVinculo } from "./TblProtocoloVinculo";
import { TblProtocoloVinculoHistor } from "./TblProtocoloVinculoHistor";
import { TblResponsavelAtividade } from "./TblResponsavelAtividade";
import { TblSegGrupoUsuario } from "./TblSegGrupoUsuario";
import { TblOrgao } from "./TblOrgao";
import { TblSegCargo } from "./TblSegCargo";
import { TblEmpresa } from "./TblEmpresa";
import { TblInteressado } from "./TblInteressado";
import { TblSegAplicacao } from "./TblSegAplicacao";
import { TblSegUsuarioAtributo } from "./TblSegUsuarioAtributo";
import { TblSegUsuarioConfiguracao } from "./TblSegUsuarioConfiguracao";
import { TblDocumentoTipo } from "./TblDocumentoTipo";
import { TblSegUsuarioFavorito } from "./TblSegUsuarioFavorito";
import { TblSegGrupo } from "./TblSegGrupo";
import { TblSegUsuarioJudicial } from "./TblSegUsuarioJudicial";
import { TblSegUsuarioMenu } from "./TblSegUsuarioMenu";
import { TblSegUsuarioPerfil } from "./TblSegUsuarioPerfil";
import { TblSegUsuarioPerfilFuncao } from "./TblSegUsuarioPerfilFuncao";
import { TblSegUsuarioProtocolo } from "./TblSegUsuarioProtocolo";
import { TblSistemaRelatorio } from "./TblSistemaRelatorio";
import { TblSegUsuarioSenha } from "./TblSegUsuarioSenha";
import { TblSolicitacao } from "./TblSolicitacao";
import { TblTarefaDocumento } from "./TblTarefaDocumento";

@Index("IX_SU_COD_INTERESSADO", ["codInteressado"], {})
@Index("IX_SU_TXT_LOGIN", ["txtLogin"], {})
@Index("PK_TBL_SEG_USUARIO", ["codUsuario"], { unique: true })
@Entity("TBL_SEG_USUARIO")
export class TblSegUsuario {
  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", {
    name: "COD_SENHA_INCORRETA",
    scale: 0,
    default: () => "(0)",
  })
  codSenhaIncorreta: number;

  @Column("number", { name: "COD_INTERESSADO" })
  codInteressado: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ALTERAR_SENHA",
    scale: 0,
    default: () => "(1)",
  })
  codAlterarSenha: number;

  @Column("varchar2", { name: "TXT_SENHA", length: 64 })
  txtSenha: string;

  @Column("varchar2", { name: "TXT_NOME", nullable: true, length: 100 })
  txtNome: string | null;

  @Column("varchar2", { name: "TXT_LOGIN_CIVICO", nullable: true, length: 50 })
  txtLoginCivico: string | null;

  @Column("varchar2", { name: "TXT_LOGIN", nullable: true, length: 255 })
  txtLogin: string | null;

  @Column("varchar2", { name: "TXT_EMAIL", nullable: true, length: 100 })
  txtEmail: string | null;

  @Column("varchar2", { name: "TXT_CERTIFICADO", nullable: true, length: 50 })
  txtCertificado: string | null;

  @Column("date", { name: "DT_SENHA", default: () => "sysdate" })
  dtSenha: Date;

  @Column("date", { name: "DT_CADASTRO", default: () => "sysdate" })
  dtCadastro: Date;

  @Column("number", {
    name: "COD_USUARIO_CIVICO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codUsuarioCivico: number | null;

  @OneToMany(
    () => TblAcervoDocPalavraChave,
    (tblAcervoDocPalavraChave) => tblAcervoDocPalavraChave.codUsuario
  )
  tblAcervoDocPalavraChaves: TblAcervoDocPalavraChave[];

  @OneToMany(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.codUsuario
  )
  tblAcervoDocumentos: TblAcervoDocumento[];

  @OneToMany(
    () => TblAcervoDocumentoHistorico,
    (tblAcervoDocumentoHistorico) => tblAcervoDocumentoHistorico.codUsuario
  )
  tblAcervoDocumentoHistoricos: TblAcervoDocumentoHistorico[];

  @OneToMany(
    () => TblArquivoComentario,
    (tblArquivoComentario) => tblArquivoComentario.codUsuario
  )
  tblArquivoComentarios: TblArquivoComentario[];

  @OneToMany(
    () => TblArquivoDocumento,
    (tblArquivoDocumento) => tblArquivoDocumento.codUsuario
  )
  tblArquivoDocumentos: TblArquivoDocumento[];

  @OneToMany(
    () => TblArquivoEliminar,
    (tblArquivoEliminar) => tblArquivoEliminar.codUsuario
  )
  tblArquivoEliminars: TblArquivoEliminar[];

  @OneToMany(
    () => TblAutorizacaoAcesso,
    (tblAutorizacaoAcesso) => tblAutorizacaoAcesso.codUsuarioConcessao
  )
  tblAutorizacaoAcessos: TblAutorizacaoAcesso[];

  @OneToMany(
    () => TblAutorizacaoAcesso,
    (tblAutorizacaoAcesso) => tblAutorizacaoAcesso.codUsuarioRevogacao
  )
  tblAutorizacaoAcessos2: TblAutorizacaoAcesso[];

  @OneToMany(() => TblCaixa, (tblCaixa) => tblCaixa.codUsuario)
  tblCaixas: TblCaixa[];

  @OneToMany(
    () => TblCaixaComentario,
    (tblCaixaComentario) => tblCaixaComentario.codUsuario
  )
  tblCaixaComentarios: TblCaixaComentario[];

  @OneToMany(() => TblEmprestimo, (tblEmprestimo) => tblEmprestimo.codUsuario)
  tblEmprestimos: TblEmprestimo[];

  @OneToMany(
    () => TblEmprestimoArquivoDigital,
    (tblEmprestimoArquivoDigital) => tblEmprestimoArquivoDigital.codUsuario
  )
  tblEmprestimoArquivoDigitals: TblEmprestimoArquivoDigital[];

  @OneToMany(
    () => TblEmprestimoComentario,
    (tblEmprestimoComentario) => tblEmprestimoComentario.codUsuario
  )
  tblEmprestimoComentarios: TblEmprestimoComentario[];

  @OneToMany(
    () => TblEmprestimoDevolucao,
    (tblEmprestimoDevolucao) => tblEmprestimoDevolucao.codUsuario
  )
  tblEmprestimoDevolucaos: TblEmprestimoDevolucao[];

  @OneToMany(
    () => TblEmprestimoProrrogacao,
    (tblEmprestimoProrrogacao) => tblEmprestimoProrrogacao.codUsuarioSolicitante
  )
  tblEmprestimoProrrogacaos: TblEmprestimoProrrogacao[];

  @OneToMany(
    () => TblEmprestimoProrrogacao,
    (tblEmprestimoProrrogacao) => tblEmprestimoProrrogacao.codUsuarioAutorizador
  )
  tblEmprestimoProrrogacaos2: TblEmprestimoProrrogacao[];

  @OneToMany(
    () => TblFluxoTrabAcompanhamento,
    (tblFluxoTrabAcompanhamento) => tblFluxoTrabAcompanhamento.codUsuario
  )
  tblFluxoTrabAcompanhamentos: TblFluxoTrabAcompanhamento[];

  @OneToMany(
    () => TblFluxoTrabalhoAcao,
    (tblFluxoTrabalhoAcao) => tblFluxoTrabalhoAcao.codUsuario
  )
  tblFluxoTrabalhoAcaos: TblFluxoTrabalhoAcao[];

  @OneToMany(
    () => TblFluxoTrabalhoAtividade,
    (tblFluxoTrabalhoAtividade) => tblFluxoTrabalhoAtividade.codUsuario
  )
  tblFluxoTrabalhoAtividades: TblFluxoTrabalhoAtividade[];

  @OneToMany(
    () => TblFluxoTrabalhoComentario,
    (tblFluxoTrabalhoComentario) => tblFluxoTrabalhoComentario.codUsuario
  )
  tblFluxoTrabalhoComentarios: TblFluxoTrabalhoComentario[];

  @OneToMany(
    () => TblFluxoTrabalhoExecucao,
    (tblFluxoTrabalhoExecucao) => tblFluxoTrabalhoExecucao.codUsuarioCriacao
  )
  tblFluxoTrabalhoExecucaos: TblFluxoTrabalhoExecucao[];

  @OneToMany(
    () => TblFluxoTrabDistribuicao,
    (tblFluxoTrabDistribuicao) => tblFluxoTrabDistribuicao.codUsuario
  )
  tblFluxoTrabDistribuicaos: TblFluxoTrabDistribuicao[];

  @OneToMany(
    () => TblFluxoTrabDistribuicao,
    (tblFluxoTrabDistribuicao) => tblFluxoTrabDistribuicao.codUsuarioResponsavel
  )
  tblFluxoTrabDistribuicaos2: TblFluxoTrabDistribuicao[];

  @OneToMany(
    () => TblJudicialArmazenar,
    (tblJudicialArmazenar) => tblJudicialArmazenar.codUsuario
  )
  tblJudicialArmazenars: TblJudicialArmazenar[];

  @OneToMany(
    () => TblJudicialComentario,
    (tblJudicialComentario) => tblJudicialComentario.codUsuario
  )
  tblJudicialComentarios: TblJudicialComentario[];

  @OneToMany(
    () => TblJudicialDocumento,
    (tblJudicialDocumento) => tblJudicialDocumento.codUsuario
  )
  tblJudicialDocumentos: TblJudicialDocumento[];

  @ManyToMany(
    () => TblJudicialGrupo,
    (tblJudicialGrupo) => tblJudicialGrupo.tblSegUsuarios
  )
  tblJudicialGrupos: TblJudicialGrupo[];

  @OneToMany(
    () => TblJudicialNumero,
    (tblJudicialNumero) => tblJudicialNumero.codUsuario
  )
  tblJudicialNumeros: TblJudicialNumero[];

  @OneToMany(() => TblMinuta, (tblMinuta) => tblMinuta.codUsuario)
  tblMinutas: TblMinuta[];

  @OneToMany(
    () => TblMinutaArquivo,
    (tblMinutaArquivo) => tblMinutaArquivo.codUsuario
  )
  tblMinutaArquivos: TblMinutaArquivo[];

  @OneToMany(
    () => TblMinutaAvaliacao,
    (tblMinutaAvaliacao) => tblMinutaAvaliacao.codUsuarioSolicitante
  )
  tblMinutaAvaliacaos: TblMinutaAvaliacao[];

  @OneToMany(
    () => TblMinutaDistribuicao,
    (tblMinutaDistribuicao) => tblMinutaDistribuicao.codUsuarioRecebedor
  )
  tblMinutaDistribuicaos: TblMinutaDistribuicao[];

  @OneToMany(
    () => TblMinutaDistribuicao,
    (tblMinutaDistribuicao) => tblMinutaDistribuicao.codUsuarioDistribuidor
  )
  tblMinutaDistribuicaos2: TblMinutaDistribuicao[];

  @OneToMany(() => TblPendencia, (tblPendencia) => tblPendencia.codUsuario)
  tblPendencias: TblPendencia[];

  @OneToMany(
    () => TblPendenciaResposta,
    (tblPendenciaResposta) => tblPendenciaResposta.codUsuarioResposta
  )
  tblPendenciaRespostas: TblPendenciaResposta[];

  @OneToMany(
    () => TblPendenciaResposta,
    (tblPendenciaResposta) => tblPendenciaResposta.codUsuarioAnalise
  )
  tblPendenciaRespostas2: TblPendenciaResposta[];

  @OneToMany(
    () => TblPendenciaUsuarioExterno,
    (tblPendenciaUsuarioExterno) => tblPendenciaUsuarioExterno.codUsuario
  )
  tblPendenciaUsuarioExternos: TblPendenciaUsuarioExterno[];

  @OneToMany(
    () => TblProtocoloAnexo,
    (tblProtocoloAnexo) => tblProtocoloAnexo.codUsuarioApensar
  )
  tblProtocoloAnexos: TblProtocoloAnexo[];

  @OneToMany(
    () => TblProtocoloAnexo,
    (tblProtocoloAnexo) => tblProtocoloAnexo.codUsuarioDesapensar
  )
  tblProtocoloAnexos2: TblProtocoloAnexo[];

  @OneToMany(
    () => TblProtocoloAnexoHistorico,
    (tblProtocoloAnexoHistorico) =>
      tblProtocoloAnexoHistorico.codUsuarioDesapensar
  )
  tblProtocoloAnexoHistoricos: TblProtocoloAnexoHistorico[];

  @OneToMany(
    () => TblProtocoloAnexoHistorico,
    (tblProtocoloAnexoHistorico) => tblProtocoloAnexoHistorico.codUsuarioApensar
  )
  tblProtocoloAnexoHistoricos2: TblProtocoloAnexoHistorico[];

  @OneToMany(
    () => TblProtocoloArmazenar,
    (tblProtocoloArmazenar) => tblProtocoloArmazenar.codUsuario
  )
  tblProtocoloArmazenars: TblProtocoloArmazenar[];

  @OneToMany(
    () => TblProtocoloArquivo,
    (tblProtocoloArquivo) => tblProtocoloArquivo.codUsuario
  )
  tblProtocoloArquivos: TblProtocoloArquivo[];

  @OneToMany(
    () => TblProtocoloCancelar,
    (tblProtocoloCancelar) => tblProtocoloCancelar.codUsuario
  )
  tblProtocoloCancelars: TblProtocoloCancelar[];

  @OneToMany(
    () => TblProtocoloComentario,
    (tblProtocoloComentario) => tblProtocoloComentario.codUsuario
  )
  tblProtocoloComentarios: TblProtocoloComentario[];

  @OneToMany(
    () => TblProtocoloDistribuicao,
    (tblProtocoloDistribuicao) =>
      tblProtocoloDistribuicao.codUsuarioDistribuidor
  )
  tblProtocoloDistribuicaos: TblProtocoloDistribuicao[];

  @OneToMany(
    () => TblProtocoloDistribuicao,
    (tblProtocoloDistribuicao) => tblProtocoloDistribuicao.codUsuarioRecebedor
  )
  tblProtocoloDistribuicaos2: TblProtocoloDistribuicao[];

  @OneToMany(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) => tblProtocoloDocumento.codUsuario
  )
  tblProtocoloDocumentos: TblProtocoloDocumento[];

  @OneToMany(
    () => TblProtocoloEliminar,
    (tblProtocoloEliminar) => tblProtocoloEliminar.codUsuario
  )
  tblProtocoloEliminars: TblProtocoloEliminar[];

  @OneToMany(
    () => TblProtocoloEmprestimo,
    (tblProtocoloEmprestimo) => tblProtocoloEmprestimo.codUsuario
  )
  tblProtocoloEmprestimos: TblProtocoloEmprestimo[];

  @OneToMany(
    () => TblProtocoloExpedicao,
    (tblProtocoloExpedicao) => tblProtocoloExpedicao.codUsuario
  )
  tblProtocoloExpedicaos: TblProtocoloExpedicao[];

  @OneToMany(
    () => TblProtocoloInternet,
    (tblProtocoloInternet) => tblProtocoloInternet.codUsuario
  )
  tblProtocoloInternets: TblProtocoloInternet[];

  @OneToMany(
    () => TblProtocoloMinuta,
    (tblProtocoloMinuta) => tblProtocoloMinuta.codUsuario
  )
  tblProtocoloMinutas: TblProtocoloMinuta[];

  @OneToMany(
    () => TblProtocoloMovimentoCancel,
    (tblProtocoloMovimentoCancel) => tblProtocoloMovimentoCancel.codUsuario2
  )
  tblProtocoloMovimentoCancels: TblProtocoloMovimentoCancel[];

  @OneToMany(
    () => TblProtocoloParecer,
    (tblProtocoloParecer) => tblProtocoloParecer.codUsuario
  )
  tblProtocoloParecers: TblProtocoloParecer[];

  @OneToMany(
    () => TblProtocoloProvidencia,
    (tblProtocoloProvidencia) => tblProtocoloProvidencia.codUsuario
  )
  tblProtocoloProvidencias: TblProtocoloProvidencia[];

  @OneToMany(
    () => TblProtocoloReclassificacao,
    (tblProtocoloReclassificacao) => tblProtocoloReclassificacao.codUsuario
  )
  tblProtocoloReclassificacaos: TblProtocoloReclassificacao[];

  @OneToMany(
    () => TblProtocoloResponsavel,
    (tblProtocoloResponsavel) => tblProtocoloResponsavel.codUsuarioResponsavel
  )
  tblProtocoloResponsavels: TblProtocoloResponsavel[];

  @OneToMany(
    () => TblProtocoloResponsavel,
    (tblProtocoloResponsavel) => tblProtocoloResponsavel.codUsuarioAtribuidor
  )
  tblProtocoloResponsavels2: TblProtocoloResponsavel[];

  @OneToMany(
    () => TblProtocoloVinculo,
    (tblProtocoloVinculo) => tblProtocoloVinculo.codUsuarioDesvincular
  )
  tblProtocoloVinculos: TblProtocoloVinculo[];

  @OneToMany(
    () => TblProtocoloVinculo,
    (tblProtocoloVinculo) => tblProtocoloVinculo.codUsuarioVincular
  )
  tblProtocoloVinculos2: TblProtocoloVinculo[];

  @OneToMany(
    () => TblProtocoloVinculoHistor,
    (tblProtocoloVinculoHistor) => tblProtocoloVinculoHistor.codUsuarioVincular
  )
  tblProtocoloVinculoHistors: TblProtocoloVinculoHistor[];

  @OneToMany(
    () => TblProtocoloVinculoHistor,
    (tblProtocoloVinculoHistor) =>
      tblProtocoloVinculoHistor.codUsuarioDesvincular
  )
  tblProtocoloVinculoHistors2: TblProtocoloVinculoHistor[];

  @OneToMany(
    () => TblResponsavelAtividade,
    (tblResponsavelAtividade) => tblResponsavelAtividade.codUsuario
  )
  tblResponsavelAtividades: TblResponsavelAtividade[];

  @OneToMany(
    () => TblSegGrupoUsuario,
    (tblSegGrupoUsuario) => tblSegGrupoUsuario.codUsuario2
  )
  tblSegGrupoUsuarios: TblSegGrupoUsuario[];

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblSegUsuarios)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(() => TblSegCargo, (tblSegCargo) => tblSegCargo.tblSegUsuarios)
  @JoinColumn([{ name: "COD_CARGO", referencedColumnName: "codCargo" }])
  codCargo: TblSegCargo;

  @ManyToOne(() => TblEmpresa, (tblEmpresa) => tblEmpresa.tblSegUsuarios)
  @JoinColumn([{ name: "COD_EMPRESA", referencedColumnName: "codEmpresa" }])
  codEmpresa: TblEmpresa;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblSegUsuarios
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado2: TblInteressado;

  @ManyToMany(
    () => TblSegAplicacao,
    (tblSegAplicacao) => tblSegAplicacao.tblSegUsuarios
  )
  tblSegAplicacaos: TblSegAplicacao[];

  @OneToMany(
    () => TblSegUsuarioAtributo,
    (tblSegUsuarioAtributo) => tblSegUsuarioAtributo.codUsuario
  )
  tblSegUsuarioAtributos: TblSegUsuarioAtributo[];

  @OneToMany(
    () => TblSegUsuarioConfiguracao,
    (tblSegUsuarioConfiguracao) => tblSegUsuarioConfiguracao.codUsuario2
  )
  tblSegUsuarioConfiguracaos: TblSegUsuarioConfiguracao[];

  @ManyToMany(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblSegUsuarios
  )
  tblDocumentoTipos: TblDocumentoTipo[];

  @OneToMany(
    () => TblSegUsuarioFavorito,
    (tblSegUsuarioFavorito) => tblSegUsuarioFavorito.codUsuario2
  )
  tblSegUsuarioFavoritos: TblSegUsuarioFavorito[];

  @ManyToMany(() => TblSegGrupo, (tblSegGrupo) => tblSegGrupo.tblSegUsuarios)
  tblSegGrupos: TblSegGrupo[];

  @OneToMany(
    () => TblSegUsuarioJudicial,
    (tblSegUsuarioJudicial) => tblSegUsuarioJudicial.codUsuario2
  )
  tblSegUsuarioJudicials: TblSegUsuarioJudicial[];

  @OneToMany(
    () => TblSegUsuarioMenu,
    (tblSegUsuarioMenu) => tblSegUsuarioMenu.codUsuario2
  )
  tblSegUsuarioMenus: TblSegUsuarioMenu[];

  @OneToMany(
    () => TblSegUsuarioPerfil,
    (tblSegUsuarioPerfil) => tblSegUsuarioPerfil.codUsuario2
  )
  tblSegUsuarioPerfils: TblSegUsuarioPerfil[];

  @OneToMany(
    () => TblSegUsuarioPerfilFuncao,
    (tblSegUsuarioPerfilFuncao) => tblSegUsuarioPerfilFuncao.codUsuario2
  )
  tblSegUsuarioPerfilFuncaos: TblSegUsuarioPerfilFuncao[];

  @OneToMany(
    () => TblSegUsuarioProtocolo,
    (tblSegUsuarioProtocolo) => tblSegUsuarioProtocolo.codUsuario2
  )
  tblSegUsuarioProtocolos: TblSegUsuarioProtocolo[];

  @ManyToMany(
    () => TblSistemaRelatorio,
    (tblSistemaRelatorio) => tblSistemaRelatorio.tblSegUsuarios
  )
  tblSistemaRelatorios: TblSistemaRelatorio[];

  @OneToMany(
    () => TblSegUsuarioSenha,
    (tblSegUsuarioSenha) => tblSegUsuarioSenha.codUsuario2
  )
  tblSegUsuarioSenhas: TblSegUsuarioSenha[];

  @OneToMany(
    () => TblSolicitacao,
    (tblSolicitacao) => tblSolicitacao.codUsuario
  )
  tblSolicitacaos: TblSolicitacao[];

  @OneToMany(
    () => TblTarefaDocumento,
    (tblTarefaDocumento) => tblTarefaDocumento.codUsuario
  )
  tblTarefaDocumentos: TblTarefaDocumento[];
}

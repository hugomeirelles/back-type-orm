import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAcervoDocumentoPessoa } from "./TblAcervoDocumentoPessoa";
import { TblAgendamentoHorario } from "./TblAgendamentoHorario";
import { TblDocumentoAssinatura } from "./TblDocumentoAssinatura";
import { TblEstadoCivil } from "./TblEstadoCivil";
import { TblPais } from "./TblPais";
import { TblEstado } from "./TblEstado";
import { TblOcupacaoBrasileira } from "./TblOcupacaoBrasileira";
import { TblTipoRelacionamentoFiscal } from "./TblTipoRelacionamentoFiscal";
import { TblBairro } from "./TblBairro";
import { TblBanco } from "./TblBanco";
import { TblRegistroProfissional } from "./TblRegistroProfissional";
import { TblInteressadoDocAssinatura } from "./TblInteressadoDocAssinatura";
import { TblInteressadoDocumento } from "./TblInteressadoDocumento";
import { TblInteressadoProcuracao } from "./TblInteressadoProcuracao";
import { TblRelacionamentoTipo } from "./TblRelacionamentoTipo";
import { TblInteressadoVinculoEmpre } from "./TblInteressadoVinculoEmpre";
import { TblMinutaInteressado } from "./TblMinutaInteressado";
import { TblMinutaRemetente } from "./TblMinutaRemetente";
import { TblNotificacao } from "./TblNotificacao";
import { TblPendenciaUsuarioExterno } from "./TblPendenciaUsuarioExterno";
import { TblPendRespArqDefiAssin } from "./TblPendRespArqDefiAssin";
import { TblPendRespArquivoAssi } from "./TblPendRespArquivoAssi";
import { TblProtocoloAssinatura } from "./TblProtocoloAssinatura";
import { TblProtocoloInteressado } from "./TblProtocoloInteressado";
import { TblProtocoloInteressadoHist } from "./TblProtocoloInteressadoHist";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";
import { TblQuadroSocietario } from "./TblQuadroSocietario";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";

@Index("IX_TXT_INTERESSADO", ["txtInteressado"], {})
@Index("PK_TBL_PROTOCOLO_INTERESSADO_1", ["codInteressado"], { unique: true })
@Index("UQ_INTERESSADO_01", ["txtCnpjCpf"], { unique: true })
@Entity("TBL_INTERESSADO")
export class TblInteressado {
  @Column("varchar2", {
    name: "TXT_ZONA_ELEITORAL",
    nullable: true,
    length: 50,
  })
  txtZonaEleitoral: string | null;

  @Column("varchar2", {
    name: "TXT_TITULO_ELEITORAL",
    nullable: true,
    length: 50,
  })
  txtTituloEleitoral: string | null;

  @Column("varchar2", {
    name: "TXT_TIPO_LOGRADOURO",
    nullable: true,
    length: 255,
  })
  txtTipoLogradouro: string | null;

  @Column("varchar2", { name: "TXT_TELEFONE3", nullable: true, length: 50 })
  txtTelefone3: string | null;

  @Column("varchar2", { name: "TXT_TELEFONE2", nullable: true, length: 50 })
  txtTelefone2: string | null;

  @Column("varchar2", { name: "TXT_TELEFONE1", nullable: true, length: 50 })
  txtTelefone1: string | null;

  @Column("varchar2", { name: "TXT_SITE", nullable: true, length: 100 })
  txtSite: string | null;

  @Column("varchar2", {
    name: "TXT_SECAO_ELEITORAL",
    nullable: true,
    length: 50,
  })
  txtSecaoEleitoral: string | null;

  @Column("varchar2", { name: "TXT_RESPONSAVEL", nullable: true, length: 255 })
  txtResponsavel: string | null;

  @Column("varchar2", {
    name: "TXT_REPRESENTANTE_LEGAL_CPF",
    nullable: true,
    length: 100,
  })
  txtRepresentanteLegalCpf: string | null;

  @Column("varchar2", {
    name: "TXT_REPRESENTANTE_LEGAL",
    nullable: true,
    length: 255,
  })
  txtRepresentanteLegal: string | null;

  @Column("varchar2", {
    name: "TXT_REGISTRO_PROFISSIONAL",
    nullable: true,
    length: 250,
  })
  txtRegistroProfissional: string | null;

  @Column("varchar2", { name: "TXT_PIS_PASEP", nullable: true, length: 50 })
  txtPisPasep: string | null;

  @Column("varchar2", {
    name: "TXT_ORGAO_EXPEDI_ESTRANGEIRO",
    nullable: true,
    length: 100,
  })
  txtOrgaoExpediEstrangeiro: string | null;

  @Column("varchar2", {
    name: "TXT_ORGAO_EXPEDIDOR",
    nullable: true,
    length: 255,
  })
  txtOrgaoExpedidor: string | null;

  @Column("varchar2", { name: "TXT_ORGAO", nullable: true, length: 255 })
  txtOrgao: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_ENDERECO_CORREIO",
    nullable: true,
    length: 10,
  })
  txtNumeroEnderecoCorreio: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", nullable: true, length: 10 })
  txtNumero: string | null;

  @Column("varchar2", { name: "TXT_NOME_SOCIAL", nullable: true, length: 255 })
  txtNomeSocial: string | null;

  @Column("varchar2", { name: "TXT_NOME_PAI", nullable: true, length: 255 })
  txtNomePai: string | null;

  @Column("varchar2", { name: "TXT_NOME_MAE", nullable: true, length: 250 })
  txtNomeMae: string | null;

  @Column("varchar2", {
    name: "TXT_NOME_FANTASIA",
    nullable: true,
    length: 255,
  })
  txtNomeFantasia: string | null;

  @Column("varchar2", { name: "TXT_NATURALIDADE", nullable: true, length: 100 })
  txtNaturalidade: string | null;

  @Column("varchar2", { name: "TXT_INTERESSADO", length: 255 })
  txtInteressado: string;

  @Column("varchar2", {
    name: "TXT_INSCRICAO_MUNICIPAL",
    nullable: true,
    length: 50,
  })
  txtInscricaoMunicipal: string | null;

  @Column("varchar2", {
    name: "TXT_INSCRICAO_ESTADUAL",
    nullable: true,
    length: 50,
  })
  txtInscricaoEstadual: string | null;

  @Column("varchar2", { name: "TXT_IE_RG", nullable: true, length: 255 })
  txtIeRg: string | null;

  @Column("varchar2", {
    name: "TXT_IDENTIFICA_ENDE_CORREIO",
    nullable: true,
    length: 6,
  })
  txtIdentificaEndeCorreio: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 255 })
  txtEndereco: string | null;

  @Column("varchar2", { name: "TXT_EMAIL", nullable: true, length: 100 })
  txtEmail: string | null;

  @Column("varchar2", {
    name: "TXT_CONTA_BANCARIA",
    nullable: true,
    length: 20,
  })
  txtContaBancaria: string | null;

  @Column("varchar2", { name: "TXT_COMPLEMENTO", nullable: true, length: 255 })
  txtComplemento: string | null;

  @Column("varchar2", { name: "TXT_CNS", nullable: true, length: 50 })
  txtCns: string | null;

  @Column("varchar2", {
    name: "TXT_CNPJ_CPF",
    nullable: true,
    unique: true,
    length: 14,
  })
  txtCnpjCpf: string | null;

  @Column("varchar2", { name: "TXT_CNH", nullable: true, length: 50 })
  txtCnh: string | null;

  @Column("varchar2", { name: "TXT_CIDADE", nullable: true, length: 255 })
  txtCidade: string | null;

  @Column("varchar2", { name: "TXT_CEP", nullable: true, length: 40 })
  txtCep: string | null;

  @Column("varchar2", {
    name: "TXT_CARTEIRA_ESTRANGEIRO",
    nullable: true,
    length: 100,
  })
  txtCarteiraEstrangeiro: string | null;

  @Column("varchar2", { name: "TXT_CARGO", nullable: true, length: 100 })
  txtCargo: string | null;

  @Column("varchar2", { name: "TXT_BAIRRO", nullable: true, length: 255 })
  txtBairro: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_FOTO_SERVIDOR",
    nullable: true,
    length: 255,
  })
  txtArquivoFotoServidor: string | null;

  @Column("varchar2", {
    name: "TXT_AGENCIA_BANCARIA",
    nullable: true,
    length: 10,
  })
  txtAgenciaBancaria: string | null;

  @Column("date", { name: "DT_NASCIMENTO", nullable: true })
  dtNascimento: Date | null;

  @Column("date", { name: "DT_FALECIMENTO", nullable: true })
  dtFalecimento: Date | null;

  @Column("date", { name: "DT_EXPEDICAO_RG", nullable: true })
  dtExpedicaoRg: Date | null;

  @Column("date", { name: "DT_CHEGADA_BRASIL", nullable: true })
  dtChegadaBrasil: Date | null;

  @Column("date", { name: "DT_CADASTRO", nullable: true })
  dtCadastro: Date | null;

  @Column("date", { name: "DT_BLOQUEIO_AGENDAMENTO", nullable: true })
  dtBloqueioAgendamento: Date | null;

  @Column("date", { name: "DT_ATUALIZACAO", nullable: true })
  dtAtualizacao: Date | null;

  @Column("number", { name: "COD_VALIDADO" })
  codValidado: number;

  @Column("varchar2", {
    name: "COD_SEXO_REPRESENTANTE_LEGAL",
    nullable: true,
    length: 100,
  })
  codSexoRepresentanteLegal: string | null;

  @Column("number", { name: "COD_SEXO", nullable: true })
  codSexo: number | null;

  @Column("number", {
    name: "COD_QUANTIDADE_NAO_COMPARECIDO",
    precision: 1,
    scale: 0,
    default: () => "(0)",
  })
  codQuantidadeNaoComparecido: number;

  @Column("number", { name: "COD_PESSOA_TIPO", scale: 0, default: () => "0" })
  codPessoaTipo: number;

  @Column("number", { name: "COD_NATURALIZADO", nullable: true })
  codNaturalizado: number | null;

  @Column("varchar2", {
    name: "COD_MUNICIPIO_IBGE",
    nullable: true,
    length: 100,
  })
  codMunicipioIbge: string | null;

  @Column("number", { primary: true, name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @Column("number", {
    name: "COD_BLOQUEIO_AGENDAMENTO",
    precision: 1,
    scale: 0,
    default: () => "(0)",
  })
  codBloqueioAgendamento: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblAcervoDocumentoPessoa,
    (tblAcervoDocumentoPessoa) => tblAcervoDocumentoPessoa.codInteressado2
  )
  tblAcervoDocumentoPessoas: TblAcervoDocumentoPessoa[];

  @OneToMany(
    () => TblAgendamentoHorario,
    (tblAgendamentoHorario) => tblAgendamentoHorario.codInteressadoAgendado
  )
  tblAgendamentoHorarios: TblAgendamentoHorario[];

  @OneToMany(
    () => TblAgendamentoHorario,
    (tblAgendamentoHorario) => tblAgendamentoHorario.codInteressadoAtendente
  )
  tblAgendamentoHorarios2: TblAgendamentoHorario[];

  @OneToMany(
    () => TblAgendamentoHorario,
    (tblAgendamentoHorario) => tblAgendamentoHorario.codInteressadoCancelamento
  )
  tblAgendamentoHorarios3: TblAgendamentoHorario[];

  @OneToMany(
    () => TblDocumentoAssinatura,
    (tblDocumentoAssinatura) => tblDocumentoAssinatura.codInteressado
  )
  tblDocumentoAssinaturas: TblDocumentoAssinatura[];

  @ManyToOne(
    () => TblEstadoCivil,
    (tblEstadoCivil) => tblEstadoCivil.tblInteressados
  )
  @JoinColumn([
    { name: "COD_ESTADO_CIVIL", referencedColumnName: "codEstadoCivil" },
  ])
  codEstadoCivil: TblEstadoCivil;

  @ManyToOne(() => TblPais, (tblPais) => tblPais.tblInteressados)
  @JoinColumn([{ name: "COD_PAIS", referencedColumnName: "codPais" }])
  codPais: TblPais;

  @ManyToOne(() => TblEstado, (tblEstado) => tblEstado.tblInteressados)
  @JoinColumn([
    { name: "COD_ESTADO_NASCIMENTO", referencedColumnName: "codEstado" },
  ])
  codEstadoNascimento: TblEstado;

  @ManyToOne(
    () => TblOcupacaoBrasileira,
    (tblOcupacaoBrasileira) => tblOcupacaoBrasileira.tblInteressados
  )
  @JoinColumn([{ name: "COD_OCUPACAO", referencedColumnName: "codOcupacao" }])
  codOcupacao: TblOcupacaoBrasileira;

  @ManyToOne(
    () => TblTipoRelacionamentoFiscal,
    (tblTipoRelacionamentoFiscal) => tblTipoRelacionamentoFiscal.tblInteressados
  )
  @JoinColumn([
    {
      name: "COD_TIPO_RELACIONAMENTO_FISCAL",
      referencedColumnName: "codTipoRelacionamentoFiscal",
    },
  ])
  codTipoRelacionamentoFiscal: TblTipoRelacionamentoFiscal;

  @ManyToOne(() => TblBairro, (tblBairro) => tblBairro.tblInteressados)
  @JoinColumn([{ name: "COD_BAIRRO", referencedColumnName: "codBairro" }])
  codBairro: TblBairro;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressados
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_CADASTRO",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoCadastro: TblInteressado;

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codInteressadoCadastro
  )
  tblInteressados: TblInteressado[];

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressados2
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_ATUALIZACAO",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoAtualizacao: TblInteressado;

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codInteressadoAtualizacao
  )
  tblInteressados2: TblInteressado[];

  @ManyToOne(() => TblBanco, (tblBanco) => tblBanco.tblInteressados)
  @JoinColumn([{ name: "COD_BANCO", referencedColumnName: "codBanco" }])
  codBanco: TblBanco;

  @ManyToOne(() => TblEstado, (tblEstado) => tblEstado.tblInteressados2)
  @JoinColumn([{ name: "COD_ESTADO", referencedColumnName: "codEstado" }])
  codEstado: TblEstado;

  @ManyToOne(
    () => TblRegistroProfissional,
    (tblRegistroProfissional) => tblRegistroProfissional.tblInteressados
  )
  @JoinColumn([
    { name: "COD_TIPO_REGISTRO", referencedColumnName: "codTipoRegistro" },
  ])
  codTipoRegistro: TblRegistroProfissional;

  @ManyToOne(() => TblEstado, (tblEstado) => tblEstado.tblInteressados3)
  @JoinColumn([
    { name: "COD_ORGAO_EXPEDIDOR_ESTADO", referencedColumnName: "codEstado" },
  ])
  codOrgaoExpedidorEstado: TblEstado;

  @OneToMany(
    () => TblInteressadoDocAssinatura,
    (tblInteressadoDocAssinatura) => tblInteressadoDocAssinatura.codInteressado
  )
  tblInteressadoDocAssinaturas: TblInteressadoDocAssinatura[];

  @OneToMany(
    () => TblInteressadoDocumento,
    (tblInteressadoDocumento) => tblInteressadoDocumento.codInteressado
  )
  tblInteressadoDocumentos: TblInteressadoDocumento[];

  @OneToMany(
    () => TblInteressadoDocumento,
    (tblInteressadoDocumento) => tblInteressadoDocumento.codInteressadoInclusao
  )
  tblInteressadoDocumentos2: TblInteressadoDocumento[];

  @OneToMany(
    () => TblInteressadoDocumento,
    (tblInteressadoDocumento) => tblInteressadoDocumento.codInteressadoInativa
  )
  tblInteressadoDocumentos3: TblInteressadoDocumento[];

  @OneToMany(
    () => TblInteressadoProcuracao,
    (tblInteressadoProcuracao) => tblInteressadoProcuracao.codProcurador
  )
  tblInteressadoProcuracaos: TblInteressadoProcuracao[];

  @OneToMany(
    () => TblInteressadoProcuracao,
    (tblInteressadoProcuracao) => tblInteressadoProcuracao.codOutorgante
  )
  tblInteressadoProcuracaos2: TblInteressadoProcuracao[];

  @OneToMany(
    () => TblInteressadoProcuracao,
    (tblInteressadoProcuracao) => tblInteressadoProcuracao.codUsuarioInclusao
  )
  tblInteressadoProcuracaos3: TblInteressadoProcuracao[];

  @OneToMany(
    () => TblInteressadoProcuracao,
    (tblInteressadoProcuracao) => tblInteressadoProcuracao.codUsuarioCancela
  )
  tblInteressadoProcuracaos4: TblInteressadoProcuracao[];

  @ManyToMany(
    () => TblRelacionamentoTipo,
    (tblRelacionamentoTipo) => tblRelacionamentoTipo.tblInteressados
  )
  @JoinTable({
    name: "TBL_INTERESSADO_RELACIONAMENTO",
    joinColumns: [
      { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
    ],
    inverseJoinColumns: [
      {
        name: "COD_RELACIONAMENTO_TIPO",
        referencedColumnName: "codRelacionamentoTipo",
      },
    ],
  })
  tblRelacionamentoTipos: TblRelacionamentoTipo[];

  @OneToMany(
    () => TblInteressadoVinculoEmpre,
    (tblInteressadoVinculoEmpre) => tblInteressadoVinculoEmpre.codInteressado
  )
  tblInteressadoVinculoEmpres: TblInteressadoVinculoEmpre[];

  @OneToMany(
    () => TblMinutaInteressado,
    (tblMinutaInteressado) => tblMinutaInteressado.codInteressado2
  )
  tblMinutaInteressados: TblMinutaInteressado[];

  @OneToMany(
    () => TblMinutaRemetente,
    (tblMinutaRemetente) => tblMinutaRemetente.codRemetente2
  )
  tblMinutaRemetentes: TblMinutaRemetente[];

  @OneToMany(
    () => TblNotificacao,
    (tblNotificacao) => tblNotificacao.codInteressadoRemetente
  )
  tblNotificacaos: TblNotificacao[];

  @OneToMany(
    () => TblNotificacao,
    (tblNotificacao) => tblNotificacao.codInteressadoDestinatario
  )
  tblNotificacaos2: TblNotificacao[];

  @OneToMany(
    () => TblPendenciaUsuarioExterno,
    (tblPendenciaUsuarioExterno) => tblPendenciaUsuarioExterno.codInteressado
  )
  tblPendenciaUsuarioExternos: TblPendenciaUsuarioExterno[];

  @OneToMany(
    () => TblPendRespArqDefiAssin,
    (tblPendRespArqDefiAssin) => tblPendRespArqDefiAssin.codInteressado
  )
  tblPendRespArqDefiAssins: TblPendRespArqDefiAssin[];

  @OneToMany(
    () => TblPendRespArqDefiAssin,
    (tblPendRespArqDefiAssin) => tblPendRespArqDefiAssin.codInteressadoDefiniu
  )
  tblPendRespArqDefiAssins2: TblPendRespArqDefiAssin[];

  @OneToMany(
    () => TblPendRespArquivoAssi,
    (tblPendRespArquivoAssi) => tblPendRespArquivoAssi.codInteressado
  )
  tblPendRespArquivoAssis: TblPendRespArquivoAssi[];

  @OneToMany(
    () => TblProtocoloAssinatura,
    (tblProtocoloAssinatura) => tblProtocoloAssinatura.codInteressadoDefiniu2
  )
  tblProtocoloAssinaturas: TblProtocoloAssinatura[];

  @OneToMany(
    () => TblProtocoloAssinatura,
    (tblProtocoloAssinatura) => tblProtocoloAssinatura.codInteressado2
  )
  tblProtocoloAssinaturas2: TblProtocoloAssinatura[];

  @OneToMany(
    () => TblProtocoloInteressado,
    (tblProtocoloInteressado) => tblProtocoloInteressado.codInteressado2
  )
  tblProtocoloInteressados: TblProtocoloInteressado[];

  @OneToMany(
    () => TblProtocoloInteressadoHist,
    (tblProtocoloInteressadoHist) => tblProtocoloInteressadoHist.codInteressado2
  )
  tblProtocoloInteressadoHists: TblProtocoloInteressadoHist[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codInteressado
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];

  @OneToMany(
    () => TblQuadroSocietario,
    (tblQuadroSocietario) => tblQuadroSocietario.codInteressadoEmpresa2
  )
  tblQuadroSocietarios: TblQuadroSocietario[];

  @OneToMany(
    () => TblQuadroSocietario,
    (tblQuadroSocietario) => tblQuadroSocietario.codInteressadoSocio2
  )
  tblQuadroSocietarios2: TblQuadroSocietario[];

  @ManyToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.tblInteressados
  )
  @JoinTable({
    name: "TBL_QUADRO_SOCIETARIO_PROCURAD",
    joinColumns: [{ name: "SOCIO", referencedColumnName: "codInteressado" }],
    inverseJoinColumns: [
      { name: "COD_PROCURADOR", referencedColumnName: "codProcurador" },
    ],
  })
  tblProtocoloProcuradors2: TblProtocoloProcurador[];

  @OneToMany(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.codInteressado2
  )
  tblSegUsuarios: TblSegUsuario[];

  @OneToMany(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.codInteressado
  )
  tblSegUsuarioExternos: TblSegUsuarioExterno[];
}

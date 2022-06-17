import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblInteressadoDocProcurador } from "./TblInteressadoDocProcurador";
import { TblPais } from "./TblPais";
import { TblEstado } from "./TblEstado";
import { TblOcupacaoBrasileira } from "./TblOcupacaoBrasileira";
import { TblRegistroProfissional } from "./TblRegistroProfissional";
import { TblTipoRelacionamentoFiscal } from "./TblTipoRelacionamentoFiscal";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblEstadoCivil } from "./TblEstadoCivil";
import { TblInteressado } from "./TblInteressado";
import { TblProtocolo } from "./TblProtocolo";

@Index("TBL_PROTOCOLO_PROCURADOR_PK", ["codProcurador"], { unique: true })
@Entity("TBL_PROTOCOLO_PROCURADOR")
export class TblProtocoloProcurador {
  @Column("varchar2", { name: "TXT_RG", nullable: true, length: 50 })
  txtRg: string | null;

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

  @Column("varchar2", { name: "TXT_RAZAO_SOCIAL", nullable: true, length: 255 })
  txtRazaoSocial: string | null;

  @Column("varchar2", {
    name: "TXT_ORGAO_EXPEDIDOR_ESTRANGEIR",
    nullable: true,
    length: 100,
  })
  txtOrgaoExpedidorEstrangeir: string | null;

  @Column("varchar2", {
    name: "TXT_ORGAO_EXPEDIDOR",
    nullable: true,
    length: 20,
  })
  txtOrgaoExpedidor: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_ENDERECO_CORREIO",
    nullable: true,
    length: 10,
  })
  txtNumeroEnderecoCorreio: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", nullable: true, length: 50 })
  txtNumero: string | null;

  @Column("varchar2", { name: "TXT_NOME_PAI", nullable: true, length: 255 })
  txtNomePai: string | null;

  @Column("varchar2", { name: "TXT_NOME_MAE", nullable: true, length: 150 })
  txtNomeMae: string | null;

  @Column("varchar2", {
    name: "TXT_NOME_FANTANSIA",
    nullable: true,
    length: 255,
  })
  txtNomeFantansia: string | null;

  @Column("varchar2", { name: "TXT_NATURALIDADE", nullable: true, length: 100 })
  txtNaturalidade: string | null;

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

  @Column("varchar2", {
    name: "TXT_IDENTIFICA_ENDERECO_CORREI",
    nullable: true,
    length: 6,
  })
  txtIdentificaEnderecoCorrei: string | null;

  @Column("varchar2", { name: "TXT_COMPLEMENTO", nullable: true, length: 255 })
  txtComplemento: string | null;

  @Column("varchar2", {
    name: "TXT_CARTEIRA_ESTRANGEIRO",
    nullable: true,
    length: 100,
  })
  txtCarteiraEstrangeiro: string | null;

  @Column("varchar2", { name: "TXT_CARGO", nullable: true, length: 100 })
  txtCargo: string | null;

  @Column("date", { name: "DT_NASCIMENTO", nullable: true })
  dtNascimento: Date | null;

  @Column("date", { name: "DT_EXPEDICAO_RG", nullable: true })
  dtExpedicaoRg: Date | null;

  @Column("date", { name: "DT_CHEGADA_BRASIL", nullable: true })
  dtChegadaBrasil: Date | null;

  @Column("date", { name: "DT_CADASTRO", nullable: true })
  dtCadastro: Date | null;

  @Column("number", { name: "COD_USUARIO_CADASTRO", nullable: true })
  codUsuarioCadastro: number | null;

  @Column("number", { name: "COD_TIPO_REGISTRO", nullable: true })
  codTipoRegistro: number | null;

  @Column("varchar2", {
    name: "COD_SEXO_REPRESENTANTE_LEGAL",
    nullable: true,
    length: 100,
  })
  codSexoRepresentanteLegal: string | null;

  @Column("number", { name: "COD_SEXO", nullable: true })
  codSexo: number | null;

  @Column("number", { name: "COD_PROCURADOR_PROCESSO", nullable: true })
  codProcuradorProcesso: number | null;

  @Column("number", { primary: true, name: "COD_PROCURADOR" })
  codProcurador: number;

  @Column("number", { name: "COD_NATURALIZADO", nullable: true })
  codNaturalizado: number | null;

  @Column("varchar2", {
    name: "COD_MUNICIPIO_IBGE",
    nullable: true,
    length: 100,
  })
  codMunicipioIbge: string | null;

  @Column("number", { name: "COD_ANALISE_CONCLUIDA", default: () => "(1)" })
  codAnaliseConcluida: number;

  @OneToMany(
    () => TblInteressadoDocProcurador,
    (tblInteressadoDocProcurador) => tblInteressadoDocProcurador.codProcurador
  )
  tblInteressadoDocProcuradors: TblInteressadoDocProcurador[];

  @ManyToOne(() => TblPais, (tblPais) => tblPais.tblProtocoloProcuradors)
  @JoinColumn([{ name: "COD_PAIS", referencedColumnName: "codPais" }])
  codPais: TblPais;

  @ManyToOne(() => TblEstado, (tblEstado) => tblEstado.tblProtocoloProcuradors)
  @JoinColumn([
    { name: "COD_ESTADO_NACIMENTO", referencedColumnName: "codEstado" },
  ])
  codEstadoNacimento: TblEstado;

  @ManyToOne(
    () => TblOcupacaoBrasileira,
    (tblOcupacaoBrasileira) => tblOcupacaoBrasileira.tblProtocoloProcuradors
  )
  @JoinColumn([{ name: "COD_OCUPACAO", referencedColumnName: "codOcupacao" }])
  codOcupacao: TblOcupacaoBrasileira;

  @ManyToOne(
    () => TblRegistroProfissional,
    (tblRegistroProfissional) => tblRegistroProfissional.tblProtocoloProcuradors
  )
  @JoinColumn([
    {
      name: "COD_REGISTRO_PROFISSIONAL",
      referencedColumnName: "codTipoRegistro",
    },
  ])
  codRegistroProfissional: TblRegistroProfissional;

  @ManyToOne(
    () => TblTipoRelacionamentoFiscal,
    (tblTipoRelacionamentoFiscal) =>
      tblTipoRelacionamentoFiscal.tblProtocoloProcuradors
  )
  @JoinColumn([
    {
      name: "COD_TIPO_RELACIONAMENTO_FISCAL",
      referencedColumnName: "codTipoRelacionamentoFiscal",
    },
  ])
  codTipoRelacionamentoFiscal: TblTipoRelacionamentoFiscal;

  @ManyToOne(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) => tblProtocoloDocumento.tblProtocoloProcuradors
  )
  @JoinColumn([
    {
      name: "COD_PROTOCOLO_DOCUMENTO",
      referencedColumnName: "codProtocoloDocumento",
    },
  ])
  codProtocoloDocumento: TblProtocoloDocumento;

  @ManyToOne(
    () => TblEstadoCivil,
    (tblEstadoCivil) => tblEstadoCivil.tblProtocoloProcuradors
  )
  @JoinColumn([
    { name: "COD_ESTADO_CIVIL", referencedColumnName: "codEstadoCivil" },
  ])
  codEstadoCivil: TblEstadoCivil;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblProtocoloProcuradors
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblProtocoloProcuradors
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo: TblProtocolo;

  @ManyToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblProtocoloProcuradors2
  )
  tblInteressados: TblInteressado[];
}

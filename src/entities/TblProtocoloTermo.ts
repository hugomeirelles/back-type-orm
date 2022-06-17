import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDocumentoTipo } from "./TblDocumentoTipo";

@Index("PK_TBL_PROTOCOLO_TERMO", ["codProtocolo", "codDocumentoTipo"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_TERMO")
export class TblProtocoloTermo {
  @Column("varchar2", { name: "TXT_TITULAR_NOME", nullable: true, length: 255 })
  txtTitularNome: string | null;

  @Column("varchar2", {
    name: "TXT_TITULAR_CARGO",
    nullable: true,
    length: 255,
  })
  txtTitularCargo: string | null;

  @Column("varchar2", { name: "TXT_SOLICITANTE", nullable: true, length: 255 })
  txtSolicitante: string | null;

  @Column("varchar2", {
    name: "TXT_RESSALVA_PECA",
    nullable: true,
    length: 255,
  })
  txtRessalvaPeca: string | null;

  @Column("varchar2", {
    name: "TXT_RESSALVA_NOME",
    nullable: true,
    length: 255,
  })
  txtRessalvaNome: string | null;

  @Column("varchar2", {
    name: "TXT_RESSALVA_CARGO",
    nullable: true,
    length: 255,
  })
  txtRessalvaCargo: string | null;

  @Column("clob", { name: "TXT_RECONSTITUICAO_PROCESSO", nullable: true })
  txtReconstituicaoProcesso: string | null;

  @Column("varchar2", {
    name: "TXT_RECONSTITUICAO_NOME",
    nullable: true,
    length: 255,
  })
  txtReconstituicaoNome: string | null;

  @Column("varchar2", {
    name: "TXT_RECONSTITUICAO_CARGO",
    nullable: true,
    length: 255,
  })
  txtReconstituicaoCargo: string | null;

  @Column("varchar2", { name: "TXT_PROCEDENCIA", nullable: true, length: 255 })
  txtProcedencia: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_OPERACAO",
    nullable: true,
    length: 50,
  })
  txtNumeroOperacao: string | null;

  @Column("varchar2", { name: "TXT_JUNTADA_PECA", nullable: true, length: 255 })
  txtJuntadaPeca: string | null;

  @Column("number", { name: "TXT_JUNTADA_FOLHA", nullable: true, scale: 0 })
  txtJuntadaFolha: number | null;

  @Column("varchar2", { name: "TXT_INTERESSADO", nullable: true, length: 255 })
  txtInteressado: string | null;

  @Column("varchar2", {
    name: "TXT_DOCUMENTO_RESERVADO_NUMERO",
    nullable: true,
    length: 50,
  })
  txtDocumentoReservadoNumero: string | null;

  @Column("varchar2", {
    name: "TXT_DOCUMENTO_RESERVADO_EMPRES",
    nullable: true,
    length: 255,
  })
  txtDocumentoReservadoEmpres: string | null;

  @Column("varchar2", {
    name: "TXT_DESENTRANHAMENTO_SOLICITAN",
    nullable: true,
    length: 255,
  })
  txtDesentranhamentoSolicitan: string | null;

  @Column("varchar2", {
    name: "TXT_DESENTRANHAMENTO_PECA",
    nullable: true,
    length: 255,
  })
  txtDesentranhamentoPeca: string | null;

  @Column("varchar2", {
    name: "TXT_DESENTRANHAMENTO_NOVO_PROC",
    nullable: true,
    length: 255,
  })
  txtDesentranhamentoNovoProc: string | null;

  @Column("clob", { name: "TXT_DESENTRANHAMENTO_MOTIVO", nullable: true })
  txtDesentranhamentoMotivo: string | null;

  @Column("number", {
    name: "TXT_DESENTRANHAMENTO_FOLHA_INI",
    nullable: true,
    scale: 0,
  })
  txtDesentranhamentoFolhaIni: number | null;

  @Column("number", {
    name: "TXT_DESENTRANHAMENTO_FOLHA_FIN",
    nullable: true,
    scale: 0,
  })
  txtDesentranhamentoFolhaFin: number | null;

  @Column("varchar2", {
    name: "TXT_DESARQUIVAMENTO_MOTIVO",
    nullable: true,
    length: 255,
  })
  txtDesarquivamentoMotivo: string | null;

  @Column("varchar2", {
    name: "TXT_DESAPENSACAO_PECA",
    nullable: true,
    length: 255,
  })
  txtDesapensacaoPeca: string | null;

  @Column("varchar2", { name: "TXT_CERTIDAO_RG", nullable: true, length: 255 })
  txtCertidaoRg: string | null;

  @Column("varchar2", {
    name: "TXT_CERTIDAO_PESSOA",
    nullable: true,
    length: 255,
  })
  txtCertidaoPessoa: string | null;

  @Column("varchar2", {
    name: "TXT_CERTIDAO_EMPRESA",
    nullable: true,
    length: 255,
  })
  txtCertidaoEmpresa: string | null;

  @Column("clob", { name: "TXT_CERTIDAO_DESCRICAO", nullable: true })
  txtCertidaoDescricao: string | null;

  @Column("varchar2", { name: "TXT_CERTIDAO_CPF", nullable: true, length: 255 })
  txtCertidaoCpf: string | null;

  @Column("clob", { name: "TXT_AUTUACAO_INTERESSADO", nullable: true })
  txtAutuacaoInteressado: string | null;

  @Column("clob", { name: "TXT_AUTUACAO_ASSUNTO", nullable: true })
  txtAutuacaoAssunto: string | null;

  @Column("clob", { name: "TXT_ASSUNTO", nullable: true })
  txtAssunto: string | null;

  @Column("varchar2", {
    name: "TXT_APOSTILAMENTO_EXERCICIO",
    nullable: true,
    length: 255,
  })
  txtApostilamentoExercicio: string | null;

  @Column("varchar2", {
    name: "TXT_APOSTILAMENTO_EMPRESA",
    nullable: true,
    length: 255,
  })
  txtApostilamentoEmpresa: string | null;

  @Column("varchar2", {
    name: "TXT_APOSTILAMENTO_CONTRATO",
    nullable: true,
    length: 255,
  })
  txtApostilamentoContrato: string | null;

  @Column("varchar2", {
    name: "TXT_APENSACAO_PECA",
    nullable: true,
    length: 255,
  })
  txtApensacaoPeca: string | null;

  @Column("varchar2", {
    name: "TXT_ANEXACAO_SOLICITANTE",
    nullable: true,
    length: 255,
  })
  txtAnexacaoSolicitante: string | null;

  @Column("varchar2", {
    name: "TXT_ANEXACAO_PECA",
    nullable: true,
    length: 255,
  })
  txtAnexacaoPeca: string | null;

  @Column("number", {
    name: "TXT_ANEXACAO_FOLHA_INICIAL",
    nullable: true,
    scale: 0,
  })
  txtAnexacaoFolhaInicial: number | null;

  @Column("number", {
    name: "TXT_ANEXACAO_FOLHA_FINAL",
    nullable: true,
    scale: 0,
  })
  txtAnexacaoFolhaFinal: number | null;

  @Column("clob", { name: "TXT_ALTERACAO_MOTIVO", nullable: true })
  txtAlteracaoMotivo: string | null;

  @Column("varchar2", {
    name: "TXT_ALTERACAO_FOLHA",
    nullable: true,
    length: 255,
  })
  txtAlteracaoFolha: string | null;

  @Column("date", { name: "DT_OPERACAO", nullable: true })
  dtOperacao: Date | null;

  @Column("number", { name: "COD_VOLUME", nullable: true, scale: 0 })
  codVolume: number | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO_OPERACAO", nullable: true, scale: 0 })
  codOrgaoOperacao: number | null;

  @Column("number", { name: "COD_FOLHA_INICIAL", nullable: true, scale: 0 })
  codFolhaInicial: number | null;

  @Column("number", { name: "COD_FOLHA_FINAL", nullable: true, scale: 0 })
  codFolhaFinal: number | null;

  @Column("number", { name: "COD_FOLHA", nullable: true, scale: 0 })
  codFolha: number | null;

  @Column("number", { name: "COD_DOCUMENTO_TIPO", scale: 0 })
  codDocumentoTipo: number;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblProtocoloTermos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo2: TblDocumentoTipo;
}

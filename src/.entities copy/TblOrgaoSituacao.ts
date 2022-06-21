import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblOrgao } from "./TblOrgao";

@Index("PK_TBL_ORGAO_SITUACAO", ["codOrgao", "dtSituacao"], { unique: true })
@Entity("TBL_ORGAO_SITUACAO")
export class TblOrgaoSituacao {
  @Column("date", {
    primary: true,
    name: "DT_SITUACAO",
    default: () => "sysdate",
  })
  dtSituacao: Date;

  @Column("date", { name: "DT_EMAIL_PRAZO_RESPOSTA", nullable: true })
  dtEmailPrazoResposta: Date | null;

  @Column("number", {
    name: "COD_PROCESSO_SOBRESTAR_PRAZO",
    scale: 0,
    default: () => "(0)",
  })
  codProcessoSobrestarPrazo: number;

  @Column("number", { name: "COD_PROCESSO_RESPOSTA", scale: 0 })
  codProcessoResposta: number;

  @Column("number", {
    name: "COD_PROCESSO_RECEBIMENTO",
    scale: 0,
    default: () => "0",
  })
  codProcessoRecebimento: number;

  @Column("number", {
    name: "COD_PROCESSO_LISTAGEM",
    scale: 0,
    default: () => "0",
  })
  codProcessoListagem: number;

  @Column("number", {
    name: "COD_PROCESSO_CANCELAR2",
    scale: 0,
    default: () => "0",
  })
  codProcessoCancelar2: number;

  @Column("number", {
    name: "COD_PROCESSO_CANCELAR",
    scale: 0,
    default: () => "0",
  })
  codProcessoCancelar: number;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", {
    name: "COD_LEGISLACAO_LISTAGEM",
    scale: 0,
    default: () => "0",
  })
  codLegislacaoListagem: number;

  @Column("number", {
    name: "COD_DOCUMENTO_SOBRESTAR_PRAZO",
    scale: 0,
    default: () => "(0)",
  })
  codDocumentoSobrestarPrazo: number;

  @Column("number", {
    name: "COD_DOCUMENTO_RESPOSTA",
    scale: 0,
    default: () => "0",
  })
  codDocumentoResposta: number;

  @Column("number", {
    name: "COD_DOCUMENTO_RECEBIMENTO",
    scale: 0,
    default: () => "0",
  })
  codDocumentoRecebimento: number;

  @Column("number", {
    name: "COD_DOCUMENTO_PRAZO_RESPOSTA",
    scale: 0,
    default: () => "(0)",
  })
  codDocumentoPrazoResposta: number;

  @Column("number", {
    name: "COD_DOCUMENTO_MINUTA_NAO_LIDA",
    scale: 0,
    default: () => "0",
  })
  codDocumentoMinutaNaoLida: number;

  @Column("number", {
    name: "COD_DOCUMENTO_MINUTA",
    scale: 0,
    default: () => "0",
  })
  codDocumentoMinuta: number;

  @Column("number", {
    name: "COD_DOCUMENTO_LISTAGEM",
    scale: 0,
    default: () => "0",
  })
  codDocumentoListagem: number;

  @Column("number", {
    name: "COD_DOCUMENTO_CANCELAR2",
    scale: 0,
    default: () => "0",
  })
  codDocumentoCancelar2: number;

  @Column("number", {
    name: "COD_DOCUMENTO_CANCELAR",
    scale: 0,
    default: () => "0",
  })
  codDocumentoCancelar: number;

  @Column("number", {
    name: "COD_CONVENIO_LISTAGEM",
    scale: 0,
    default: () => "0",
  })
  codConvenioListagem: number;

  @Column("number", {
    name: "COD_CONTRATO_LISTAGEM",
    scale: 0,
    default: () => "0",
  })
  codContratoListagem: number;

  @Column("number", {
    name: "COD_BIBLIOTECA_RESERVA",
    scale: 0,
    default: () => "(0)",
  })
  codBibliotecaReserva: number;

  @Column("number", {
    name: "COD_BIBLIOTECA_LISTAGEM",
    scale: 0,
    default: () => "0",
  })
  codBibliotecaListagem: number;

  @Column("number", {
    name: "COD_BIBLIOTECA_EMPRESTIMO_ATRA",
    scale: 0,
    default: () => "(0)",
  })
  codBibliotecaEmprestimoAtra: number;

  @Column("number", {
    name: "COD_BIBLIOTECA_EMPRESTIMO",
    scale: 0,
    default: () => "(0)",
  })
  codBibliotecaEmprestimo: number;

  @Column("number", {
    name: "COD_ARQUIVO_RECEBIMENTO",
    scale: 0,
    default: () => "(0)",
  })
  codArquivoRecebimento: number;

  @Column("number", {
    name: "COD_ARQUIVO_LISTAGEM",
    scale: 0,
    default: () => "0",
  })
  codArquivoListagem: number;

  @Column("number", {
    name: "COD_ARQUIVO_CANCELAR",
    scale: 0,
    default: () => "(0)",
  })
  codArquivoCancelar: number;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblOrgaoSituacaos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblOrgao } from "./TblOrgao";
import { TblPrioridade } from "./TblPrioridade";

@Index(
  "IDX$$_00010014",
  ["codRecebimento", "codOrgaoDestino", "codProtocolo"],
  {}
)
@Index("IX_PM_COD_MOTIVO", ["codMotivo"], {})
@Index("IX_PM_COD_ORGAO_DESTINO", ["codOrgaoDestino"], {})
@Index("IX_PM_COD_ORGAO_ORIGEM", ["codOrgaoOrigem"], {})
@Index("IX_PM_COD_PRIORIDADE", ["codPrioridade"], {})
@Index("IX_PM_COD_PROTOCOLO", ["codProtocolo"], {})
@Index("IX_PM_COD_RECEBIMENTO", ["codRecebimento"], {})
@Index("IX_PM_COD_SAIDA", ["codSaida"], {})
@Index("IX_PM_COD_SITUACAO", ["codSituacao"], {})
@Index("IX_PM_COD_USUARIO_MOVIMENTO", ["codUsuarioMovimento"], {})
@Index("IX_PM_COD_USUARIO_RECEBIMENTO", ["codUsuarioRecebimento"], {})
@Index("IX_PM_COMPOSTO_02", ["codOrgaoOrigem", "codRecebimento"], {})
@Index("IX_PM_COMPOSTO_03", ["codOrgaoDestino", "codRecebimento"], {})
@Index("IX_PM_DT_MOVIMENTO", ["dtMovimento"], {})
@Index("IX_PRT_COD_ORGAO_ORIGEM", ["codOrgaoOrigem", "codOrgaoDestino"], {})
@Index("IX_PRT_COD_ORG_ORI_INDX", ["codProtocolo", "codRecebimento"], {})
@Index(
  "IX_TBL_PROT_MOV_N1",
  ["codOrgaoOrigem", "codRecebimento", "codProtocolo"],
  {}
)
@Index("PK_TBL_PROTOCOLO_MOVIMENTO", ["codProtocolo", "codMovimento"], {
  unique: true,
})
@Index(
  "TBL_PROTOCOLO_N5",
  ["codOrgaoOrigem", "codOrgaoDestino", "codProtocolo"],
  {}
)
@Entity("TBL_PROTOCOLO_MOVIMENTO")
export class TblProtocoloMovimento {
  @Column("varchar2", { name: "TXT_RESULTADO", nullable: true, length: 20 })
  txtResultado: string | null;

  @Column("varchar2", { name: "TXT_ORIGEM", nullable: true, length: 1 })
  txtOrigem: string | null;

  @Column("clob", { name: "TXT_MOTIVO_RECUSA_OUTRO", nullable: true })
  txtMotivoRecusaOutro: string | null;

  @Column("varchar2", { name: "TXT_MALOTE", nullable: true, length: 20 })
  txtMalote: string | null;

  @Column("varchar2", { name: "TXT_LACRE", nullable: true, length: 20 })
  txtLacre: string | null;

  @Column("varchar2", {
    name: "TXT_JUST_CANCELAMENTO",
    nullable: true,
    length: 80,
  })
  txtJustCancelamento: string | null;

  @Column("clob", { name: "TXT_INFORMACAO_ADICIONAL", nullable: true })
  txtInformacaoAdicional: string | null;

  @Column("varchar2", { name: "TXT_GRD", nullable: true, length: 20 })
  txtGrd: string | null;

  @Column("varchar2", { name: "TXT_DESTAQUE", nullable: true, length: 1000 })
  txtDestaque: string | null;

  @Column("clob", { name: "TXT_DESPACHO", nullable: true })
  txtDespacho: string | null;

  @Column("varchar2", {
    name: "TXT_CERTIFICADO_RECEBIMENTO",
    nullable: true,
    length: 50,
  })
  txtCertificadoRecebimento: string | null;

  @Column("varchar2", {
    name: "TXT_CERTIFICADO_MOVIMENTO",
    nullable: true,
    length: 50,
  })
  txtCertificadoMovimento: string | null;

  @Column("varchar2", { name: "TXT_CERTIFICADO", nullable: true, length: 50 })
  txtCertificado: string | null;

  @Column("varchar2", { name: "TXT_CANCELAMENTO", nullable: true, length: 100 })
  txtCancelamento: string | null;

  @Column("varchar2", { name: "TXT_ACAO_MOV", nullable: true, length: 20 })
  txtAcaoMov: string | null;

  @Column("number", {
    name: "NUM_ISN",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  numIsn: number | null;

  @Column("date", { name: "NUM_DATA_OBS_MOV", nullable: true })
  numDataObsMov: Date | null;

  @Column("varchar2", { name: "ID_PROCESSO", nullable: true, length: 18 })
  idProcesso: string | null;

  @Column("date", { name: "HR_MOVIMENTO", default: () => "sysdate" })
  hrMovimento: Date;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_PRAZO_RESPOSTA", nullable: true })
  dtPrazoResposta: Date | null;

  @Column("date", {
    name: "DT_MOVIMENTO",
    nullable: true,
    default: () => "sysdate",
  })
  dtMovimento: Date | null;

  @Column("number", {
    name: "COD_USUARIO_RECEBIMENTO",
    nullable: true,
    scale: 0,
  })
  codUsuarioRecebimento: number | null;

  @Column("number", { name: "COD_USUARIO_MOVIMENTO", nullable: true, scale: 0 })
  codUsuarioMovimento: number | null;

  @Column("number", { name: "COD_USUARIO_CUIDADO", nullable: true, scale: 0 })
  codUsuarioCuidado: number | null;

  @Column("number", { name: "COD_SITUACAO", scale: 0, default: () => "1" })
  codSituacao: number;

  @Column("number", { name: "COD_SAIDA", nullable: true, scale: 0 })
  codSaida: number | null;

  @Column("number", { name: "COD_REMESSA_TIPO", nullable: true, scale: 0 })
  codRemessaTipo: number | null;

  @Column("number", {
    name: "COD_RECEBIMENTO",
    nullable: true,
    scale: 0,
    default: () => "0",
  })
  codRecebimento: number | null;

  @Column("number", { name: "COD_PROTOCOLO_DOCUMENTO", nullable: true })
  codProtocoloDocumento: number | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_PRIORIDADE",
    nullable: true,
    scale: 0,
    default: () => "2",
  })
  codPrioridade: number | null;

  @Column("number", { name: "COD_ORGAO_ORIGEM", scale: 0 })
  codOrgaoOrigem: number;

  @Column("number", {
    name: "COD_ORGAO_DESTINO_FINAL",
    nullable: true,
    scale: 0,
  })
  codOrgaoDestinoFinal: number | null;

  @Column("number", { name: "COD_ORGAO_DESTINO", scale: 0 })
  codOrgaoDestino: number;

  @Column("number", {
    primary: true,
    name: "COD_MOVIMENTO",
    scale: 0,
    default: () => "1",
  })
  codMovimento: number;

  @Column("number", {
    name: "COD_MOTIVO_RECUSA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codMotivoRecusa: number | null;

  @Column("number", { name: "COD_MOTIVO", scale: 0, default: () => "0" })
  codMotivo: number;

  @Column("number", { name: "COD_MALOTE", nullable: true, scale: 0 })
  codMalote: number | null;

  @Column("number", {
    name: "COD_GUIA",
    nullable: true,
    scale: 0,
    default: () => "0",
  })
  codGuia: number | null;

  @Column("number", {
    name: "COD_GERENCIAL",
    precision: 2,
    scale: 0,
    default: () => "0",
  })
  codGerencial: number;

  @Column("number", {
    name: "COD_GENERO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codGenero: number | null;

  @Column("number", { name: "COD_EMAIL", scale: 0, default: () => "0" })
  codEmail: number;

  @Column("number", { name: "COD_DESPACHO_PADRAO", nullable: true, scale: 0 })
  codDespachoPadrao: number | null;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloMovimentos)
  @JoinColumn([{ name: "COD_ORGAO_ORIGEM", referencedColumnName: "codOrgao" }])
  codOrgaoOrigem2: TblOrgao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloMovimentos2)
  @JoinColumn([{ name: "COD_ORGAO_DESTINO", referencedColumnName: "codOrgao" }])
  codOrgaoDestino2: TblOrgao;

  @ManyToOne(
    () => TblPrioridade,
    (tblPrioridade) => tblPrioridade.tblProtocoloMovimentos
  )
  @JoinColumn([
    { name: "COD_PRIORIDADE", referencedColumnName: "codPrioridade" },
  ])
  codPrioridade2: TblPrioridade;
}

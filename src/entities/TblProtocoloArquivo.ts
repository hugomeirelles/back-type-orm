import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblSituacao } from "./TblSituacao";
import { TblSituacaoArquivamento } from "./TblSituacaoArquivamento";

@Index("IX_PA_COD_ATIVO", ["codAtivo"], {})
@Index("IX_PA_DT_SOBRESTAR_PRAZO", ["dtSobrestarPrazo"], {})
@Index("TBL_PROTOCOLO_ARQUIVO_N1", ["codProtocolo"], {})
@Entity("TBL_PROTOCOLO_ARQUIVO")
export class TblProtocoloArquivo {
  @Column("varchar2", { name: "TXT_SALA", nullable: true, length: 255 })
  txtSala: string | null;

  @Column("varchar2", { name: "TXT_PRATELEIRA", nullable: true, length: 255 })
  txtPrateleira: string | null;

  @Column("varchar2", { name: "TXT_PASTA", nullable: true, length: 255 })
  txtPasta: string | null;

  @Column("varchar2", { name: "TXT_MODULO", nullable: true, length: 255 })
  txtModulo: string | null;

  @Column("varchar2", { name: "TXT_GAVETA", nullable: true, length: 255 })
  txtGaveta: string | null;

  @Column("varchar2", { name: "TXT_ESTANTE", nullable: true, length: 255 })
  txtEstante: string | null;

  @Column("varchar2", { name: "TXT_DOSSIE", nullable: true, length: 255 })
  txtDossie: string | null;

  @Column("clob", { name: "TXT_COMENTARIO", nullable: true })
  txtComentario: string | null;

  @Column("varchar2", { name: "TXT_CAIXA", nullable: true, length: 255 })
  txtCaixa: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("varchar2", { name: "TXT_ARMARIO", nullable: true, length: 255 })
  txtArmario: string | null;

  @Column("date", { name: "DT_SOBRESTAR_PRAZO", nullable: true })
  dtSobrestarPrazo: Date | null;

  @Column("date", { name: "DT_DESARQUIVAR", nullable: true })
  dtDesarquivar: Date | null;

  @Column("date", {
    name: "DT_ARQUIVO",
    nullable: true,
    default: () => "sysdate",
  })
  dtArquivo: Date | null;

  @Column("date", { name: "DT_APROVACAO_CONTA", nullable: true })
  dtAprovacaoConta: Date | null;

  @Column("number", {
    name: "COD_USUARIO_DESARQUIVAR",
    nullable: true,
    scale: 0,
  })
  codUsuarioDesarquivar: number | null;

  @Column("number", {
    name: "COD_UNIDADE_ARQUIVAMENTO",
    nullable: true,
    scale: 0,
  })
  codUnidadeArquivamento: number | null;

  @Column("number", {
    name: "COD_SOBRESTAMENTO_CONCLUIDO",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codSobrestamentoConcluido: number;

  @Column("number", { name: "COD_SITUACAO_ANTERIOR", nullable: true })
  codSituacaoAnterior: number | null;

  @Column("number", {
    name: "COD_PROTOCOLO_TERMO_DESARQUIVA",
    nullable: true,
    scale: 0,
  })
  codProtocoloTermoDesarquiva: number | null;

  @Column("number", {
    name: "COD_PROTOCOLO_TERMO_ARQUIVAR",
    nullable: true,
    scale: 0,
  })
  codProtocoloTermoArquivar: number | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_PENDENCIA_EXTERNA", nullable: true })
  codPendenciaExterna: number | null;

  @Column("number", { name: "COD_ORGAO_DESARQUIVAR", nullable: true, scale: 0 })
  codOrgaoDesarquivar: number | null;

  @Column("number", { name: "COD_ORGAO_ARQUIVAR", nullable: true, scale: 0 })
  codOrgaoArquivar: number | null;

  @Column("number", { name: "COD_MOTIVO", nullable: true })
  codMotivo: number | null;

  @Column("number", { name: "COD_INVENTARIO", nullable: true, scale: 0 })
  codInventario: number | null;

  @Column("number", {
    name: "COD_DOSSIE",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codDossie: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ANO_PROCESSO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAnoProcesso: number | null;

  @Column("number", {
    name: "COD_ANO_CAIXA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAnoCaixa: number | null;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloArquivos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @ManyToOne(
    () => TblSituacao,
    (tblSituacao) => tblSituacao.tblProtocoloArquivos
  )
  @JoinColumn([{ name: "COD_OPERACAO", referencedColumnName: "codSituacao" }])
  codOperacao: TblSituacao;

  @ManyToOne(
    () => TblSituacaoArquivamento,
    (tblSituacaoArquivamento) => tblSituacaoArquivamento.tblProtocoloArquivos
  )
  @JoinColumn([
    {
      name: "COD_SITUACAO_ARQUIVAMENTO",
      referencedColumnName: "codSituacaoArquivamento",
    },
  ])
  codSituacaoArquivamento: TblSituacaoArquivamento;
}

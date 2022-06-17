import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblArquivoCentral } from "./TblArquivoCentral";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblSolicitacaoMotivo } from "./TblSolicitacaoMotivo";
import { TblSolicitacaoSituacao } from "./TblSolicitacaoSituacao";

@Index("PK_TBL_SOLICITACAO", ["codSolicitacao"], { unique: true })
@Entity("TBL_SOLICITACAO")
export class TblSolicitacao {
  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("clob", { name: "TXT_MOTIVO", nullable: true })
  txtMotivo: string | null;

  @Column("date", { name: "DT_SOLICITACAO", default: () => "sysdate" })
  dtSolicitacao: Date;

  @Column("date", { name: "DT_ATENDIMENTO", nullable: true })
  dtAtendimento: Date | null;

  @Column("number", {
    name: "COD_USUARIO_ATENDIMENTO",
    nullable: true,
    scale: 0,
  })
  codUsuarioAtendimento: number | null;

  @Column("number", {
    name: "COD_SOLICITACAO_TIPO",
    scale: 0,
    default: () => "(1)",
  })
  codSolicitacaoTipo: number;

  @Column("number", { name: "COD_SOLICITACAO", scale: 0 })
  codSolicitacao: number;

  @Column("number", {
    name: "COD_PROTOCOLO_DUPLICADO",
    nullable: true,
    scale: 0,
  })
  codProtocoloDuplicado: number | null;

  @Column("number", { name: "COD_ORGAO_ARQUIVO", nullable: true, scale: 0 })
  codOrgaoArquivo: number | null;

  @Column("number", { name: "COD_ORGAO", scale: 0, default: () => "(1)" })
  codOrgao: number;

  @Column("number", { name: "COD_NUMERO", scale: 0 })
  codNumero: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_ATENDIMENTO", nullable: true, scale: 0 })
  codAtendimento: number | null;

  @ManyToOne(
    () => TblArquivoCentral,
    (tblArquivoCentral) => tblArquivoCentral.tblSolicitacaos
  )
  @JoinColumn([
    { name: "COD_ARQUIVO_CENTRAL", referencedColumnName: "codArquivoCentral" },
  ])
  codArquivoCentral: TblArquivoCentral;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSolicitacaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @ManyToOne(
    () => TblSolicitacaoMotivo,
    (tblSolicitacaoMotivo) => tblSolicitacaoMotivo.tblSolicitacaos
  )
  @JoinColumn([
    {
      name: "COD_SOLICITACAO_MOTIVO",
      referencedColumnName: "codSolicitacaoMotivo",
    },
  ])
  codSolicitacaoMotivo: TblSolicitacaoMotivo;

  @ManyToOne(
    () => TblSolicitacaoSituacao,
    (tblSolicitacaoSituacao) => tblSolicitacaoSituacao.tblSolicitacaos
  )
  @JoinColumn([{ name: "COD_SITUACAO", referencedColumnName: "codSituacao" }])
  codSituacao: TblSolicitacaoSituacao;
}

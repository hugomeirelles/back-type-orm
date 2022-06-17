import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";
import { TblPessoaEmail } from "./TblPessoaEmail";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_AUTORIZACAO_ACESSO", ["codAutorizacaoAcesso"], { unique: true })
@Entity("TBL_AUTORIZACAO_ACESSO")
export class TblAutorizacaoAcesso {
  @Column("varchar2", {
    name: "TXT_MOTIVO_AUTORIZACAO",
    nullable: true,
    length: 500,
  })
  txtMotivoAutorizacao: string | null;

  @Column("varchar2", {
    name: "TXT_JUSTIFICATIVA_REVOGACAO",
    nullable: true,
    length: 500,
  })
  txtJustificativaRevogacao: string | null;

  @Column("varchar2", { name: "TXT_HASH", nullable: true, length: 255 })
  txtHash: string | null;

  @Column("varchar2", { name: "TXT_CODIGO", nullable: true, length: 10 })
  txtCodigo: string | null;

  @Column("timestamp", { name: "DT_REVOGACAO", nullable: true, scale: 6 })
  dtRevogacao: Date | null;

  @Column("timestamp", { name: "DT_PRIMEIRO_ACESSO", nullable: true, scale: 6 })
  dtPrimeiroAcesso: Date | null;

  @Column("date", { name: "DT_PRAZO_ACESSO", nullable: true })
  dtPrazoAcesso: Date | null;

  @Column("date", { name: "DT_LIMITE_ACESSO", nullable: true })
  dtLimiteAcesso: Date | null;

  @Column("timestamp", {
    name: "DT_INCLUSAO",
    nullable: true,
    scale: 6,
    default: () => "CURRENT_TIMESTAMP",
  })
  dtInclusao: Date | null;

  @Column("date", { name: "DT_ACESSO", nullable: true })
  dtAcesso: Date | null;

  @Column("number", {
    name: "COD_DURACAO_AUTORIZACAO",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  codDuracaoAutorizacao: number | null;

  @Column("number", {
    primary: true,
    name: "COD_AUTORIZACAO_ACESSO",
    precision: 10,
    scale: 0,
  })
  codAutorizacaoAcesso: number;

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblAutorizacaoAcessos
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo: TblProtocolo;

  @ManyToOne(
    () => TblPessoaEmail,
    (tblPessoaEmail) => tblPessoaEmail.tblAutorizacaoAcessos
  )
  @JoinColumn([
    { name: "COD_PESSOA_EMAIL", referencedColumnName: "codPessoaEmail" },
  ])
  codPessoaEmail: TblPessoaEmail;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblAutorizacaoAcessos
  )
  @JoinColumn([
    { name: "COD_USUARIO_CONCESSAO", referencedColumnName: "codUsuario" },
  ])
  codUsuarioConcessao: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblAutorizacaoAcessos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_REVOGACAO", referencedColumnName: "codUsuario" },
  ])
  codUsuarioRevogacao: TblSegUsuario;
}

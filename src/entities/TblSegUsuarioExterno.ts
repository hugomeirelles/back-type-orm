import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { TblAutorizacao } from "./TblAutorizacao";
import { TblDocumentoAssinaturaExt } from "./TblDocumentoAssinaturaExt";
import { TblPendencia } from "./TblPendencia";
import { TblPendenciaResposta } from "./TblPendenciaResposta";
import { TblPendenciaRespostaUsuario } from "./TblPendenciaRespostaUsuario";
import { TblProtocolo } from "./TblProtocolo";
import { TblProtocoloAssinaturaExt } from "./TblProtocoloAssinaturaExt";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblProtocoloRequerente } from "./TblProtocoloRequerente";
import { TblInteressado } from "./TblInteressado";
import { TblPerguntaSecreta } from "./TblPerguntaSecreta";

@Index("TBL_SEG_USUARIO_EXTERNO_PK", ["codUsuarioExterno"], { unique: true })
@Entity("TBL_SEG_USUARIO_EXTERNO")
export class TblSegUsuarioExterno {
  @Column("varchar2", { name: "TXT_SENHA", nullable: true, length: 300 })
  txtSenha: string | null;

  @Column("varchar2", { name: "TXT_RESPOSTA", nullable: true, length: 255 })
  txtResposta: string | null;

  @Column("varchar2", { name: "TXT_RAZAO_SOCIAL", nullable: true, length: 255 })
  txtRazaoSocial: string | null;

  @Column("varchar2", { name: "TXT_NOME", nullable: true, length: 255 })
  txtNome: string | null;

  @Column("varchar2", { name: "TXT_EMAIL", length: 255 })
  txtEmail: string;

  @Column("varchar2", { name: "TXT_CONTADOR", nullable: true, length: 255 })
  txtContador: string | null;

  @Column("number", { primary: true, name: "COD_USUARIO_EXTERNO", scale: 0 })
  codUsuarioExterno: number;

  @Column("number", { name: "COD_TIPO_LEMBRANCA", scale: 0 })
  codTipoLembranca: number;

  @Column("number", { name: "COD_TERMO", scale: 0 })
  codTermo: number;

  @Column("number", {
    name: "COD_TENTATIVA_PERGUNTA",
    scale: 0,
    default: () => "0",
  })
  codTentativaPergunta: number;

  @Column("number", {
    name: "COD_SENHA_INCORRETA",
    scale: 0,
    default: () => "0",
  })
  codSenhaIncorreta: number;

  @Column("number", { name: "COD_SENHA_BLOQUEADA", scale: 0 })
  codSenhaBloqueada: number;

  @Column("number", {
    name: "COD_SENHA_ALTERADA",
    scale: 0,
    default: () => "1",
  })
  codSenhaAlterada: number;

  @Column("number", {
    name: "COD_PER_SCT_BLOQUEADA",
    nullable: true,
    scale: 0,
    default: () => "0",
  })
  codPerSctBloqueada: number | null;

  @Column("number", { name: "COD_NEWSLETTER", scale: 0, default: () => "0" })
  codNewsletter: number;

  @Column("number", { name: "COD_CERTIFICADO", scale: 0, default: () => "0" })
  codCertificado: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblAutorizacao,
    (tblAutorizacao) => tblAutorizacao.codUsuarioExtAutorizador
  )
  tblAutorizacaos: TblAutorizacao[];

  @OneToMany(
    () => TblAutorizacao,
    (tblAutorizacao) => tblAutorizacao.codUsuarioExtAutorizado
  )
  tblAutorizacaos2: TblAutorizacao[];

  @OneToMany(
    () => TblDocumentoAssinaturaExt,
    (tblDocumentoAssinaturaExt) => tblDocumentoAssinaturaExt.codUsuarioExterno
  )
  tblDocumentoAssinaturaExts: TblDocumentoAssinaturaExt[];

  @OneToMany(
    () => TblPendencia,
    (tblPendencia) => tblPendencia.codUsuarioVisualizacao
  )
  tblPendencias: TblPendencia[];

  @OneToMany(
    () => TblPendenciaResposta,
    (tblPendenciaResposta) => tblPendenciaResposta.codUsuarioExternoResposta
  )
  tblPendenciaRespostas: TblPendenciaResposta[];

  @OneToOne(
    () => TblPendenciaRespostaUsuario,
    (tblPendenciaRespostaUsuario) =>
      tblPendenciaRespostaUsuario.codPendenciaRespostaUsuario2
  )
  tblPendenciaRespostaUsuario: TblPendenciaRespostaUsuario;

  @OneToMany(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.codUsuarioResponsavel
  )
  tblProtocolos: TblProtocolo[];

  @OneToMany(
    () => TblProtocoloAssinaturaExt,
    (tblProtocoloAssinaturaExt) => tblProtocoloAssinaturaExt.codUsuarioExterno2
  )
  tblProtocoloAssinaturaExts: TblProtocoloAssinaturaExt[];

  @OneToMany(
    () => TblProtocoloAssinaturaExt,
    (tblProtocoloAssinaturaExt) => tblProtocoloAssinaturaExt.codUsuarioDefiniu
  )
  tblProtocoloAssinaturaExts2: TblProtocoloAssinaturaExt[];

  @OneToMany(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) => tblProtocoloDocumento.codUsuarioExterno
  )
  tblProtocoloDocumentos: TblProtocoloDocumento[];

  @OneToMany(
    () => TblProtocoloRequerente,
    (tblProtocoloRequerente) => tblProtocoloRequerente.codUsuarioExterno
  )
  tblProtocoloRequerentes: TblProtocoloRequerente[];

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblSegUsuarioExternos
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;

  @ManyToOne(
    () => TblPerguntaSecreta,
    (tblPerguntaSecreta) => tblPerguntaSecreta.tblSegUsuarioExternos
  )
  @JoinColumn([
    {
      name: "COD_PERGUNTA_SECRETA",
      referencedColumnName: "codPerguntaSecreta",
    },
  ])
  codPerguntaSecreta: TblPerguntaSecreta;
}

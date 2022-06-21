import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";
import { TblDocumentoTipoAtributo } from "./TblDocumentoTipoAtributo";
import { TblDocumentoTipoModelo } from "./TblDocumentoTipoModelo";
import { TblDocumentoTipoPadrao } from "./TblDocumentoTipoPadrao";
import { TblDossieDocumentoTipo } from "./TblDossieDocumentoTipo";
import { TblFluxoTrabalhoConfigura } from "./TblFluxoTrabalhoConfigura";
import { TblProtocolo } from "./TblProtocolo";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblProtocoloTermo } from "./TblProtocoloTermo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_DOCUMENTO_TIPO", ["codDocumentoTipo"], { unique: true })
@Entity("TBL_DOCUMENTO_TIPO")
export class TblDocumentoTipo {
  @Column("clob", { name: "TXT_RESUMO_PADRAO", nullable: true })
  txtResumoPadrao: string | null;

  @Column("varchar2", { name: "TXT_DOCUMENTO_TIPO", length: 255 })
  txtDocumentoTipo: string;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 100 })
  txtArquivo: string | null;

  @Column("number", { name: "COD_TERMO", scale: 0, default: () => "(0)" })
  codTermo: number;

  @Column("number", {
    name: "COD_PRIORIZAR_JUDICIAL",
    nullable: true,
    scale: 0,
  })
  codPriorizarJudicial: number | null;

  @Column("number", {
    name: "COD_PRAZO_PADRAO_NOTIFICACAO",
    scale: 0,
    default: () => "(0)",
  })
  codPrazoPadraoNotificacao: number;

  @Column("number", {
    name: "COD_PRAZO_PADRAO",
    scale: 0,
    default: () => "(0)",
  })
  codPrazoPadrao: number;

  @Column("number", {
    name: "COD_NUMERACAO_REINICIAR",
    scale: 0,
    default: () => "(1)",
  })
  codNumeracaoReiniciar: number;

  @Column("number", { name: "COD_NUMERACAO", scale: 0, default: () => "(1)" })
  codNumeracao: number;

  @Column("number", { name: "COD_FUNCAO", nullable: true, scale: 0 })
  codFuncao: number | null;

  @Column("number", { name: "COD_FINANCEIRO", scale: 0, default: () => "(0)" })
  codFinanceiro: number;

  @Column("number", { name: "COD_EXTERNO", scale: 0, default: () => "(0)" })
  codExterno: number;

  @Column("number", { primary: true, name: "COD_DOCUMENTO_TIPO", scale: 0 })
  codDocumentoTipo: number;

  @Column("number", {
    name: "COD_DOCUMENTO_PADRAO",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codDocumentoPadrao: number | null;

  @Column("number", { name: "COD_CONJUNTO", scale: 0, default: () => "(0)" })
  codConjunto: number;

  @Column("number", { name: "COD_CHAVE_SICNET", nullable: true, scale: 0 })
  codChaveSicnet: number | null;

  @Column("number", { name: "COD_CADASTRO", scale: 0, default: () => "(1)" })
  codCadastro: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_ASSUNTO_PADRAO", nullable: true, scale: 0 })
  codAssuntoPadrao: number | null;

  @Column("number", { name: "COD_ASSINATURA", scale: 0, default: () => "(0)" })
  codAssinatura: number;

  @Column("number", {
    name: "COD_ALTERAR_ACESSO_TIPO",
    scale: 0,
    default: () => "(1)",
  })
  codAlterarAcessoTipo: number;

  @Column("number", { name: "COD_ACESSO_TIPO", scale: 0, default: () => "(0)" })
  codAcessoTipo: number;

  @OneToMany(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.codDocumentoTipo
  )
  tblAcervoDocumentos: TblAcervoDocumento[];

  @OneToMany(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) => tblAssuntoDocumentoTipo.codDocumentoTipo
  )
  tblAssuntoDocumentoTipos: TblAssuntoDocumentoTipo[];

  @OneToMany(
    () => TblDocumentoTipoAtributo,
    (tblDocumentoTipoAtributo) => tblDocumentoTipoAtributo.codDocumentoTipo2
  )
  tblDocumentoTipoAtributos: TblDocumentoTipoAtributo[];

  @OneToMany(
    () => TblDocumentoTipoModelo,
    (tblDocumentoTipoModelo) => tblDocumentoTipoModelo.codDocumentoTipo
  )
  tblDocumentoTipoModelos: TblDocumentoTipoModelo[];

  @OneToMany(
    () => TblDocumentoTipoPadrao,
    (tblDocumentoTipoPadrao) => tblDocumentoTipoPadrao.codDocumentoTipo2
  )
  tblDocumentoTipoPadraos: TblDocumentoTipoPadrao[];

  @OneToMany(
    () => TblDossieDocumentoTipo,
    (tblDossieDocumentoTipo) => tblDossieDocumentoTipo.codDocumentoTipo
  )
  tblDossieDocumentoTipos: TblDossieDocumentoTipo[];

  @OneToMany(
    () => TblFluxoTrabalhoConfigura,
    (tblFluxoTrabalhoConfigura) => tblFluxoTrabalhoConfigura.codDocumentoTipo
  )
  tblFluxoTrabalhoConfiguras: TblFluxoTrabalhoConfigura[];

  @OneToMany(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.codDocumentoTipo2
  )
  tblProtocolos: TblProtocolo[];

  @OneToMany(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) => tblProtocoloDocumento.codDocumentoTipo
  )
  tblProtocoloDocumentos: TblProtocoloDocumento[];

  @OneToMany(
    () => TblProtocoloTermo,
    (tblProtocoloTermo) => tblProtocoloTermo.codDocumentoTipo2
  )
  tblProtocoloTermos: TblProtocoloTermo[];

  @ManyToMany(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblDocumentoTipos
  )
  @JoinTable({
    name: "TBL_SEG_USUARIO_DOCUMENTO_TIPO",
    joinColumns: [
      { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
    ],
    inverseJoinColumns: [
      { name: "COD_USUARIO", referencedColumnName: "codUsuario" },
    ],
  })
  tblSegUsuarios: TblSegUsuario[];
}

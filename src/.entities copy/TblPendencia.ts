import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";
import { TblProtocolo } from "./TblProtocolo";
import { TblOrgao } from "./TblOrgao";
import { TblPendenciaSituacao } from "./TblPendenciaSituacao";
import { TblPendenciaTipo } from "./TblPendenciaTipo";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblPendenciaArquivo } from "./TblPendenciaArquivo";
import { TblPendenciaExtensaoArqRes } from "./TblPendenciaExtensaoArqRes";
import { TblPendenciaResposta } from "./TblPendenciaResposta";

@Index("PK_TBL_PENDENCIA", ["codPendencia"], { unique: true })
@Entity("TBL_PENDENCIA")
export class TblPendencia {
  @Column("varchar2", { name: "TXT_RESPOSTA", nullable: true, length: 600 })
  txtResposta: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 1500 })
  txtDescricao: string;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 1000 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_VISUALIZACAO", nullable: true })
  dtVisualizacao: Date | null;

  @Column("date", { name: "DT_RESPOSTA", nullable: true })
  dtResposta: Date | null;

  @Column("date", { name: "DT_PRAZO_RESPOSTA", nullable: true })
  dtPrazoResposta: Date | null;

  @Column("date", { name: "DT_LEITURA", nullable: true })
  dtLeitura: Date | null;

  @Column("date", { name: "DT_CADASTRO", default: () => "sysdate" })
  dtCadastro: Date;

  @Column("number", { name: "COD_USUARIO_RESPOSTA", nullable: true })
  codUsuarioResposta: number | null;

  @Column("number", { name: "COD_USUARIO_EXTERNO_RESPOSTA", nullable: true })
  codUsuarioExternoResposta: number | null;

  @Column("number", { name: "COD_PROTOCOLO_REFERENCIA", nullable: true })
  codProtocoloReferencia: number | null;

  @Column("number", {
    name: "COD_PERMITE_ALTERAR_SOLICITA",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codPermiteAlterarSolicita: number;

  @Column("number", { primary: true, name: "COD_PENDENCIA" })
  codPendencia: number;

  @Column("number", {
    name: "COD_ARQUIVO_OBRIGAT_RESPOSTA",
    default: () => "(0)",
  })
  codArquivoObrigatResposta: number;

  @Column("number", {
    name: "COD_ARQUIVO_LEITURA",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codArquivoLeitura: number | null;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblPendencias
  )
  @JoinColumn([
    {
      name: "COD_USUARIO_VISUALIZACAO",
      referencedColumnName: "codUsuarioExterno",
    },
  ])
  codUsuarioVisualizacao: TblSegUsuarioExterno;

  @ManyToOne(() => TblProtocolo, (tblProtocolo) => tblProtocolo.tblPendencias)
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo: TblProtocolo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblPendencias)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(
    () => TblPendenciaSituacao,
    (tblPendenciaSituacao) => tblPendenciaSituacao.tblPendencias
  )
  @JoinColumn([
    {
      name: "COD_PENDENCIA_SITUACAO",
      referencedColumnName: "codPendenciaSituacao",
    },
  ])
  codPendenciaSituacao: TblPendenciaSituacao;

  @ManyToOne(
    () => TblPendenciaTipo,
    (tblPendenciaTipo) => tblPendenciaTipo.tblPendencias
  )
  @JoinColumn([
    { name: "COD_PENDENCIA_TIPO", referencedColumnName: "codPendenciaTipo" },
  ])
  codPendenciaTipo: TblPendenciaTipo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblPendencias
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @OneToMany(
    () => TblPendenciaArquivo,
    (tblPendenciaArquivo) => tblPendenciaArquivo.codPendencia
  )
  tblPendenciaArquivos: TblPendenciaArquivo[];

  @OneToMany(
    () => TblPendenciaExtensaoArqRes,
    (tblPendenciaExtensaoArqRes) => tblPendenciaExtensaoArqRes.codPendencia2
  )
  tblPendenciaExtensaoArqRes: TblPendenciaExtensaoArqRes[];

  @OneToMany(
    () => TblPendenciaResposta,
    (tblPendenciaResposta) => tblPendenciaResposta.codPendencia
  )
  tblPendenciaRespostas: TblPendenciaResposta[];
}

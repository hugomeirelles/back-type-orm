import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblPendencia } from "./TblPendencia";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";
import { TblPendenciaRespostaArquivo } from "./TblPendenciaRespostaArquivo";

@Index("TBL_PENDENCIA_RESPOSTA_PK", ["codPendenciaResposta"], { unique: true })
@Entity("TBL_PENDENCIA_RESPOSTA")
export class TblPendenciaResposta {
  @Column("varchar2", { name: "TXT_RESPOSTA", length: 600 })
  txtResposta: string;

  @Column("varchar2", {
    name: "TXT_JUSTIFICATIVA",
    nullable: true,
    length: 500,
  })
  txtJustificativa: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 1000 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_RESPOSTA" })
  dtResposta: Date;

  @Column("date", { name: "DT_ANALISE", nullable: true })
  dtAnalise: Date | null;

  @Column("number", { name: "COD_SITUACAO_ACEITE", nullable: true })
  codSituacaoAceite: number | null;

  @Column("number", { name: "COD_PENDENCIA_SITUACAO", nullable: true })
  codPendenciaSituacao: number | null;

  @Column("number", { primary: true, name: "COD_PENDENCIA_RESPOSTA" })
  codPendenciaResposta: number;

  @Column("number", {
    name: "COD_ACEITE_SITUACAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAceiteSituacao: number | null;

  @ManyToOne(
    () => TblPendencia,
    (tblPendencia) => tblPendencia.tblPendenciaRespostas
  )
  @JoinColumn([{ name: "COD_PENDENCIA", referencedColumnName: "codPendencia" }])
  codPendencia: TblPendencia;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblPendenciaRespostas
  )
  @JoinColumn([
    { name: "COD_USUARIO_RESPOSTA", referencedColumnName: "codUsuario" },
  ])
  codUsuarioResposta: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblPendenciaRespostas2
  )
  @JoinColumn([
    { name: "COD_USUARIO_ANALISE", referencedColumnName: "codUsuario" },
  ])
  codUsuarioAnalise: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblPendenciaRespostas
  )
  @JoinColumn([
    {
      name: "COD_USUARIO_EXTERNO_RESPOSTA",
      referencedColumnName: "codUsuarioExterno",
    },
  ])
  codUsuarioExternoResposta: TblSegUsuarioExterno;

  @OneToMany(
    () => TblPendenciaRespostaArquivo,
    (tblPendenciaRespostaArquivo) =>
      tblPendenciaRespostaArquivo.codPendenciaResposta
  )
  tblPendenciaRespostaArquivos: TblPendenciaRespostaArquivo[];
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoConfigura } from "./TblFluxoTrabalhoConfigura";
import { TblAcao } from "./TblAcao";

@Index("PK_ACAO_ATIVIDADE", ["codAcaoAtividade"], { unique: true })
@Entity("TBL_ACAO_ATIVIDADE")
export class TblAcaoAtividade {
  @Column("number", { name: "COD_ATIVO", precision: 22, scale: 0 })
  codAtivo: number;

  @Column("number", {
    name: "COD_ORDEM",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrdem: number | null;

  @Column("varchar2", {
    name: "TXT_RESPOSTA_ACAO_ATIVIDADE",
    nullable: true,
    length: 255,
  })
  txtRespostaAcaoAtividade: string | null;

  @Column("varchar2", {
    name: "TXT_PERGUNTA_ACAO",
    nullable: true,
    length: 255,
  })
  txtPerguntaAcao: string | null;

  @Column("char", { name: "TXT_GRUPO_HIERARQUIA", nullable: true, length: 1 })
  txtGrupoHierarquia: string | null;

  @Column("number", {
    name: "COD_GRUPO_ATIVIDADE_PARALELA",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codGrupoAtividadeParalela: number | null;

  @Column("char", { name: "TXT_TIPO_EXECUCAO_ACAO", nullable: true, length: 1 })
  txtTipoExecucaoAcao: string | null;

  @Column("number", {
    name: "COD_PRINCIPAL",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codPrincipal: number | null;

  @Column("number", {
    name: "COD_ORGAO_DESTINO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrgaoDestino: number | null;

  @Column("number", {
    name: "COD_PROXIMA_ATIVIDADE",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codProximaAtividade: number | null;

  @Column("number", {
    name: "COD_DESTINO_FLUXO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codDestinoFluxo: number | null;

  @Column("number", { name: "COD_ATIVIDADE_FLUXO", precision: 22, scale: 0 })
  codAtividadeFluxo: number;

  @Column("number", {
    primary: true,
    name: "COD_ACAO_ATIVIDADE",
    precision: 22,
    scale: 0,
  })
  codAcaoAtividade: number;

  @ManyToOne(
    () => TblFluxoTrabalhoConfigura,
    (tblFluxoTrabalhoConfigura) => tblFluxoTrabalhoConfigura.tblAcaoAtividades
  )
  @JoinColumn([
    { name: "COD_FLUXO_TRABALHO", referencedColumnName: "codFluxoTrabalho" },
  ])
  codFluxoTrabalho: TblFluxoTrabalhoConfigura;

  @ManyToOne(() => TblAcao, (tblAcao) => tblAcao.tblAcaoAtividades)
  @JoinColumn([{ name: "COD_ACAO", referencedColumnName: "codAcao" }])
  codAcao: TblAcao;

  @ManyToOne(
    () => TblFluxoTrabalhoConfigura,
    (tblFluxoTrabalhoConfigura) => tblFluxoTrabalhoConfigura.tblAcaoAtividades2
  )
  @JoinColumn([
    { name: "COD_SUBFLUXO", referencedColumnName: "codFluxoTrabalho" },
  ])
  codSubfluxo: TblFluxoTrabalhoConfigura;
}

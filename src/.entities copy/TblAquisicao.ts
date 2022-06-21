import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_AQUISICAO", ["codAquisicao"], { unique: true })
@Entity("TBL_AQUISICAO")
export class TblAquisicao {
  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("clob", { name: "TXT_OBJETO", nullable: true })
  txtObjeto: string | null;

  @Column("varchar2", { name: "TXT_FONTE_RECURSO", nullable: true, length: 30 })
  txtFonteRecurso: string | null;

  @Column("varchar2", {
    name: "TXT_CLASSIFICACAO_ORCAMENTARIA",
    nullable: true,
    length: 50,
  })
  txtClassificacaoOrcamentaria: string | null;

  @Column("date", { name: "DT_AQUISICAO", default: () => "SYSDATE" })
  dtAquisicao: Date;

  @Column("number", {
    name: "COD_VALOR_TOTAL_ESTIMADO",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorTotalEstimado: number | null;

  @Column("number", { name: "COD_USUARIO", nullable: true, scale: 0 })
  codUsuario: number | null;

  @Column("number", { name: "COD_SITUACAO", scale: 0, default: () => "0" })
  codSituacao: number;

  @Column("number", {
    name: "COD_PROTOCOLO",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  codProtocolo: number | null;

  @Column("number", { name: "COD_ORGAO_DEMANDANTE", nullable: true, scale: 0 })
  codOrgaoDemandante: number | null;

  @Column("number", { name: "COD_ORGAO_ATUAL", scale: 0, default: () => "1" })
  codOrgaoAtual: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { name: "COD_AQUISICAO", scale: 0 })
  codAquisicao: number;
}

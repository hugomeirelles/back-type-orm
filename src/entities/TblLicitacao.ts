import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LICITACAO", ["codLicitacao"], { unique: true })
@Entity("TBL_LICITACAO")
export class TblLicitacao {
  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("clob", { name: "TXT_OBJETO", nullable: true })
  txtObjeto: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", length: 20 })
  txtNumero: string;

  @Column("date", { name: "HR_ABERTURA", nullable: true })
  hrAbertura: Date | null;

  @Column("date", { name: "DT_SITUACAO", nullable: true })
  dtSituacao: Date | null;

  @Column("date", { name: "DT_ABERTURA", nullable: true })
  dtAbertura: Date | null;

  @Column("number", {
    name: "COD_VALOR_TOTAL_ESTIMADO",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorTotalEstimado: number | null;

  @Column("number", { name: "COD_PUBLICACAO", scale: 0, default: () => "0" })
  codPublicacao: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO_DEMANDANTE", nullable: true, scale: 0 })
  codOrgaoDemandante: number | null;

  @Column("number", {
    name: "COD_LICITACAO_SITUACAO",
    scale: 0,
    default: () => "1",
  })
  codLicitacaoSituacao: number;

  @Column("number", {
    name: "COD_LICITACAO_MODALIDADE",
    nullable: true,
    scale: 0,
  })
  codLicitacaoModalidade: number | null;

  @Column("number", { name: "COD_LICITACAO", scale: 0 })
  codLicitacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

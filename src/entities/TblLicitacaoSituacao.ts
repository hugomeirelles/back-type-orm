import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LICITACAO_SITUACAO", ["codLicitacaoSituacao"], { unique: true })
@Entity("TBL_LICITACAO_SITUACAO")
export class TblLicitacaoSituacao {
  @Column("varchar2", { name: "TXT_LICITACAO_SITUACAO", length: 50 })
  txtLicitacaoSituacao: string;

  @Column("number", { primary: true, name: "COD_LICITACAO_SITUACAO", scale: 0 })
  codLicitacaoSituacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0 })
  codAtivo: number;
}

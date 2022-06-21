import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LICITACAO_MODALIDADE", ["codLicitacaoModalidade"], {
  unique: true,
})
@Entity("TBL_LICITACAO_MODALIDADE")
export class TblLicitacaoModalidade {
  @Column("varchar2", {
    name: "TXT_LICITACAO_MODALIDADE_SIGLA",
    nullable: true,
    length: 5,
  })
  txtLicitacaoModalidadeSigla: string | null;

  @Column("varchar2", { name: "TXT_LICITACAO_MODALIDADE", length: 255 })
  txtLicitacaoModalidade: string;

  @Column("number", {
    primary: true,
    name: "COD_LICITACAO_MODALIDADE",
    scale: 0,
  })
  codLicitacaoModalidade: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

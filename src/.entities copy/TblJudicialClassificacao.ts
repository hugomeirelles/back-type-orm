import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_CLASSIFICACAO", ["codJudicialClassificacao"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_CLASSIFICACAO")
export class TblJudicialClassificacao {
  @Column("varchar2", { name: "TXT_JUDICIAL_CLASSIFICACAO", length: 50 })
  txtJudicialClassificacao: string;

  @Column("number", {
    primary: true,
    name: "COD_JUDICIAL_CLASSIFICACAO",
    scale: 0,
  })
  codJudicialClassificacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

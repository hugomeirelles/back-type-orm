import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_EMPREENDIMENTO_TIPO", ["codEmpreendimentoTipo"], {
  unique: true,
})
@Entity("TBL_EMPREENDIMENTO_TIPO")
export class TblEmpreendimentoTipo {
  @Column("varchar2", { name: "TXT_EMPREENDIMENTO_TIPO", length: 100 })
  txtEmpreendimentoTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_EMPREENDIMENTO_TIPO",
    scale: 0,
  })
  codEmpreendimentoTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

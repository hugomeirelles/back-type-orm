import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_JUDIC_EMPREEN_TEMP",
  ["codJudicialTemp", "codJudicialEmpreendimento"],
  { unique: true }
)
@Entity("TBL_JUDICIAL_EMPREENDIMEN_TEMP")
export class TblJudicialEmpreendimenTemp {
  @Column("varchar2", { name: "TXT_EMPREENDIMENTO_NOME", length: 50 })
  txtEmpreendimentoNome: string;

  @Column("number", { primary: true, name: "COD_JUDICIAL_TEMP", scale: 0 })
  codJudicialTemp: number;

  @Column("number", {
    primary: true,
    name: "COD_JUDICIAL_EMPREENDIMENTO",
    scale: 0,
  })
  codJudicialEmpreendimento: number;

  @Column("number", { name: "COD_EMPREENDIMENTO_TIPO", scale: 0 })
  codEmpreendimentoTipo: number;
}

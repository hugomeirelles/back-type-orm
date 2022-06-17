import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicial } from "./TblJudicial";

@Index(
  "PK_TBL_JUDICIAL_EMPREENDIMENTO",
  ["codJudicial", "codJudicialEmpreendimento"],
  { unique: true }
)
@Entity("TBL_JUDICIAL_EMPREENDIMENTO")
export class TblJudicialEmpreendimento {
  @Column("varchar2", { name: "TXT_EMPREENDIMENTO_NOME", length: 50 })
  txtEmpreendimentoNome: string;

  @Column("number", {
    primary: true,
    name: "COD_JUDICIAL_EMPREENDIMENTO",
    scale: 0,
  })
  codJudicialEmpreendimento: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { name: "COD_EMPREENDIMENTO_TIPO", scale: 0 })
  codEmpreendimentoTipo: number;

  @ManyToOne(
    () => TblJudicial,
    (tblJudicial) => tblJudicial.tblJudicialEmpreendimentos
  )
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;
}

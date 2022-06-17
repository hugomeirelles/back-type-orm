import { Column, Entity } from "typeorm";

@Entity("TBL_RELATORIO_ATUALIZACAO")
export class TblRelatorioAtualizacao {
  @Column("varchar2", { name: "TXT_RELATORIO", nullable: true, length: 200 })
  txtRelatorio: string | null;

  @Column("date", { name: "DT_ATUALIZACAO", nullable: true })
  dtAtualizacao: Date | null;

  @Column("number", { name: "COD_RELATORIO" })
  codRelatorio: number;
}

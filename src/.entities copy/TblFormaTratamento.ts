import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblParte } from "./TblParte";

@Index("PK_TBL_FORMA_TRATAMENTO", ["codFormaTratamento"], { unique: true })
@Entity("TBL_FORMA_TRATAMENTO")
export class TblFormaTratamento {
  @Column("varchar2", {
    name: "TXT_FORMA_TRATAMENTO_COMPLETA",
    nullable: true,
    length: 100,
  })
  txtFormaTratamentoCompleta: string | null;

  @Column("varchar2", { name: "TXT_FORMA_TRATAMENTO", length: 20 })
  txtFormaTratamento: string;

  @Column("number", { primary: true, name: "COD_FORMA_TRATAMENTO", scale: 0 })
  codFormaTratamento: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(() => TblParte, (tblParte) => tblParte.codFormaTratamento)
  tblPartes: TblParte[];
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PASTA_TIPO", ["codPastaTipo"], { unique: true })
@Entity("TBL_PASTA_TIPO")
export class TblPastaTipo {
  @Column("varchar2", { name: "TXT_PASTA_TIPO", nullable: true, length: 255 })
  txtPastaTipo: string | null;

  @Column("number", {
    primary: true,
    name: "COD_PASTA_TIPO",
    precision: 10,
    scale: 0,
  })
  codPastaTipo: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}

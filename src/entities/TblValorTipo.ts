import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_VALOR_TIPO", ["codValorTipo"], { unique: true })
@Entity("TBL_VALOR_TIPO")
export class TblValorTipo {
  @Column("varchar2", { name: "TXT_VALOR_TIPO", length: 100 })
  txtValorTipo: string;

  @Column("number", { primary: true, name: "COD_VALOR_TIPO", scale: 0 })
  codValorTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

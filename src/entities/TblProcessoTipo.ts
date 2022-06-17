import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROCESSO_TIPO", ["codProcessoTipo"], { unique: true })
@Entity("TBL_PROCESSO_TIPO")
export class TblProcessoTipo {
  @Column("varchar2", { name: "TXT_PROCESSO_TIPO", length: 255 })
  txtProcessoTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_PROCESSO_TIPO",
    precision: 10,
    scale: 0,
  })
  codProcessoTipo: number;
}

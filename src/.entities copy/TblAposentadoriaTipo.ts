import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269524", ["codAposentadoriaTipo"], { unique: true })
@Entity("TBL_APOSENTADORIA_TIPO")
export class TblAposentadoriaTipo {
  @Column("varchar2", { name: "TXT_NOME", length: 60 })
  txtNome: string;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_APOSENTADORIA_TIPO" })
  codAposentadoriaTipo: number;
}

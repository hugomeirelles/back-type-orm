import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_CONTADOR_TIPO", ["codSistemaContadorTipo"], {
  unique: true,
})
@Entity("TBL_SISTEMA_CONTADOR_TIPO")
export class TblSistemaContadorTipo {
  @Column("varchar2", { name: "TXT_SISTEMA_CONTADOR_TIPO", length: 255 })
  txtSistemaContadorTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_SISTEMA_CONTADOR_TIPO",
    scale: 0,
  })
  codSistemaContadorTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

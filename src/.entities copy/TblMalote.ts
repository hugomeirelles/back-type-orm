import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_MALOTE", ["codMalote"], { unique: true })
@Entity("TBL_MALOTE")
export class TblMalote {
  @Column("varchar2", { name: "TXT_MALOTE", length: 255 })
  txtMalote: string;

  @Column("number", {
    primary: true,
    name: "COD_MALOTE",
    precision: 10,
    scale: 0,
  })
  codMalote: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}

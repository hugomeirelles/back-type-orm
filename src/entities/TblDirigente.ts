import { Column, Entity, Index } from "typeorm";

@Index("PK_DIRIGENTE", ["codDirigente"], { unique: true })
@Entity("TBL_DIRIGENTE")
export class TblDirigente {
  @Column("varchar2", { name: "TXT_DIRIGENTE", length: 255 })
  txtDirigente: string;

  @Column("number", { primary: true, name: "COD_DIRIGENTE", scale: 0 })
  codDirigente: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "0" })
  codAtivo: number;
}

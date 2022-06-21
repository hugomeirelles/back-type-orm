import { Column, Entity, Index } from "typeorm";

@Index("PK_CLASSE_CARGO_PADRAO", ["codClasseCargoPadrao"], { unique: true })
@Entity("TBL_CLASSE_CARGO_PADRAO")
export class TblClasseCargoPadrao {
  @Column("varchar2", { name: "TXT_CLASSE_CARGO_PADRAO", length: 255 })
  txtClasseCargoPadrao: string;

  @Column("number", { primary: true, name: "COD_CLASSE_CARGO_PADRAO" })
  codClasseCargoPadrao: number;
}

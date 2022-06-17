import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_MOEDA", ["codMoeda"], { unique: true })
@Entity("TBL_MOEDA")
export class TblMoeda {
  @Column("varchar2", { name: "TXT_MOEDA", length: 50 })
  txtMoeda: string;

  @Column("number", { primary: true, name: "COD_MOEDA", scale: 0 })
  codMoeda: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

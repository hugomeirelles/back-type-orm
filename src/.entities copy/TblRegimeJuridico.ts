import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_REGIME_JURIDICO", ["codRegimeJuridico"], { unique: true })
@Entity("TBL_REGIME_JURIDICO")
export class TblRegimeJuridico {
  @Column("varchar2", {
    name: "TXT_REGIME_JURIDICO",
    nullable: true,
    length: 255,
  })
  txtRegimeJuridico: string | null;

  @Column("number", {
    primary: true,
    name: "COD_REGIME_JURIDICO",
    precision: 10,
    scale: 0,
  })
  codRegimeJuridico: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}

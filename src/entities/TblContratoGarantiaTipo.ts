import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblContratoGarantia } from "./TblContratoGarantia";

@Index("PK_TBL_CONTRATO_GARANTIA_TIPO", ["codGarantiaTipo"], { unique: true })
@Entity("TBL_CONTRATO_GARANTIA_TIPO")
export class TblContratoGarantiaTipo {
  @Column("varchar2", {
    name: "TXT_GARANTIA_TIPO",
    nullable: true,
    length: 255,
  })
  txtGarantiaTipo: string | null;

  @Column("number", { primary: true, name: "COD_GARANTIA_TIPO", scale: 0 })
  codGarantiaTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblContratoGarantia,
    (tblContratoGarantia) => tblContratoGarantia.codGarantiaTipo
  )
  tblContratoGarantias: TblContratoGarantia[];
}

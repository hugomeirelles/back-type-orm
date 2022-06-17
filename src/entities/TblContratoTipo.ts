import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblContrato } from "./TblContrato";

@Index("PK_TBL_CONTRATO_TIPO", ["codContratoTipo"], { unique: true })
@Entity("TBL_CONTRATO_TIPO")
export class TblContratoTipo {
  @Column("varchar2", { name: "TXT_CONTRATO_TIPO", length: 50 })
  txtContratoTipo: string;

  @Column("number", { primary: true, name: "COD_CONTRATO_TIPO", scale: 0 })
  codContratoTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(() => TblContrato, (tblContrato) => tblContrato.codContratoTipo)
  tblContratoes: TblContrato[];
}

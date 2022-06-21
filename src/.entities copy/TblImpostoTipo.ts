import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblContratoExecucaoImposto } from "./TblContratoExecucaoImposto";

@Index("PK_TBL_IMPOSTO_TIPO", ["codImpostoTipo"], { unique: true })
@Entity("TBL_IMPOSTO_TIPO")
export class TblImpostoTipo {
  @Column("varchar2", { name: "TXT_IMPOSTO_TIPO", length: 255 })
  txtImpostoTipo: string;

  @Column("number", { primary: true, name: "COD_IMPOSTO_TIPO", scale: 0 })
  codImpostoTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblContratoExecucaoImposto,
    (tblContratoExecucaoImposto) => tblContratoExecucaoImposto.codImpostoTipo
  )
  tblContratoExecucaoImpostos: TblContratoExecucaoImposto[];
}

import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblContrato } from "./TblContrato";

@Index("PK_TBL_CONTRATO_REGIME_EXECUC", ["codContratoRegimeExecucao"], {
  unique: true,
})
@Entity("TBL_CONTRATO_REGIME_EXECUCAO")
export class TblContratoRegimeExecucao {
  @Column("varchar2", { name: "TXT_CONTRATO_REGIME_EXECUCAO", length: 255 })
  txtContratoRegimeExecucao: string;

  @Column("number", {
    primary: true,
    name: "COD_CONTRATO_REGIME_EXECUCAO",
    scale: 0,
  })
  codContratoRegimeExecucao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblContrato,
    (tblContrato) => tblContrato.codContratoRegimeExecucao
  )
  tblContratoes: TblContrato[];
}

import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblContrato } from "./TblContrato";

@Index("PK_TBL_CONTRATO_MODALIDADE", ["codContratoModalidade"], {
  unique: true,
})
@Entity("TBL_CONTRATO_MODALIDADE")
export class TblContratoModalidade {
  @Column("varchar2", { name: "TXT_CONTRATO_MODALIDADE", length: 255 })
  txtContratoModalidade: string;

  @Column("number", {
    primary: true,
    name: "COD_CONTRATO_MODALIDADE",
    scale: 0,
  })
  codContratoModalidade: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblContrato,
    (tblContrato) => tblContrato.codContratoModalidade
  )
  tblContratoes: TblContrato[];
}

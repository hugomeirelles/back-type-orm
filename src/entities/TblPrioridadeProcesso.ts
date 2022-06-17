import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";

@Index("PK_PRIORIDADE_PROCESSO", ["codPrioridadeProcesso"], { unique: true })
@Entity("TBL_PRIORIDADE_PROCESSO")
export class TblPrioridadeProcesso {
  @Column("varchar2", { name: "TXT_PRIORIDADE_PROCESSO", length: 100 })
  txtPrioridadeProcesso: string;

  @Column("number", {
    primary: true,
    name: "COD_PRIORIDADE_PROCESSO",
    precision: 2,
    scale: 0,
  })
  codPrioridadeProcesso: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;

  @OneToMany(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.codPrioridadeProcesso
  )
  tblProtocolos: TblProtocolo[];
}

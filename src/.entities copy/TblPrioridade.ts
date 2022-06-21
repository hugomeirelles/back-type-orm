import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblMinutaMovimento } from "./TblMinutaMovimento";
import { TblProtocoloMovimento } from "./TblProtocoloMovimento";

@Index("PK_TBL_PRIORIDADE", ["codPrioridade"], { unique: true })
@Entity("TBL_PRIORIDADE")
export class TblPrioridade {
  @Column("varchar2", { name: "TXT_PRIORIDADE", length: 20 })
  txtPrioridade: string;

  @Column("number", { primary: true, name: "COD_PRIORIDADE", scale: 0 })
  codPrioridade: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblMinutaMovimento,
    (tblMinutaMovimento) => tblMinutaMovimento.codPrioridade
  )
  tblMinutaMovimentos: TblMinutaMovimento[];

  @OneToMany(
    () => TblProtocoloMovimento,
    (tblProtocoloMovimento) => tblProtocoloMovimento.codPrioridade2
  )
  tblProtocoloMovimentos: TblProtocoloMovimento[];
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_MOTIVO_RECUSA", ["codMotivoRecusa"], { unique: true })
@Entity("TBL_MOTIVO_RECUSA")
export class TblMotivoRecusa {
  @Column("varchar2", { name: "TXT_MOTIVO_RECUSA", length: 50 })
  txtMotivoRecusa: string;

  @Column("number", {
    primary: true,
    name: "COD_MOTIVO_RECUSA",
    precision: 10,
    scale: 0,
  })
  codMotivoRecusa: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}

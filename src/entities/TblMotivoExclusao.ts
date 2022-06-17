import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_MOTIVO_EXCLUSAO", ["codMotivoExclusao"], { unique: true })
@Entity("TBL_MOTIVO_EXCLUSAO")
export class TblMotivoExclusao {
  @Column("varchar2", {
    name: "TXT_MOTIVO_EXCLUSAO",
    nullable: true,
    length: 255,
  })
  txtMotivoExclusao: string | null;

  @Column("number", {
    primary: true,
    name: "COD_MOTIVO_EXCLUSAO",
    precision: 10,
    scale: 0,
  })
  codMotivoExclusao: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}

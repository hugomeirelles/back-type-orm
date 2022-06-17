import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_STATUS_PROTUS", ["staCodigo"], { unique: true })
@Entity("TBL_STATUS_PROTUS")
export class TblStatusProtus {
  @Column("varchar2", { name: "STA_TIPO_MOV", nullable: true, length: 255 })
  staTipoMov: string | null;

  @Column("varchar2", { name: "STA_NOMERED", nullable: true, length: 255 })
  staNomered: string | null;

  @Column("varchar2", { name: "STA_NOME", nullable: true, length: 255 })
  staNome: string | null;

  @Column("varchar2", { name: "STA_LOTE", nullable: true, length: 255 })
  staLote: string | null;

  @Column("varchar2", { name: "STA_CONTA_DEMORA", nullable: true, length: 255 })
  staContaDemora: string | null;

  @Column("number", {
    primary: true,
    name: "STA_CODIGO",
    precision: 19,
    scale: 0,
  })
  staCodigo: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;
}

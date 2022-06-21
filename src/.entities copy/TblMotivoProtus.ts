import { Column, Entity } from "typeorm";

@Entity("TBL_MOTIVO_PROTUS")
export class TblMotivoProtus {
  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 255 })
  txtDescricao: string | null;

  @Column("number", { name: "STA_CODIGO", precision: 19, scale: 0 })
  staCodigo: number;

  @Column("number", { name: "COD_MOTIVO_PROTUS", precision: 19, scale: 0 })
  codMotivoProtus: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;
}

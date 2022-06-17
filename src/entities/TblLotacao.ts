import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269862", ["codLotacao"], { unique: true })
@Entity("TBL_LOTACAO")
export class TblLotacao {
  @Column("varchar2", { name: "TXT_LOTACAO", length: 100 })
  txtLotacao: string;

  @Column("varchar2", { name: "TXT_CODIGO", nullable: true, length: 15 })
  txtCodigo: string | null;

  @Column("number", {
    primary: true,
    name: "COD_LOTACAO",
    precision: 10,
    scale: 0,
  })
  codLotacao: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;
}

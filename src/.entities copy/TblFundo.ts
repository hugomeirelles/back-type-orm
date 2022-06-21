import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_FUNDO", ["codFundo"], { unique: true })
@Entity("TBL_FUNDO")
export class TblFundo {
  @Column("varchar2", { name: "TXT_FUNDO", length: 255 })
  txtFundo: string;

  @Column("number", { primary: true, name: "COD_FUNDO", scale: 0 })
  codFundo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_ARMAZENAMENTO", ["codArmazenamento"], { unique: true })
@Entity("TBL_ARMAZENAMENTO")
export class TblArmazenamento {
  @Column("varchar2", { name: "TXT_ARMAZENAMENTO", length: 255 })
  txtArmazenamento: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_ARMAZENAMENTO_TIPO", scale: 0 })
  codArmazenamentoTipo: number;

  @Column("number", { name: "COD_ARMAZENAMENTO", scale: 0 })
  codArmazenamento: number;
}

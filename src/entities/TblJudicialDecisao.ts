import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_DECISAO", ["codJudicialDecisao"], { unique: true })
@Entity("TBL_JUDICIAL_DECISAO")
export class TblJudicialDecisao {
  @Column("varchar2", { name: "TXT_JUDICIAL_DECISAO", length: 100 })
  txtJudicialDecisao: string;

  @Column("number", { primary: true, name: "COD_JUDICIAL_DECISAO", scale: 0 })
  codJudicialDecisao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_DOMINIO", ["codJudicialDominio"], { unique: true })
@Entity("TBL_JUDICIAL_DOMINIO")
export class TblJudicialDominio {
  @Column("varchar2", {
    name: "TXT_JUDICIAL_DOMINIO",
    nullable: true,
    length: 255,
  })
  txtJudicialDominio: string | null;

  @Column("number", { primary: true, name: "COD_JUDICIAL_DOMINIO", scale: 0 })
  codJudicialDominio: number;

  @Column("number", { name: "COD_DOMINIO", scale: 0 })
  codDominio: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

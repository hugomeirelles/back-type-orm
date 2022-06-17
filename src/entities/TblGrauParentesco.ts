import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_GRAU_PARENTESCO", ["codGrauParentesco"], { unique: true })
@Entity("TBL_GRAU_PARENTESCO")
export class TblGrauParentesco {
  @Column("varchar2", {
    name: "TXT_GRAU_PARENTESCO",
    nullable: true,
    length: 255,
  })
  txtGrauParentesco: string | null;

  @Column("number", {
    primary: true,
    name: "COD_GRAU_PARENTESCO",
    precision: 10,
    scale: 0,
  })
  codGrauParentesco: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}

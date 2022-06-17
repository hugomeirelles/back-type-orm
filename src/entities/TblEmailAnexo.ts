import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_EMAIL_ANEXO", ["codEmail", "codEmailAnexo"], { unique: true })
@Entity("TBL_EMAIL_ANEXO")
export class TblEmailAnexo {
  @Column("varchar2", { name: "TXT_ANEXO", length: 4000 })
  txtAnexo: string;

  @Column("number", {
    primary: true,
    name: "COD_EMAIL_ANEXO",
    precision: 10,
    scale: 0,
  })
  codEmailAnexo: number;

  @Column("number", {
    primary: true,
    name: "COD_EMAIL",
    precision: 10,
    scale: 0,
  })
  codEmail: number;
}

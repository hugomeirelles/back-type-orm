import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_RELATORIO_META_ASSUNTO", ["codOrgao", "codAssunto"], {
  unique: true,
})
@Entity("TBL_RELATORIO_META_ASSUNTO")
export class TblRelatorioMetaAssunto {
  @Column("varchar2", { name: "TXT_ASSUNTO", nullable: true, length: 150 })
  txtAssunto: string | null;

  @Column("number", { name: "TOTAL", nullable: true })
  total: number | null;

  @Column("number", { primary: true, name: "COD_ORGAO" })
  codOrgao: number;

  @Column("number", { name: "COD_META", nullable: true })
  codMeta: number | null;

  @Column("number", { primary: true, name: "COD_ASSUNTO" })
  codAssunto: number;

  @Column("number", { name: "ACIMA", nullable: true })
  acima: number | null;

  @Column("number", { name: "ABAIXO", nullable: true })
  abaixo: number | null;
}

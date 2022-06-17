import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269804", ["codOrgao"], { unique: true })
@Entity("TBL_RELATORIO_META_GERAL")
export class TblRelatorioMetaGeral {
  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 150 })
  txtSigla: string | null;

  @Column("number", { name: "TOTAL", nullable: true })
  total: number | null;

  @Column("number", { primary: true, name: "COD_ORGAO" })
  codOrgao: number;

  @Column("number", { name: "ACIMA", nullable: true })
  acima: number | null;

  @Column("number", { name: "ABAIXO", nullable: true })
  abaixo: number | null;
}

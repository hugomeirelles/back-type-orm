import { Column, Entity } from "typeorm";

@Entity("TBL_LOG_MIGRACAO")
export class TblLogMigracao {
  @Column("varchar2", { name: "TXT_ROTINA", nullable: true, length: 50 })
  txtRotina: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 4000 })
  txtDescricao: string | null;

  @Column("varchar2", { name: "PROC_CODIGO", nullable: true, length: 20 })
  procCodigo: string | null;

  @Column("number", { name: "NUM_ORDEM", nullable: true })
  numOrdem: number | null;

  @Column("date", { name: "DT_MIGRACAO", nullable: true })
  dtMigracao: Date | null;

  @Column("varchar2", { name: "COD_ERRO", nullable: true, length: 20 })
  codErro: string | null;
}

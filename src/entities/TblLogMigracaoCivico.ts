import { Column, Entity } from "typeorm";

@Entity("TBL_LOG_MIGRACAO_CIVICO")
export class TblLogMigracaoCivico {
  @Column("varchar2", { name: "TXT_ROTINA", nullable: true, length: 255 })
  txtRotina: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 4000 })
  txtDescricao: string | null;

  @Column("date", { name: "DT_MIGRACAO", nullable: true })
  dtMigracao: Date | null;

  @Column("varchar2", { name: "COD_ERRO", nullable: true, length: 255 })
  codErro: string | null;

  @Column("varchar2", { name: "COD_CHAVE", nullable: true, length: 255 })
  codChave: string | null;
}

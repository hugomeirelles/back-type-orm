import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PLANO_INTERNO", ["codPlanoInterno"], { unique: true })
@Entity("TBL_PLANO_INTERNO")
export class TblPlanoInterno {
  @Column("varchar2", { name: "TXT_SIGLA", length: 9 })
  txtSigla: string;

  @Column("varchar2", {
    name: "TXT_PLANO_INTERNO",
    nullable: true,
    length: 255,
  })
  txtPlanoInterno: string | null;

  @Column("number", { primary: true, name: "COD_PLANO_INTERNO", scale: 0 })
  codPlanoInterno: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

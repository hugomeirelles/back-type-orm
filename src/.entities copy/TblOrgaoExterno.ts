import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269818", ["codOrgaoExterno"], { unique: true })
@Entity("TBL_ORGAO_EXTERNO")
export class TblOrgaoExterno {
  @Column("varchar2", { name: "TXT_SIGLA", length: 10 })
  txtSigla: string;

  @Column("varchar2", { name: "TXT_NOME", length: 100 })
  txtNome: string;

  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 255 })
  txtEndereco: string | null;

  @Column("varchar2", { name: "TXT_CEP", nullable: true, length: 50 })
  txtCep: string | null;

  @Column("number", { primary: true, name: "COD_ORGAO_EXTERNO" })
  codOrgaoExterno: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;
}

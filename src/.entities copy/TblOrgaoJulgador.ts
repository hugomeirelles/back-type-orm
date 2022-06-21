import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_ORGAO_JULGADOR", ["codOrgaoJulgador"], { unique: true })
@Entity("TBL_ORGAO_JULGADOR")
export class TblOrgaoJulgador {
  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 50 })
  txtSigla: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 255 })
  txtEndereco: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 255 })
  txtDescricao: string;

  @Column("varchar2", { name: "TXT_CIDADE", nullable: true, length: 255 })
  txtCidade: string | null;

  @Column("varchar2", { name: "TXT_CEP", nullable: true, length: 10 })
  txtCep: string | null;

  @Column("number", {
    name: "COD_ORGAO_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codOrgaoSuperior: number;

  @Column("number", { primary: true, name: "COD_ORGAO_JULGADOR", scale: 0 })
  codOrgaoJulgador: number;

  @Column("number", {
    name: "COD_INFORMAR_VARA",
    scale: 0,
    default: () => "(0)",
  })
  codInformarVara: number;

  @Column("number", {
    name: "COD_INFORMAR_COMARCA",
    scale: 0,
    default: () => "(0)",
  })
  codInformarComarca: number;

  @Column("number", { name: "COD_ESTADO", nullable: true, scale: 0 })
  codEstado: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}

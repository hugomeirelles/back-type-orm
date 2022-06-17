import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SEG_APLICACAO_AREA", ["codArea"], { unique: true })
@Entity("TBL_SEG_APLICACAO_AREA")
export class TblSegAplicacaoArea {
  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 50 })
  txtEndereco: string | null;

  @Column("varchar2", { name: "TXT_AREA_SISTEMA", nullable: true, length: 50 })
  txtAreaSistema: string | null;

  @Column("varchar2", { name: "TXT_AREA", length: 50 })
  txtArea: string;

  @Column("number", { name: "COD_RESPONSIVO", scale: 0, default: () => "(0)" })
  codResponsivo: number;

  @Column("number", { name: "COD_ORDEM", scale: 0 })
  codOrdem: number;

  @Column("number", { name: "COD_GERENCIA", scale: 0, default: () => "(1)" })
  codGerencia: number;

  @Column("number", {
    name: "COD_FUNCAO",
    nullable: true,
    scale: 0,
    default: () => "(0)",
  })
  codFuncao: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", {
    name: "COD_AREA_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codAreaSuperior: number;

  @Column("number", { primary: true, name: "COD_AREA", scale: 0 })
  codArea: number;

  @Column("number", { name: "COD_APLICACAO", scale: 0 })
  codAplicacao: number;

  @Column("number", { name: "COD_ACESSO_TIPO", scale: 0, default: () => "(1)" })
  codAcessoTipo: number;
}

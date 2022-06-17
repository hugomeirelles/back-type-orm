import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblSegPerfilFuncao } from "./TblSegPerfilFuncao";
import { TblSegUsuarioMenu } from "./TblSegUsuarioMenu";
import { TblSegUsuarioPerfilFuncao } from "./TblSegUsuarioPerfilFuncao";

@Index("PK_TBL_SEG_APLICACAO_FUNCAO", ["codFuncao"], { unique: true })
@Entity("TBL_SEG_APLICACAO_FUNCAO")
export class TblSegAplicacaoFuncao {
  @Column("varchar2", { name: "TXT_MENU", nullable: true, length: 50 })
  txtMenu: string | null;

  @Column("varchar2", { name: "TXT_FUNCAO", length: 50 })
  txtFuncao: string;

  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 100 })
  txtEndereco: string | null;

  @Column("number", { name: "COD_RESPONSIVO", scale: 0, default: () => "(0)" })
  codResponsivo: number;

  @Column("number", {
    name: "COD_PERMISSAO_AUTO",
    scale: 0,
    default: () => "(0)",
  })
  codPermissaoAuto: number;

  @Column("number", { name: "COD_ORDEM", scale: 0 })
  codOrdem: number;

  @Column("number", { name: "COD_MENU", scale: 0, default: () => "1" })
  codMenu: number;

  @Column("number", { name: "COD_GERENCIA", scale: 0, default: () => "1" })
  codGerencia: number;

  @Column("number", { primary: true, name: "COD_FUNCAO", scale: 0 })
  codFuncao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { name: "COD_AREA", scale: 0 })
  codArea: number;

  @Column("number", { name: "COD_ACESSO_TIPO", scale: 0, default: () => "1" })
  codAcessoTipo: number;

  @OneToMany(
    () => TblSegPerfilFuncao,
    (tblSegPerfilFuncao) => tblSegPerfilFuncao.codFuncao2
  )
  tblSegPerfilFuncaos: TblSegPerfilFuncao[];

  @OneToMany(
    () => TblSegUsuarioMenu,
    (tblSegUsuarioMenu) => tblSegUsuarioMenu.codFuncao2
  )
  tblSegUsuarioMenus: TblSegUsuarioMenu[];

  @OneToMany(
    () => TblSegUsuarioPerfilFuncao,
    (tblSegUsuarioPerfilFuncao) => tblSegUsuarioPerfilFuncao.codFuncao2
  )
  tblSegUsuarioPerfilFuncaos: TblSegUsuarioPerfilFuncao[];
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegAplicacaoFuncao } from "./TblSegAplicacaoFuncao";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_USUARIO_MENU", ["codUsuario", "codFuncao"], { unique: true })
@Entity("TBL_SEG_USUARIO_MENU")
export class TblSegUsuarioMenu {
  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_FUNCAO", scale: 0 })
  codFuncao: number;

  @Column("number", { name: "COD_AREA", scale: 0 })
  codArea: number;

  @ManyToOne(
    () => TblSegAplicacaoFuncao,
    (tblSegAplicacaoFuncao) => tblSegAplicacaoFuncao.tblSegUsuarioMenus
  )
  @JoinColumn([{ name: "COD_FUNCAO", referencedColumnName: "codFuncao" }])
  codFuncao2: TblSegAplicacaoFuncao;

/*   @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioMenus
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario; */
}

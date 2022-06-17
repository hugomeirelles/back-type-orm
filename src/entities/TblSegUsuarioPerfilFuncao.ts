import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblOrgao } from "./TblOrgao";
import { TblSegAplicacaoFuncao } from "./TblSegAplicacaoFuncao";

@Index("PK_SEGUSUARIOPERFILFUNCAO1", ["codUsuario", "codOrgao", "codFuncao"], {
  unique: true,
})
@Entity("TBL_SEG_USUARIO_PERFIL_FUNCAO")
export class TblSegUsuarioPerfilFuncao {
  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { primary: true, name: "COD_FUNCAO", scale: 0 })
  codFuncao: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioPerfilFuncaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblSegUsuarioPerfilFuncaos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;

  @ManyToOne(
    () => TblSegAplicacaoFuncao,
    (tblSegAplicacaoFuncao) => tblSegAplicacaoFuncao.tblSegUsuarioPerfilFuncaos
  )
  @JoinColumn([{ name: "COD_FUNCAO", referencedColumnName: "codFuncao" }])
  codFuncao2: TblSegAplicacaoFuncao;
}

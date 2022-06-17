import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegPerfil } from "./TblSegPerfil";
import { TblSegAplicacaoFuncao } from "./TblSegAplicacaoFuncao";

@Index("PK_TBL_SEG_PERFIL_FUNCAO", ["codPerfil", "codFuncao"], { unique: true })
@Entity("TBL_SEG_PERFIL_FUNCAO")
export class TblSegPerfilFuncao {
  @Column("number", { name: "COD_VALOR", scale: 0 })
  codValor: number;

  @Column("number", { primary: true, name: "COD_PERFIL", scale: 0 })
  codPerfil: number;

  @Column("number", { primary: true, name: "COD_FUNCAO", scale: 0 })
  codFuncao: number;

  @ManyToOne(
    () => TblSegPerfil,
    (tblSegPerfil) => tblSegPerfil.tblSegPerfilFuncaos
  )
  @JoinColumn([{ name: "COD_PERFIL", referencedColumnName: "codPerfil" }])
  codPerfil2: TblSegPerfil;

  @ManyToOne(
    () => TblSegAplicacaoFuncao,
    (tblSegAplicacaoFuncao) => tblSegAplicacaoFuncao.tblSegPerfilFuncaos
  )
  @JoinColumn([{ name: "COD_FUNCAO", referencedColumnName: "codFuncao" }])
  codFuncao2: TblSegAplicacaoFuncao;
}

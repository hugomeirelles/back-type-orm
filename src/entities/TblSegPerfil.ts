import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblSegPerfilFuncao } from "./TblSegPerfilFuncao";
import { TblSegPerfilRelatorio } from "./TblSegPerfilRelatorio";
import { TblSegUsuarioPerfil } from "./TblSegUsuarioPerfil";

@Index("PK_TBL_SEG_PERFIL", ["codPerfil"], { unique: true })
@Entity("TBL_SEG_PERFIL")
export class TblSegPerfil {
  @Column("varchar2", { name: "TXT_PERFIL", length: 100 })
  txtPerfil: string;

  @Column("number", { primary: true, name: "COD_PERFIL", scale: 0 })
  codPerfil: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblSegPerfilFuncao,
    (tblSegPerfilFuncao) => tblSegPerfilFuncao.codPerfil2
  )
  tblSegPerfilFuncaos: TblSegPerfilFuncao[];

  @OneToMany(
    () => TblSegPerfilRelatorio,
    (tblSegPerfilRelatorio) => tblSegPerfilRelatorio.codPerfil2
  )
  tblSegPerfilRelatorios: TblSegPerfilRelatorio[];

  @OneToMany(
    () => TblSegUsuarioPerfil,
    (tblSegUsuarioPerfil) => tblSegUsuarioPerfil.codPerfil
  )
  tblSegUsuarioPerfils: TblSegUsuarioPerfil[];
}

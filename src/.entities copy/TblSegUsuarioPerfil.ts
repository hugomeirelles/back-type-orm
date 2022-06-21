import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblOrgao } from "./TblOrgao";
import { TblSegCargo } from "./TblSegCargo";
import { TblSegPerfil } from "./TblSegPerfil";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_USUARIO_PERFIL", ["codUsuario", "codOrgao"], {
  unique: true,
})
@Entity("TBL_SEG_USUARIO_PERFIL")
export class TblSegUsuarioPerfil {
  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_ULTIMO", scale: 0, default: () => "(0)" })
  codUltimo: number;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_GRUPO", nullable: true, scale: 0 })
  codGrupo: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblSegUsuarioPerfils)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;

  @ManyToOne(
    () => TblSegCargo,
    (tblSegCargo) => tblSegCargo.tblSegUsuarioPerfils
  )
  @JoinColumn([{ name: "COD_CARGO", referencedColumnName: "codCargo" }])
  codCargo: TblSegCargo;

  @ManyToOne(
    () => TblSegPerfil,
    (tblSegPerfil) => tblSegPerfil.tblSegUsuarioPerfils
  )
  @JoinColumn([{ name: "COD_PERFIL", referencedColumnName: "codPerfil" }])
  codPerfil: TblSegPerfil;

/*   @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioPerfils
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario; */
}

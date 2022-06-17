import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegGrupo } from "./TblSegGrupo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_GRUPO_USUARIO_1", ["codGrupo", "codUsuario", "codOrgao"], {
  unique: true,
})
@Entity("TBL_SEG_GRUPO_USUARIO")
export class TblSegGrupoUsuario {
  @Column("number", { name: "COD_VISUALIZAR", scale: 0, default: () => "(0)" })
  codVisualizar: number;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_RETIRAR", scale: 0, default: () => "(0)" })
  codRetirar: number;

  @Column("number", {
    primary: true,
    name: "COD_ORGAO",
    scale: 0,
    default: () => "(48500)",
  })
  codOrgao: number;

  @Column("number", { name: "COD_INSERIR", scale: 0, default: () => "(0)" })
  codInserir: number;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @ManyToOne(
    () => TblSegGrupo,
    (tblSegGrupo) => tblSegGrupo.tblSegGrupoUsuarios
  )
  @JoinColumn([{ name: "COD_GRUPO", referencedColumnName: "codGrupo" }])
  codGrupo2: TblSegGrupo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegGrupoUsuarios
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario;
}

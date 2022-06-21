import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_JUDICIAL_GRUPO", ["codGrupo"], { unique: true })
@Entity("TBL_JUDICIAL_GRUPO")
export class TblJudicialGrupo {
  @Column("varchar2", { name: "TXT_GRUPO", length: 100 })
  txtGrupo: string;

  @Column("date", { name: "DT_GRUPO", default: () => "sysdate" })
  dtGrupo: Date;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToMany(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblJudicialGrupos
  )
  @JoinTable({
    name: "TBL_JUDICIAL_GRUPO_USUARIO",
    joinColumns: [{ name: "COD_GRUPO", referencedColumnName: "codGrupo" }],
    inverseJoinColumns: [
      { name: "COD_USUARIO", referencedColumnName: "codUsuario" },
    ],
  })
  tblSegUsuarios: TblSegUsuario[];
}

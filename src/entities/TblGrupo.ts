import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblGrupoInteressado } from "./TblGrupoInteressado";

@Index("PK_TBL_GRUPO", ["codGrupo"], { unique: true })
@Entity("TBL_GRUPO")
export class TblGrupo {
  @Column("varchar2", { name: "TXT_GRUPO", length: 255 })
  txtGrupo: string;

  @Column("date", { name: "DT_GRUPO", default: () => "sysdate" })
  dtGrupo: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", {
    name: "COD_GRUPO_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codGrupoSuperior: number;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @Column("number", { name: "COD_CATEGORIA", scale: 0, default: () => "(0)" })
  codCategoria: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblGrupoInteressado,
    (tblGrupoInteressado) => tblGrupoInteressado.codGrupo2
  )
  tblGrupoInteressados: TblGrupoInteressado[];
}

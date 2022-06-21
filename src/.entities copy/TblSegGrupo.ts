import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { TblProtocoloGrupo } from "./TblProtocoloGrupo";
import { TblSegGrupoUsuario } from "./TblSegGrupoUsuario";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_GRUPO", ["codGrupo"], { unique: true })
@Entity("TBL_SEG_GRUPO")
export class TblSegGrupo {
  @Column("varchar2", { name: "TXT_GRUPO", length: 100 })
  txtGrupo: string;

  @Column("date", { name: "DT_GRUPO", default: () => "sysdate" })
  dtGrupo: Date;

  @Column("number", {
    name: "COD_PERMITIR_JUNTAR",
    scale: 0,
    default: () => "(0)",
  })
  codPermitirJuntar: number;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { name: "COD_ACESSO_TIPO", scale: 0, default: () => "(0)" })
  codAcessoTipo: number;

  @OneToMany(
    () => TblProtocoloGrupo,
    (tblProtocoloGrupo) => tblProtocoloGrupo.codGrupo2
  )
  tblProtocoloGrupos: TblProtocoloGrupo[];

  @OneToMany(
    () => TblSegGrupoUsuario,
    (tblSegGrupoUsuario) => tblSegGrupoUsuario.codGrupo2
  )
  tblSegGrupoUsuarios: TblSegGrupoUsuario[];

  @ManyToMany(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegGrupos
  )
  @JoinTable({
    name: "TBL_SEG_USUARIO_GRUPO",
    joinColumns: [{ name: "COD_GRUPO", referencedColumnName: "codGrupo" }],
    inverseJoinColumns: [
      { name: "COD_USUARIO", referencedColumnName: "codUsuario" },
    ],
  })
  tblSegUsuarios: TblSegUsuario[];
}

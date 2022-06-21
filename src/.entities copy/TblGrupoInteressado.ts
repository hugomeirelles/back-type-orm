import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblGrupo } from "./TblGrupo";

@Index("PK_TBL_GRUPO_INTERESSADO", ["codGrupo", "codInteressado"], {
  unique: true,
})
@Entity("TBL_GRUPO_INTERESSADO")
export class TblGrupoInteressado {
  @Column("number", { primary: true, name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @ManyToOne(() => TblGrupo, (tblGrupo) => tblGrupo.tblGrupoInteressados)
  @JoinColumn([{ name: "COD_GRUPO", referencedColumnName: "codGrupo" }])
  codGrupo2: TblGrupo;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_GRUPO_INTERESSADO_TEMP", ["codGrupo", "codInteressado"], {
  unique: true,
})
@Entity("TBL_GRUPO_INTERESSADO_TEMP")
export class TblGrupoInteressadoTemp {
  @Column("number", { primary: true, name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;
}

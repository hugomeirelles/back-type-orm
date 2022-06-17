import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicial } from "./TblJudicial";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_USUARIO_JUDICIAL", ["codUsuario", "codJudicial"], {
  unique: true,
})
@Entity("TBL_SEG_USUARIO_JUDICIAL")
export class TblSegUsuarioJudicial {
  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", { name: "DT_EXCLUSAO", nullable: true })
  dtExclusao: Date | null;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @ManyToOne(
    () => TblJudicial,
    (tblJudicial) => tblJudicial.tblSegUsuarioJudicials
  )
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioJudicials
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario;
}

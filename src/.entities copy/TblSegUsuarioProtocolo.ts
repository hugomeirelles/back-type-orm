import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_USUARIO_PROTOCOLO", ["codUsuario", "codProtocolo"], {
  unique: true,
})
@Entity("TBL_SEG_USUARIO_PROTOCOLO")
export class TblSegUsuarioProtocolo {
  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", { name: "DT_EXCLUSAO", nullable: true })
  dtExclusao: Date | null;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

/*   @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioProtocolos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario; */
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("IX_TXT_COMENTARIO", ["txtComentario"], {})
@Entity("TBL_PROTOCOLO_COMENTARIO")
export class TblProtocoloComentario {
  @Column("varchar2", { name: "TXT_COMENTARIO", length: 1000 })
  txtComentario: string;

  @Column("date", { name: "HR_COMENTARIO", default: () => "sysdate" })
  hrComentario: Date;

  @Column("date", { name: "DT_COMENTARIO", default: () => "sysdate" })
  dtComentario: Date;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloComentarios
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

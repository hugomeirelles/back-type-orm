import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_PROTOCOLO_ELIMINAR")
export class TblProtocoloEliminar {
  @Column("varchar2", { name: "TXT_ELIMINACAO", length: 500 })
  txtEliminacao: string;

  @Column("date", { name: "DT_ELIMINACAO", default: () => "sysdate" })
  dtEliminacao: Date;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloEliminars
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

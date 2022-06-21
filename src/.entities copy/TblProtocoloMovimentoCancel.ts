import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index(
  "PK_PROTOCOLOMOVIMENTOCANCELAR",
  ["codProtocolo", "dtCancelamento", "codUsuario"],
  { unique: true }
)
@Entity("TBL_PROTOCOLO_MOVIMENTO_CANCEL")
export class TblProtocoloMovimentoCancel {
  @Column("date", {
    primary: true,
    name: "DT_CANCELAMENTO",
    default: () => "sysdate",
  })
  dtCancelamento: Date;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloMovimentoCancels
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario;
}

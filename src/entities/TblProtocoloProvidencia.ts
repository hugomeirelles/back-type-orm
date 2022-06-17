import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index(
  "PK_TBL_PROTOCOLO_PROVIDENCIA",
  ["codProtocolo", "dtProvidencia", "hrProvidencia"],
  { unique: true }
)
@Entity("TBL_PROTOCOLO_PROVIDENCIA")
export class TblProtocoloProvidencia {
  @Column("varchar2", { name: "TXT_PROVIDENCIA", length: 500 })
  txtProvidencia: string;

  @Column("date", {
    primary: true,
    name: "HR_PROVIDENCIA",
    default: () => "sysdate",
  })
  hrProvidencia: Date;

  @Column("date", {
    primary: true,
    name: "DT_PROVIDENCIA",
    default: () => "sysdate",
  })
  dtProvidencia: Date;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloProvidencias
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

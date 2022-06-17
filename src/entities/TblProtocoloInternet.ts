import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_PROTOCOLO_INTERNET", ["codProtocolo", "dtInternet"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_INTERNET")
export class TblProtocoloInternet {
  @Column("varchar2", { name: "TXT_INTERNET", length: 500 })
  txtInternet: string;

  @Column("date", {
    primary: true,
    name: "DT_INTERNET",
    default: () => "sysdate",
  })
  dtInternet: Date;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloInternets
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

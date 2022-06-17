import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblMinuta } from "./TblMinuta";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_PROTOCOLO_MINUTA", ["codProtocolo", "codMinuta"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_MINUTA")
export class TblProtocoloMinuta {
  @Column("date", { name: "DT_PROTOCOLO_MINUTA", default: () => "sysdate" })
  dtProtocoloMinuta: Date;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @ManyToOne(() => TblMinuta, (tblMinuta) => tblMinuta.tblProtocoloMinutas)
  @JoinColumn([{ name: "COD_MINUTA", referencedColumnName: "codMinuta" }])
  codMinuta2: TblMinuta;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloMinutas
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

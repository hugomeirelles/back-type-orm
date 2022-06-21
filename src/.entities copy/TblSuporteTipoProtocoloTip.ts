import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSuporteTipo } from "./TblSuporteTipo";

@Index("PK_SUPORTETIPOPROTOCOLOTIPO", ["codSuporteTipo", "codProtocoloTipo"], {
  unique: true,
})
@Entity("TBL_SUPORTE_TIPO_PROTOCOLO_TIP")
export class TblSuporteTipoProtocoloTip {
  @Column("number", { primary: true, name: "COD_SUPORTE_TIPO", scale: 0 })
  codSuporteTipo: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO_TIPO", scale: 0 })
  codProtocoloTipo: number;

  @ManyToOne(
    () => TblSuporteTipo,
    (tblSuporteTipo) => tblSuporteTipo.tblSuporteTipoProtocoloTips
  )
  @JoinColumn([
    { name: "COD_SUPORTE_TIPO", referencedColumnName: "codSuporteTipo" },
  ])
  codSuporteTipo2: TblSuporteTipo;
}

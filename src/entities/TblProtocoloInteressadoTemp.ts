import { Column, Entity } from "typeorm";

@Entity("TBL_PROTOCOLO_INTERESSADO_TEMP")
export class TblProtocoloInteressadoTemp {
  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_INTERESSADO_TIPO",
    scale: 0,
    default: () => "0",
  })
  codInteressadoTipo: number;

  @Column("number", { name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;
}

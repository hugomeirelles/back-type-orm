import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LOTE_PROTOCOLO", ["codLote", "codProtocolo"], { unique: true })
@Entity("TBL_LOTE_PROTOCOLO")
export class TblLoteProtocolo {
  @Column("number", {
    primary: true,
    name: "COD_PROTOCOLO",
    precision: 10,
    scale: 0,
  })
  codProtocolo: number;

  @Column("number", {
    primary: true,
    name: "COD_LOTE",
    precision: 10,
    scale: 0,
  })
  codLote: number;
}

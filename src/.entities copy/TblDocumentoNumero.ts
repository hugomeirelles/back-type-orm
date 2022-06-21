import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_DOCUMENTONUMERO", ["codAno", "codProtocolo"], { unique: true })
@Entity("TBL_DOCUMENTO_NUMERO")
export class TblDocumentoNumero {
  @Column("number", {
    primary: true,
    name: "COD_PROTOCOLO",
    scale: 0,
    default: () => "(0)",
  })
  codProtocolo: number;

  @Column("number", { name: "COD_NUMERO", scale: 0, default: () => "(0)" })
  codNumero: number;

  @Column("number", { primary: true, name: "COD_ANO", scale: 0 })
  codAno: number;
}

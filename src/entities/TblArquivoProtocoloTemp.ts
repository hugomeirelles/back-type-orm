import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_ARQ_INVENT_PROT_TEMP", ["codInventario", "codProtocolo"], {
  unique: true,
})
@Entity("TBL_ARQUIVO_PROTOCOLO_TEMP")
export class TblArquivoProtocoloTemp {
  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;
}

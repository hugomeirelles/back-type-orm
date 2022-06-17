import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_REMETENTE", ["codProtocolo", "codRemetente"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_REMETENTE")
export class TblProtocoloRemetente {
  @Column("number", { primary: true, name: "COD_REMETENTE", scale: 0 })
  codRemetente: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;
}

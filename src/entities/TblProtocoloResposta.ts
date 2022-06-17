import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_RESPOSTA", ["codProtocolo", "codProtocoloResposta"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_RESPOSTA")
export class TblProtocoloResposta {
  @Column("number", { primary: true, name: "COD_PROTOCOLO_RESPOSTA", scale: 0 })
  codProtocoloResposta: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;
}

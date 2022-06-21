import { Column, Entity } from "typeorm";

@Entity("TBL_PROTOCOLO_PRAZO_RESPOSTA")
export class TblProtocoloPrazoResposta {
  @Column("date", { name: "HR_MOVIMENTO", default: () => "sysdate" })
  hrMovimento: Date;

  @Column("date", { name: "DT_RETORNO", nullable: true })
  dtRetorno: Date | null;

  @Column("date", { name: "DT_PRAZO_RESPOSTA" })
  dtPrazoResposta: Date;

  @Column("date", { name: "DT_MOVIMENTO", default: () => "sysdate" })
  dtMovimento: Date;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO_ORIGEM", scale: 0 })
  codOrgaoOrigem: number;

  @Column("number", { name: "COD_ORGAO_DESTINO", scale: 0 })
  codOrgaoDestino: number;
}

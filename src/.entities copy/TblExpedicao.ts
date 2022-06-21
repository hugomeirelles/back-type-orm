import { Column, Entity } from "typeorm";

@Entity("TBL_EXPEDICAO")
export class TblExpedicao {
  @Column("varchar2", { name: "TXT_REMESSA", nullable: true, length: 50 })
  txtRemessa: string | null;

  @Column("varchar2", { name: "TXT_DESTINO", length: 255 })
  txtDestino: string;

  @Column("date", { name: "DT_EXPEDICAO", default: () => "sysdate" })
  dtExpedicao: Date;

  @Column("number", { name: "COD_REMESSA_TIPO", nullable: true, scale: 0 })
  codRemessaTipo: number | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_MOTIVO", scale: 0 })
  codMotivo: number;
}

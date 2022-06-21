import { Column, Entity } from "typeorm";

@Entity("TBL_PROTOCOLO_DESTINATARIO")
export class TblProtocoloDestinatario {
  @Column("varchar2", { name: "TXT_PESSOA", nullable: true, length: 255 })
  txtPessoa: string | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_DESTINATARIO", scale: 0 })
  codDestinatario: number;
}

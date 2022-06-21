import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_EMAIL", ["codEmail"], { unique: true })
@Entity("TBL_EMAIL")
export class TblEmail {
  @Column("varchar2", { name: "TXT_REMETENTE", nullable: true, length: 1000 })
  txtRemetente: string | null;

  @Column("clob", { name: "TXT_RAW_MESSAGE", nullable: true })
  txtRawMessage: string | null;

  @Column("varchar2", { name: "TXT_ID_MENSAGEM", length: 1000 })
  txtIdMensagem: string;

  @Column("clob", { name: "TXT_EMAIL", nullable: true })
  txtEmail: string | null;

  @Column("varchar2", {
    name: "TXT_DESTINATARIO",
    nullable: true,
    length: 4000,
  })
  txtDestinatario: string | null;

  @Column("varchar2", { name: "TXT_ASSUNTO", length: 4000 })
  txtAssunto: string;

  @Column("timestamp", {
    name: "DT_INCLUSAO",
    nullable: true,
    scale: 6,
    default: () => "CURRENT_TIMESTAMP",
  })
  dtInclusao: Date | null;

  @Column("date", { name: "DT_EMAIL", nullable: true })
  dtEmail: Date | null;

  @Column("number", {
    name: "COD_PROTOCOLO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codProtocolo: number | null;

  @Column("number", { name: "COD_EMAIL", precision: 10, scale: 0 })
  codEmail: number;
}

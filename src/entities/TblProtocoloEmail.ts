import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_EMAIL", ["codProtocolo", "txtEmail"], { unique: true })
@Entity("TBL_PROTOCOLO_EMAIL")
export class TblProtocoloEmail {
  @Column("varchar2", { primary: true, name: "TXT_EMAIL", length: 255 })
  txtEmail: string;

  @Column("varchar2", { name: "TXT_CELULAR", nullable: true, length: 50 })
  txtCelular: string | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", { name: "DT_EXCLUSAO", nullable: true })
  dtExclusao: Date | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;
}

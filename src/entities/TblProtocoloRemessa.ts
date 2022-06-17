import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblRemessaTipo } from "./TblRemessaTipo";

@Index("IX_PR_COD_PROTOCOLO", ["codProtocolo"], {})
@Entity("TBL_PROTOCOLO_REMESSA")
export class TblProtocoloRemessa {
  @Column("varchar2", { name: "TXT_REMESSA", nullable: true, length: 50 })
  txtRemessa: string | null;

  @Column("date", { name: "DT_REMESSA", default: () => "sysdate" })
  dtRemessa: Date;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblRemessaTipo,
    (tblRemessaTipo) => tblRemessaTipo.tblProtocoloRemessas
  )
  @JoinColumn([
    { name: "COD_REMESSA_TIPO", referencedColumnName: "codRemessaTipo" },
  ])
  codRemessaTipo: TblRemessaTipo;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_PROTOCOLO", ["codJudicial", "codProtocolo"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_PROTOCOLO")
export class TblJudicialProtocolo {
  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblOrgao } from "./TblOrgao";

@Index("PK_TBL_PROTOCOLO_GUIA", ["codGuia", "codOrgao", "codGuiaTipo"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_GUIA")
export class TblProtocoloGuia {
  @Column("date", { name: "DT_GUIA", default: () => "sysdate" })
  dtGuia: Date;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", {
    primary: true,
    name: "COD_GUIA_TIPO",
    scale: 0,
    default: () => "(0)",
  })
  codGuiaTipo: number;

  @Column("number", { primary: true, name: "COD_GUIA", scale: 0 })
  codGuia: number;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloGuias)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;
}

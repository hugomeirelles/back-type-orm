import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_PROTOCOLO_RECLASSIFICACAO")
export class TblProtocoloReclassificacao {
  @Column("varchar2", { name: "TXT_JUSTIFICATIVA", length: 500 })
  txtJustificativa: string;

  @Column("date", { name: "DT_RECLASSIFICACAO", default: () => "sysdate" })
  dtReclassificacao: Date;

  @Column("number", { name: "COD_VALOR_ORIGINAL", precision: 10, scale: 0 })
  codValorOriginal: number;

  @Column("number", { name: "COD_VALOR_FINAL", precision: 10, scale: 0 })
  codValorFinal: number;

  @Column("number", {
    name: "COD_RECLASSIFICACAO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codReclassificacao: number;

  @Column("number", { name: "COD_PROTOCOLO", precision: 10, scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloReclassificacaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

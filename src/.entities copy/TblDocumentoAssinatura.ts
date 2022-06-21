import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblTipoCompromissoAssinat } from "./TblTipoCompromissoAssinat";

@Index("IDX$$_0001000C", ["codProtocoloDocumento"], {})
@Index(
  "IX_DA_COD_PROTOCOLO_DOCUMENTO",
  ["codProtocoloDocumento", "codTipoAssinatura"],
  {}
)
@Index("TBL_DOCUMENTO_ASSINATURA_PK", ["codDocumentoAssinatura"], {
  unique: true,
})
@Entity("TBL_DOCUMENTO_ASSINATURA")
export class TblDocumentoAssinatura {
  @Column("date", {
    name: "DT_ASSINATURA",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtAssinatura: Date | null;

  @Column("number", { name: "COD_TIPO_ASSINATURA", default: () => "(0)" })
  codTipoAssinatura: number;

  @Column("number", { name: "COD_PROTOCOLO_DOCUMENTO" })
  codProtocoloDocumento: number;

  @Column("number", { primary: true, name: "COD_DOCUMENTO_ASSINATURA" })
  codDocumentoAssinatura: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblDocumentoAssinaturas
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;

  @ManyToOne(
    () => TblTipoCompromissoAssinat,
    (tblTipoCompromissoAssinat) =>
      tblTipoCompromissoAssinat.tblDocumentoAssinaturas
  )
  @JoinColumn([
    {
      name: "COD_TIPO_COMPROMISSO_ASSINAT",
      referencedColumnName: "codTipoCompromissoAssinat",
    },
  ])
  codTipoCompromissoAssinat: TblTipoCompromissoAssinat;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_REEMBOLSO", ["codContrato", "codReembolso"], {
  unique: true,
})
@Entity("TBL_CONTRATO_REEMBOLSO")
export class TblContratoReembolso {
  @Column("varchar2", { name: "TXT_REEMBOLSO", nullable: true, length: 255 })
  txtReembolso: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_PROTOCOLO",
    nullable: true,
    length: 15,
  })
  txtNumeroProtocolo: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_REEMBOLSO", nullable: true })
  dtReembolso: Date | null;

  @Column("number", {
    name: "COD_VALOR_REEMBOLSO",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorReembolso: number | null;

  @Column("number", { primary: true, name: "COD_REEMBOLSO", scale: 0 })
  codReembolso: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

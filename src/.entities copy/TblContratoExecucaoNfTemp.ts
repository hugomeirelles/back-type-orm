import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_NEMP",
  ["codContrato", "codExecucao", "codNotaFiscal"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_NF_TEMP")
export class TblContratoExecucaoNfTemp {
  @Column("varchar2", {
    name: "TXT_NOTA_FISCAL_PROTOCOLO",
    nullable: true,
    length: 15,
  })
  txtNotaFiscalProtocolo: string | null;

  @Column("varchar2", { name: "TXT_NOTA_FISCAL", nullable: true, length: 50 })
  txtNotaFiscal: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_NOTA_FISCAL",
    nullable: true,
    length: 255,
  })
  txtArquivoNotaFiscal: string | null;

  @Column("date", { name: "DT_NOTA_FISCAL", nullable: true })
  dtNotaFiscal: Date | null;

  @Column("date", { name: "DT_ENVIO_SAF", nullable: true })
  dtEnvioSaf: Date | null;

  @Column("number", {
    name: "COD_NOTA_FISCAL_VALOR",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codNotaFiscalValor: number | null;

  @Column("number", { primary: true, name: "COD_NOTA_FISCAL", scale: 0 })
  codNotaFiscal: number;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

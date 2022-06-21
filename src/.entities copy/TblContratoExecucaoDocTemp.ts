import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_DOC_T",
  ["codContrato", "codExecucao", "codDocumento"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_DOC_TEMP")
export class TblContratoExecucaoDocTemp {
  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", {
    name: "COD_DOCUMENTO_TIPO",
    scale: 0,
    default: () => "(1)",
  })
  codDocumentoTipo: number;

  @Column("number", { primary: true, name: "COD_DOCUMENTO", scale: 0 })
  codDocumento: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

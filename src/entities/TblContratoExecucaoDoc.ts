import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoExecucao } from "./TblContratoExecucao";

@Index(
  "PK_TBL_CONTRATO_EXECUCAO_DOC",
  ["codContrato", "codExecucao", "codDocumento"],
  { unique: true }
)
@Entity("TBL_CONTRATO_EXECUCAO_DOC")
export class TblContratoExecucaoDoc {
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

  @ManyToOne(
    () => TblContratoExecucao,
    (tblContratoExecucao) => tblContratoExecucao.tblContratoExecucaoDocs
  )
  @JoinColumn([
    { name: "COD_CONTRATO", referencedColumnName: "codContrato" },
    { name: "COD_EXECUCAO", referencedColumnName: "codExecucao" },
  ])
  tblContratoExecucao: TblContratoExecucao;
}

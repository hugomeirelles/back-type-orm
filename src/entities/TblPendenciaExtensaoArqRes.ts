import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPendencia } from "./TblPendencia";
import { TblExtensaoArquivoRespPend } from "./TblExtensaoArquivoRespPend";

@Index(
  "PK_TBL_PENDENCIA_EXTENSAO_ARQ_",
  ["codPendencia", "codExtensaoArquivoRespPend"],
  { unique: true }
)
@Entity("TBL_PENDENCIA_EXTENSAO_ARQ_RES")
export class TblPendenciaExtensaoArqRes {
  @Column("number", { primary: true, name: "COD_PENDENCIA" })
  codPendencia: number;

  @Column("number", { name: "COD_OBRIGA_ASSINATURA", default: () => "0" })
  codObrigaAssinatura: number;

  @Column("number", { primary: true, name: "COD_EXTENSAO_ARQUIVO_RESP_PEND" })
  codExtensaoArquivoRespPend: number;

  @ManyToOne(
    () => TblPendencia,
    (tblPendencia) => tblPendencia.tblPendenciaExtensaoArqRes
  )
  @JoinColumn([{ name: "COD_PENDENCIA", referencedColumnName: "codPendencia" }])
  codPendencia2: TblPendencia;

  @ManyToOne(
    () => TblExtensaoArquivoRespPend,
    (tblExtensaoArquivoRespPend) =>
      tblExtensaoArquivoRespPend.tblPendenciaExtensaoArqRes
  )
  @JoinColumn([
    {
      name: "COD_EXTENSAO_ARQUIVO_RESP_PEND",
      referencedColumnName: "codExtensaoArquivoRespPend",
    },
  ])
  codExtensaoArquivoRespPend2: TblExtensaoArquivoRespPend;
}

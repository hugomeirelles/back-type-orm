import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPendenciaRespostaArquivo } from "./TblPendenciaRespostaArquivo";
import { TblInteressado } from "./TblInteressado";

@Index("PK_TBL_PEND_RESP_ARQUIVO_ASSI", ["pendRespArquivoAssi"], {
  unique: true,
})
@Entity("TBL_PEND_RESP_ARQUIVO_ASSI")
export class TblPendRespArquivoAssi {
  @Column("number", { primary: true, name: "PEND_RESP_ARQUIVO_ASSI" })
  pendRespArquivoAssi: number;

  @Column("date", { name: "DT_ASSINATURA" })
  dtAssinatura: Date;

  @Column("number", { name: "COD_TIPO_ASSINATURA", default: () => "(0)" })
  codTipoAssinatura: number;

  @ManyToOne(
    () => TblPendenciaRespostaArquivo,
    (tblPendenciaRespostaArquivo) =>
      tblPendenciaRespostaArquivo.tblPendRespArquivoAssis
  )
  @JoinColumn([
    {
      name: "COD_PENDENCIA_RESPOSTA_ARQUIVO",
      referencedColumnName: "codPendenciaRespostaArquivo",
    },
  ])
  codPendenciaRespostaArquivo: TblPendenciaRespostaArquivo;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblPendRespArquivoAssis
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;
}

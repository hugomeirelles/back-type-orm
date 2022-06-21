import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPendenciaRespostaArquivo } from "./TblPendenciaRespostaArquivo";
import { TblInteressado } from "./TblInteressado";

@Index("PK_PEND_RESP_ARQ_DEFI_ASSIN", ["codPendRespArqDefiAssin"], {
  unique: true,
})
@Entity("TBL_PEND_RESP_ARQ_DEFI_ASSIN")
export class TblPendRespArqDefiAssin {
  @Column("varchar2", {
    name: "TXT_MOTIVO_RECUSA",
    nullable: true,
    length: 500,
  })
  txtMotivoRecusa: string | null;

  @Column("date", { name: "DT_RECUSA", nullable: true })
  dtRecusa: Date | null;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("date", { name: "DT_ASSINATURA", nullable: true })
  dtAssinatura: Date | null;

  @Column("number", { name: "COD_SITUACAO" })
  codSituacao: number;

  @Column("number", { name: "COD_RECEBE_EMAIL", nullable: true })
  codRecebeEmail: number | null;

  @Column("number", { primary: true, name: "COD_PEND_RESP_ARQ_DEFI_ASSIN" })
  codPendRespArqDefiAssin: number;

  @ManyToOne(
    () => TblPendenciaRespostaArquivo,
    (tblPendenciaRespostaArquivo) =>
      tblPendenciaRespostaArquivo.tblPendRespArqDefiAssins
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
    (tblInteressado) => tblInteressado.tblPendRespArqDefiAssins
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblPendRespArqDefiAssins2
  )
  @JoinColumn([
    { name: "COD_INTERESSADO_DEFINIU", referencedColumnName: "codInteressado" },
  ])
  codInteressadoDefiniu: TblInteressado;
}

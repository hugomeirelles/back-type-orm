import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblOrgao } from "./TblOrgao";

@Index("IX_PA_COD_PROTOCOLO_DOCUMENTO", ["codProtocoloDocumento"], {})
@Index(
  "IX_PA_PENDENCIA_EMITIDA",
  ["codInteressadoDefiniu", "dtAssinatura", "dtRecusa"],
  {}
)
@Index(
  "IX_PA_PENDENCIA_RECEBIDA",
  ["codInteressado", "dtAssinatura", "dtRecusa"],
  {}
)
@Index("PK_TBL_PROTOCOLO_ASSINATURA", ["codProtocoloAssinatura"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_ASSINATURA")
export class TblProtocoloAssinatura {
  @Column("varchar2", {
    name: "TXT_MOTIVO_RECUSA",
    nullable: true,
    length: 500,
  })
  txtMotivoRecusa: string | null;

  @Column("date", { name: "DT_RECUSA", nullable: true })
  dtRecusa: Date | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", {
    name: "DT_ASSINATURA",
    nullable: true,
    default: () => "NULL",
  })
  dtAssinatura: Date | null;

  @Column("number", { name: "COD_SITUACAO", scale: 0 })
  codSituacao: number;

  @Column("number", { name: "COD_PROTOCOLO_DOCUMENTO" })
  codProtocoloDocumento: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO_ASSINATURA" })
  codProtocoloAssinatura: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_INTERESSADO_DEFINIU" })
  codInteressadoDefiniu: number;

  @Column("number", { name: "COD_INTERESSADO" })
  codInteressado: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblProtocoloAssinaturas
  )
  @JoinColumn([
    { name: "COD_INTERESSADO_DEFINIU", referencedColumnName: "codInteressado" },
  ])
  codInteressadoDefiniu2: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblProtocoloAssinaturas2
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado2: TblInteressado;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloAssinaturas)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("PK_INTERESSADO_DOC_PROCURADOR", ["docProcurador"], { unique: true })
@Entity("TBL_INTERESSADO_DOC_PROCURADOR")
export class TblInteressadoDocProcurador {
  @Column("varchar2", {
    name: "TXT_DESCRICAO_ARQUIVO",
    nullable: true,
    length: 255,
  })
  txtDescricaoArquivo: string | null;

  @Column("date", { name: "DT_VALIDADE", nullable: true })
  dtValidade: Date | null;

  @Column("date", { name: "DT_DOCUMENTO", nullable: true })
  dtDocumento: Date | null;

  @Column("number", { primary: true, name: "DOC_PROCURADOR" })
  docProcurador: number;

  @Column("number", { name: "COD_ATUALIZADO" })
  codAtualizado: number;

  @ManyToOne(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) =>
      tblProtocoloDocumento.tblInteressadoDocProcuradors
  )
  @JoinColumn([
    {
      name: "COD_PROTOCOLO_DOCUMENTO",
      referencedColumnName: "codProtocoloDocumento",
    },
  ])
  codProtocoloDocumento: TblProtocoloDocumento;

  @ManyToOne(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) =>
      tblProtocoloProcurador.tblInteressadoDocProcuradors
  )
  @JoinColumn([
    { name: "COD_PROCURADOR", referencedColumnName: "codProcurador" },
  ])
  codProcurador: TblProtocoloProcurador;
}

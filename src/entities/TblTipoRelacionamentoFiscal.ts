import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("PK_TIPO_RELACINAMENTO_FISCAL", ["codTipoRelacionamentoFiscal"], {
  unique: true,
})
@Entity("TBL_TIPO_RELACIONAMENTO_FISCAL")
export class TblTipoRelacionamentoFiscal {
  @Column("varchar2", { name: "TXT_TIPO_RELACIONAMENTO_FISCAL", length: 255 })
  txtTipoRelacionamentoFiscal: string;

  @Column("number", { primary: true, name: "COD_TIPO_RELACIONAMENTO_FISCAL" })
  codTipoRelacionamentoFiscal: number;

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codTipoRelacionamentoFiscal
  )
  tblInteressados: TblInteressado[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) =>
      tblProtocoloProcurador.codTipoRelacionamentoFiscal
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];
}

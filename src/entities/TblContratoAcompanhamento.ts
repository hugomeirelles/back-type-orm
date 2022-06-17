import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblContratoAcompanhamentoEt } from "./TblContratoAcompanhamentoEt";

@Index("PK_TBL_CONTRATO_ACOMPANHAMENTO", ["codContrato", "codAcompanhamento"], {
  unique: true,
})
@Entity("TBL_CONTRATO_ACOMPANHAMENTO")
export class TblContratoAcompanhamento {
  @Column("varchar2", {
    name: "TXT_ORDEM_BANCARIA",
    nullable: true,
    length: 30,
  })
  txtOrdemBancaria: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_PROTOCOLO",
    nullable: true,
    length: 15,
  })
  txtNumeroProtocolo: string | null;

  @Column("varchar2", { name: "TXT_NOTA_EMPENHO", nullable: true, length: 30 })
  txtNotaEmpenho: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO1", nullable: true, length: 255 })
  txtArquivo1: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_VIGENCIA_INICIO", nullable: true })
  dtVigenciaInicio: Date | null;

  @Column("number", {
    name: "COD_VALOR_TOTAL",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorTotal: number | null;

  @Column("number", { name: "COD_CRONOGRAMA", scale: 0 })
  codCronograma: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", { primary: true, name: "COD_ACOMPANHAMENTO", scale: 0 })
  codAcompanhamento: number;

  @OneToMany(
    () => TblContratoAcompanhamentoEt,
    (tblContratoAcompanhamentoEt) =>
      tblContratoAcompanhamentoEt.tblContratoAcompanhamento
  )
  tblContratoAcompanhamentoEts: TblContratoAcompanhamentoEt[];
}

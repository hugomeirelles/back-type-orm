import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblContratoGarantiaTipo } from "./TblContratoGarantiaTipo";

@Index("PK_TBL_CONTRATO_GARANTIA", ["codContrato", "codGarantia"], {
  unique: true,
})
@Entity("TBL_CONTRATO_GARANTIA")
export class TblContratoGarantia {
  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 255 })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_VIGENCIA_TERMINO", nullable: true })
  dtVigenciaTermino: Date | null;

  @Column("date", { name: "DT_VIGENCIA_INICIO", nullable: true })
  dtVigenciaInicio: Date | null;

  @Column("number", {
    name: "COD_VALOR_TOTAL",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorTotal: number | null;

  @Column("number", { primary: true, name: "COD_GARANTIA", scale: 0 })
  codGarantia: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @ManyToOne(
    () => TblContratoGarantiaTipo,
    (tblContratoGarantiaTipo) => tblContratoGarantiaTipo.tblContratoGarantias
  )
  @JoinColumn([
    { name: "COD_GARANTIA_TIPO", referencedColumnName: "codGarantiaTipo" },
  ])
  codGarantiaTipo: TblContratoGarantiaTipo;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_CRONOGRAMA", ["codContrato", "codCronograma"], {
  unique: true,
})
@Entity("TBL_CONTRATO_CRONOGRAMA")
export class TblContratoCronograma {
  @Column("clob", { name: "TXT_OBJETO", nullable: true })
  txtObjeto: string | null;

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

  @Column("number", {
    name: "COD_VALIDADE",
    nullable: true,
    scale: 0,
    default: () => "(1)",
  })
  codValidade: number | null;

  @Column("number", { name: "COD_SITUACAO", scale: 0, default: () => "(1)" })
  codSituacao: number;

  @Column("number", { name: "COD_DIA", nullable: true, scale: 0 })
  codDia: number | null;

  @Column("number", {
    name: "COD_CRONOGRAMA_ANTERIOR",
    nullable: true,
    scale: 0,
  })
  codCronogramaAnterior: number | null;

  @Column("number", { name: "COD_CRONOGRAMA", scale: 0 })
  codCronograma: number;

  @Column("number", { name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_DESEMPENHO", ["codContrato", "codDesempenho"], {
  unique: true,
})
@Entity("TBL_CONTRATO_DESEMPENHO")
export class TblContratoDesempenho {
  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 255 })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_VIGENCIA_INICIO", nullable: true })
  dtVigenciaInicio: Date | null;

  @Column("number", { primary: true, name: "COD_DESEMPENHO", scale: 0 })
  codDesempenho: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

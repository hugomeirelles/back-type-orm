import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_ADITIVO", ["codContrato", "codAditivo"], {
  unique: true,
})
@Entity("TBL_CONTRATO_ADITIVO")
export class TblContratoAditivo {
  @Column("clob", { name: "TXT_OBJETO", nullable: true })
  txtObjeto: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO1", nullable: true, length: 255 })
  txtArquivo1: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("varchar2", { name: "TXT_ADITIVO", nullable: true, length: 50 })
  txtAditivo: string | null;

  @Column("date", { name: "DT_VIGENCIA_TERMINO", nullable: true })
  dtVigenciaTermino: Date | null;

  @Column("date", { name: "DT_VIGENCIA_INICIO", nullable: true })
  dtVigenciaInicio: Date | null;

  @Column("date", { name: "DT_PUBLICACAO", nullable: true })
  dtPublicacao: Date | null;

  @Column("date", { name: "DT_ENCERRAMENTO", nullable: true })
  dtEncerramento: Date | null;

  @Column("date", { name: "DT_ASSINATURA", nullable: true })
  dtAssinatura: Date | null;

  @Column("number", {
    name: "COD_VALOR_TOTAL",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorTotal: number | null;

  @Column("number", { name: "COD_PAGINA_PUBLICACAO", nullable: true, scale: 0 })
  codPaginaPublicacao: number | null;

  @Column("number", { name: "COD_NUMERO_PUBLICACAO", nullable: true, scale: 0 })
  codNumeroPublicacao: number | null;

  @Column("number", { name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", {
    name: "COD_ADITIVO_MODALIDADE",
    nullable: true,
    scale: 0,
  })
  codAditivoModalidade: number | null;

  @Column("number", { name: "COD_ADITIVO", scale: 0 })
  codAditivo: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_OPERADOR", ["codContrato", "codUsuario"], {
  unique: true,
})
@Entity("TBL_CONTRATO_OPERADOR")
export class TblContratoOperador {
  @Column("varchar2", { name: "TXT_PUBLICACAO", nullable: true, length: 30 })
  txtPublicacao: string | null;

  @Column("date", { name: "DT_TERMINO", nullable: true })
  dtTermino: Date | null;

  @Column("date", { name: "DT_INICIO", default: () => "SYSDATE" })
  dtInicio: Date;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_PAGINA_PUBLICACAO", nullable: true, scale: 0 })
  codPaginaPublicacao: number | null;

  @Column("number", { name: "COD_NUMERO_PUBLICACAO", nullable: true, scale: 0 })
  codNumeroPublicacao: number | null;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @Column("number", { name: "COD_CATEGORIA", scale: 0 })
  codCategoria: number;
}

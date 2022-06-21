import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_DOCUMENTO_NUMERO_EMPRES",
  ["codEmpresa", "codDocumentoTipo", "codAno"],
  { unique: true }
)
@Entity("TBL_DOCUMENTO_NUMERO_EMPRESA")
export class TblDocumentoNumeroEmpresa {
  @Column("number", {
    name: "COD_NUMERO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codNumero: number;

  @Column("number", {
    primary: true,
    name: "COD_EMPRESA",
    precision: 10,
    scale: 0,
  })
  codEmpresa: number;

  @Column("number", {
    primary: true,
    name: "COD_DOCUMENTO_TIPO",
    precision: 10,
    scale: 0,
  })
  codDocumentoTipo: number;

  @Column("number", { primary: true, name: "COD_ANO", precision: 10, scale: 0 })
  codAno: number;
}

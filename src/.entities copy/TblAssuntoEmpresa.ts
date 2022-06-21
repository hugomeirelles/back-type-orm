import { Column, Entity, Index } from "typeorm";

@Index("PK_ASSUNTO_EMPRESA", ["codAssunto", "codEmpresa"], { unique: true })
@Entity("TBL_ASSUNTO_EMPRESA")
export class TblAssuntoEmpresa {
  @Column("number", {
    primary: true,
    name: "COD_EMPRESA",
    precision: 4,
    scale: 0,
  })
  codEmpresa: number;

  @Column("number", {
    primary: true,
    name: "COD_ASSUNTO",
    precision: 4,
    scale: 0,
  })
  codAssunto: number;
}

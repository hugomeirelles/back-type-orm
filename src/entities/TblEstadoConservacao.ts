import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269646", ["codEstadoConservacao"], { unique: true })
@Entity("TBL_ESTADO_CONSERVACAO")
export class TblEstadoConservacao {
  @Column("varchar2", {
    name: "TXT_ESTADO_CONSERVACAO",
    nullable: true,
    length: 50,
  })
  txtEstadoConservacao: string | null;

  @Column("number", {
    primary: true,
    name: "COD_ESTADO_CONSERVACAO",
    precision: 10,
    scale: 0,
  })
  codEstadoConservacao: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;
}

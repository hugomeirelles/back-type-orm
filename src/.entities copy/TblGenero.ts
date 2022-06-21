import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269743", ["codGenero"], { unique: true })
@Entity("TBL_GENERO")
export class TblGenero {
  @Column("varchar2", { name: "TXT_GENERO", length: 100 })
  txtGenero: string;

  @Column("number", {
    primary: true,
    name: "COD_GENERO",
    precision: 5,
    scale: 0,
  })
  codGenero: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;
}

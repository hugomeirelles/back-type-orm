import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_ESPECIE", ["codEspecie"], { unique: true })
@Entity("TBL_ESPECIE")
export class TblEspecie {
  @Column("varchar2", { name: "TXT_ESPECIE", length: 255 })
  txtEspecie: string;

  @Column("number", {
    primary: true,
    name: "COD_ESPECIE",
    precision: 10,
    scale: 0,
  })
  codEspecie: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;
}

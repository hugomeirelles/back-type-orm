import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONVENIO_PROGRAMA", ["codPrograma"], { unique: true })
@Entity("TBL_CONVENIO_PROGRAMA")
export class TblConvenioPrograma {
  @Column("varchar2", { name: "TXT_PROGRAMA", length: 255 })
  txtPrograma: string;

  @Column("number", { primary: true, name: "COD_PROGRAMA", scale: 0 })
  codPrograma: number;

  @Column("number", { name: "COD_NUMERO", scale: 0 })
  codNumero: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONVENIO_FONTE_RECURSO", ["codFonteRecurso"], { unique: true })
@Entity("TBL_CONVENIO_FONTE_RECURSO")
export class TblConvenioFonteRecurso {
  @Column("varchar2", { name: "TXT_FONTE_RECURSO", length: 255 })
  txtFonteRecurso: string;

  @Column("number", { name: "COD_NUMERO", scale: 0 })
  codNumero: number;

  @Column("number", { primary: true, name: "COD_FONTE_RECURSO", scale: 0 })
  codFonteRecurso: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

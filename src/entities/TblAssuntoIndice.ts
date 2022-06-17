import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAssunto } from "./TblAssunto";

@Index("PK_TBL_ASSUNTO_INDICE", ["codAssunto", "txtIndice"], { unique: true })
@Entity("TBL_ASSUNTO_INDICE")
export class TblAssuntoIndice {
  @Column("varchar2", { primary: true, name: "TXT_INDICE", length: 255 })
  txtIndice: string;

  @Column("number", { primary: true, name: "COD_ASSUNTO", scale: 0 })
  codAssunto: number;

  @ManyToOne(() => TblAssunto, (tblAssunto) => tblAssunto.tblAssuntoIndices)
  @JoinColumn([{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }])
  codAssunto2: TblAssunto;
}

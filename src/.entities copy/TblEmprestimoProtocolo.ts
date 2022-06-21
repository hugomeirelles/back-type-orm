import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";

@Index("PK_TBL_EMPRESTIMO_PROTOCOLO", ["codEmprestimo", "codProtocolo"], {
  unique: true,
})
@Entity("TBL_EMPRESTIMO_PROTOCOLO")
export class TblEmprestimoProtocolo {
  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_EMPRESTIMO", scale: 0 })
  codEmprestimo: number;

  @ManyToOne(
    () => TblEmprestimo,
    (tblEmprestimo) => tblEmprestimo.tblEmprestimoProtocolos
  )
  @JoinColumn([
    { name: "COD_EMPRESTIMO", referencedColumnName: "codEmprestimo" },
  ])
  codEmprestimo2: TblEmprestimo;
}

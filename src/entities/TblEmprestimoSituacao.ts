import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";

@Index("PK_TBL_EMPRESTIMO_SITUACAO", ["codSituacao"], { unique: true })
@Entity("TBL_EMPRESTIMO_SITUACAO")
export class TblEmprestimoSituacao {
  @Column("varchar2", { name: "TXT_SITUACAO", length: 100 })
  txtSituacao: string;

  @Column("number", { primary: true, name: "COD_SITUACAO", scale: 0 })
  codSituacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(() => TblEmprestimo, (tblEmprestimo) => tblEmprestimo.codSituacao)
  tblEmprestimos: TblEmprestimo[];
}

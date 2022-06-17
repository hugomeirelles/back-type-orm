import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";

@Index("PK_EMPRESTIMOREGISTROAVULSO", ["codEmprestimo", "codRegistro"], {
  unique: true,
})
@Entity("TBL_EMPRESTIMO_REGISTRO_AVULSO")
export class TblEmprestimoRegistroAvulso {
  @Column("varchar2", { name: "TXT_LOCALIZACAO_FISICA", length: 255 })
  txtLocalizacaoFisica: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 255 })
  txtDescricao: string;

  @Column("number", { primary: true, name: "COD_REGISTRO", scale: 0 })
  codRegistro: number;

  @Column("number", { primary: true, name: "COD_EMPRESTIMO", scale: 0 })
  codEmprestimo: number;

  @ManyToOne(
    () => TblEmprestimo,
    (tblEmprestimo) => tblEmprestimo.tblEmprestimoRegistroAvulsos
  )
  @JoinColumn([
    { name: "COD_EMPRESTIMO", referencedColumnName: "codEmprestimo" },
  ])
  codEmprestimo2: TblEmprestimo;
}

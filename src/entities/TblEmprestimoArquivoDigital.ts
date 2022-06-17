import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_EMPRESTIMOARQUIVODIGITAL", ["codEmprestimo", "txtArquivo"], {
  unique: true,
})
@Entity("TBL_EMPRESTIMO_ARQUIVO_DIGITAL")
export class TblEmprestimoArquivoDigital {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_ORIGEM", scale: 0, default: () => "(1)" })
  codOrigem: number;

  @Column("number", { primary: true, name: "COD_EMPRESTIMO", scale: 0 })
  codEmprestimo: number;

  @ManyToOne(
    () => TblEmprestimo,
    (tblEmprestimo) => tblEmprestimo.tblEmprestimoArquivoDigitals
  )
  @JoinColumn([
    { name: "COD_EMPRESTIMO", referencedColumnName: "codEmprestimo" },
  ])
  codEmprestimo2: TblEmprestimo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblEmprestimoArquivoDigitals
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPRESTIMOARQUIVODIGIT_T", ["codEmprestimo", "txtArquivo"], {
  unique: true,
})
@Entity("TBL_EMPRESTIMO_ARQUIVO_DIGIT_T")
export class TblEmprestimoArquivoDigitT {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_EMPRESTIMO", scale: 0 })
  codEmprestimo: number;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblArquivo } from "./TblArquivo";

@Index("PK_ARQUIVOINVENTARIOEMPRESTIMO", ["codInventario", "dtEmprestimo"], {
  unique: true,
})
@Entity("TBL_ARQUIVO_EMPRESTIMO")
export class TblArquivoEmprestimo {
  @Column("varchar2", { name: "TXT_PESSOA", nullable: true, length: 255 })
  txtPessoa: string | null;

  @Column("clob", { name: "TXT_PARTE", nullable: true })
  txtParte: string | null;

  @Column("number", { name: "TXT_DIA", scale: 0 })
  txtDia: number;

  @Column("date", { name: "DT_RETORNO" })
  dtRetorno: Date;

  @Column("date", {
    primary: true,
    name: "DT_EMPRESTIMO",
    default: () => "sysdate",
  })
  dtEmprestimo: Date;

  @Column("date", { name: "DT_DEVOLUCAO", nullable: true })
  dtDevolucao: Date | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_ORGAO_ORIGEM", scale: 0 })
  codOrgaoOrigem: number;

  @Column("number", { name: "COD_ORGAO_DESTINO", scale: 0 })
  codOrgaoDestino: number;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @ManyToOne(() => TblArquivo, (tblArquivo) => tblArquivo.tblArquivoEmprestimos)
  @JoinColumn([
    { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
  ])
  codInventario2: TblArquivo;
}

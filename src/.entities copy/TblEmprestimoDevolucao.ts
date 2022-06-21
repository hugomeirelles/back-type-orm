import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_EMPRESTIMO_DEVOLUCAO")
export class TblEmprestimoDevolucao {
  @Column("clob", { name: "TXT_DESCRICAO_PARCIAL", nullable: true })
  txtDescricaoParcial: string | null;

  @Column("date", { name: "DT_DEVOLUCAO", default: () => "sysdate" })
  dtDevolucao: Date;

  @Column("number", { name: "COD_PARCIAL", scale: 0, default: () => "(0)" })
  codParcial: number;

  @ManyToOne(
    () => TblEmprestimo,
    (tblEmprestimo) => tblEmprestimo.tblEmprestimoDevolucaos
  )
  @JoinColumn([
    { name: "COD_EMPRESTIMO", referencedColumnName: "codEmprestimo" },
  ])
  codEmprestimo: TblEmprestimo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblEmprestimoDevolucaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

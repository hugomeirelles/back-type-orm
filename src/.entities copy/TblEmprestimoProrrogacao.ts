import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_EMPRESTIMO_PRORROGACAO", ["codEmprestimo", "dtSolicitacao"], {
  unique: true,
})
@Entity("TBL_EMPRESTIMO_PRORROGACAO")
export class TblEmprestimoProrrogacao {
  @Column("clob", { name: "TXT_JUSTIFICATIVA", nullable: true })
  txtJustificativa: string | null;

  @Column("date", {
    primary: true,
    name: "DT_SOLICITACAO",
    default: () => "sysdate",
  })
  dtSolicitacao: Date;

  @Column("date", { name: "DT_AUTORIZACAO", nullable: true })
  dtAutorizacao: Date | null;

  @Column("number", { name: "COD_PRAZO", scale: 0, default: () => "(10)" })
  codPrazo: number;

  @Column("number", { primary: true, name: "COD_EMPRESTIMO", scale: 0 })
  codEmprestimo: number;

  @Column("number", { name: "COD_AUTORIZADO", scale: 0, default: () => "(0)" })
  codAutorizado: number;

  @ManyToOne(
    () => TblEmprestimo,
    (tblEmprestimo) => tblEmprestimo.tblEmprestimoProrrogacaos
  )
  @JoinColumn([
    { name: "COD_EMPRESTIMO", referencedColumnName: "codEmprestimo" },
  ])
  codEmprestimo2: TblEmprestimo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblEmprestimoProrrogacaos
  )
  @JoinColumn([
    { name: "COD_USUARIO_SOLICITANTE", referencedColumnName: "codUsuario" },
  ])
  codUsuarioSolicitante: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblEmprestimoProrrogacaos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_AUTORIZADOR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioAutorizador: TblSegUsuario;
}

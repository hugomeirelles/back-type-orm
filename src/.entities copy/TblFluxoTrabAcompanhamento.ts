import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoExecucao } from "./TblFluxoTrabalhoExecucao";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_FLUXO_TRAB_ACOMPANHAMENTO", ["codFluxoTrabAcompanhamento"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRAB_ACOMPANHAMENTO")
export class TblFluxoTrabAcompanhamento {
  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRAB_ACOMPANHAMENTO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabAcompanhamento: number;

  @ManyToOne(
    () => TblFluxoTrabalhoExecucao,
    (tblFluxoTrabalhoExecucao) =>
      tblFluxoTrabalhoExecucao.tblFluxoTrabAcompanhamentos
  )
  @JoinColumn([
    {
      name: "COD_FLUXO_TRABALHO_EXECUCAO",
      referencedColumnName: "codFluxoTrabalhoExecucao",
    },
  ])
  codFluxoTrabalhoExecucao: TblFluxoTrabalhoExecucao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblFluxoTrabAcompanhamentos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

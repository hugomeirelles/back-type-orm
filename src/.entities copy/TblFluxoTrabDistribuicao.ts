import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoAtividade } from "./TblFluxoTrabalhoAtividade";
import { TblMotivo } from "./TblMotivo";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblOrgao } from "./TblOrgao";

@Index("PK_FLUXO_TRAB_DISTRIBUICAO", ["codFluxoTrabDistribuicao"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRAB_DISTRIBUICAO")
export class TblFluxoTrabDistribuicao {
  @Column("varchar2", { name: "TXT_PROVIDENCIA", nullable: true, length: 1000 })
  txtProvidencia: string | null;

  @Column("date", { name: "DT_DISTRIBUICAO" })
  dtDistribuicao: Date;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRAB_DISTRIBUICAO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabDistribuicao: number;

  @Column("number", { name: "COD_ATIVO", precision: 22, scale: 0 })
  codAtivo: number;

  @ManyToOne(
    () => TblFluxoTrabalhoAtividade,
    (tblFluxoTrabalhoAtividade) =>
      tblFluxoTrabalhoAtividade.tblFluxoTrabDistribuicaos
  )
  @JoinColumn([
    {
      name: "COD_FLUXO_TRABALHO_ATIVIDADE",
      referencedColumnName: "codFluxoTrabalhoAtividade",
    },
  ])
  codFluxoTrabalhoAtividade: TblFluxoTrabalhoAtividade;

  @ManyToOne(
    () => TblMotivo,
    (tblMotivo) => tblMotivo.tblFluxoTrabDistribuicaos
  )
  @JoinColumn([{ name: "COD_MOTIVO", referencedColumnName: "codMotivo" }])
  codMotivo: TblMotivo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblFluxoTrabDistribuicaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblFluxoTrabDistribuicaos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblFluxoTrabDistribuicaos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_RESPONSAVEL", referencedColumnName: "codUsuario" },
  ])
  codUsuarioResponsavel: TblSegUsuario;
}

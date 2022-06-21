import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblFluxoTrabalhoExecucao } from "./TblFluxoTrabalhoExecucao";

@Index("PK_FLUXO_TRABALHO_SITUACAO", ["codFluxoTrabalhoSituacao"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRABALHO_SITUACAO")
export class TblFluxoTrabalhoSituacao {
  @Column("varchar2", {
    name: "TXT_SITUACAO_FLUXO",
    nullable: true,
    length: 100,
  })
  txtSituacaoFluxo: string | null;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO_SITUACAO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoSituacao: number;

  @Column("number", {
    name: "COD_ATIVO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtivo: number | null;

  @OneToMany(
    () => TblFluxoTrabalhoExecucao,
    (tblFluxoTrabalhoExecucao) =>
      tblFluxoTrabalhoExecucao.codFluxoTrabalhoSituacao
  )
  tblFluxoTrabalhoExecucaos: TblFluxoTrabalhoExecucao[];
}

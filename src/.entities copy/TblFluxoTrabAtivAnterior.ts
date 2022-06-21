import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblOrgao } from "./TblOrgao";

@Index("PK_FLUXO_TRAB_ATIV_ANTERIOR", ["codFluxoTrabAtivAnterior"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRAB_ATIV_ANTERIOR")
export class TblFluxoTrabAtivAnterior {
  @Column("date", { name: "DT_INCLUSAO", nullable: true })
  dtInclusao: Date | null;

  @Column("date", { name: "DT_INATIVADO", nullable: true })
  dtInativado: Date | null;

  @Column("number", {
    name: "COD_PROTOCOLO_FISICO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codProtocoloFisico: number | null;

  @Column("number", {
    name: "COD_FLUXO_TRAB_ATIV_ATUAL",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabAtivAtual: number;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRAB_ATIV_ANTERIOR",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabAtivAnterior: number;

  @Column("number", {
    name: "COD_ATIVO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtivo: number | null;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblFluxoTrabAtivAnteriors)
  @JoinColumn([
    { name: "COD_ORGAO_ANTERIOR", referencedColumnName: "codOrgao" },
  ])
  codOrgaoAnterior: TblOrgao;
}

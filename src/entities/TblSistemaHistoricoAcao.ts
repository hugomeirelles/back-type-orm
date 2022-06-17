import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { TblSistemaHistoricoObjeto } from "./TblSistemaHistoricoObjeto";
import { TblSistemaHistorico } from "./TblSistemaHistorico";

@Index("PK_TBL_SISTEMA_HISTORICO_ACAO", ["codAcao"], { unique: true })
@Index("UC_TBL_SISTEMA_HISTORICO_ACAO", ["txtConstante"], { unique: true })
@Entity("TBL_SISTEMA_HISTORICO_ACAO")
export class TblSistemaHistoricoAcao {
  @Column("varchar2", { name: "TXT_CONSTANTE", unique: true, length: 50 })
  txtConstante: string;

  @Column("varchar2", { name: "TXT_ACAO", length: 255 })
  txtAcao: string;

  @Column("number", { name: "COD_EXIBE_COMBO" })
  codExibeCombo: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @Column("number", {
    primary: true,
    name: "COD_ACAO",
    precision: 10,
    scale: 0,
  })
  codAcao: number;

  @ManyToMany(
    () => TblSistemaHistoricoObjeto,
    (tblSistemaHistoricoObjeto) =>
      tblSistemaHistoricoObjeto.tblSistemaHistoricoAcaos
  )
  @JoinTable({
    name: "TBL_SISTEMA_HIST_OBJETO_ACAO",
    joinColumns: [{ name: "COD_ACAO", referencedColumnName: "codAcao" }],
    inverseJoinColumns: [
      { name: "COD_OBJETO", referencedColumnName: "codObjeto" },
    ],
  })
  tblSistemaHistoricoObjetos: TblSistemaHistoricoObjeto[];

  @OneToMany(
    () => TblSistemaHistorico,
    (tblSistemaHistorico) => tblSistemaHistorico.codAcao2
  )
  tblSistemaHistoricos: TblSistemaHistorico[];
}

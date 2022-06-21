import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblJudicial } from "./TblJudicial";

@Index("PK_TBL_JUDICIAL_SITUACAO", ["codJudicialSituacao"], { unique: true })
@Entity("TBL_JUDICIAL_SITUACAO")
export class TblJudicialSituacao {
  @Column("varchar2", { name: "TXT_JUDICIAL_SITUACAO", length: 50 })
  txtJudicialSituacao: string;

  @Column("number", { primary: true, name: "COD_JUDICIAL_SITUACAO", scale: 0 })
  codJudicialSituacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblJudicial,
    (tblJudicial) => tblJudicial.codJudicialSituacao
  )
  tblJudicials: TblJudicial[];
}

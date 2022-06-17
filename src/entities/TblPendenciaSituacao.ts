import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblPendencia } from "./TblPendencia";

@Index("TBL_PENDENCIA_SITUACAO_PK", ["codPendenciaSituacao"], { unique: true })
@Entity("TBL_PENDENCIA_SITUACAO")
export class TblPendenciaSituacao {
  @Column("varchar2", { name: "TXT_PENDENCIA_SITUACAO", length: 100 })
  txtPendenciaSituacao: string;

  @Column("number", { primary: true, name: "COD_PENDENCIA_SITUACAO" })
  codPendenciaSituacao: number;

  @OneToMany(
    () => TblPendencia,
    (tblPendencia) => tblPendencia.codPendenciaSituacao
  )
  tblPendencias: TblPendencia[];
}

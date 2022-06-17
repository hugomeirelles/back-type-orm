import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";
import { TblJudicial } from "./TblJudicial";

@Index("PK_TBL_ASSUNTO_CNJ", ["codAssuntoCnj"], { unique: true })
@Entity("TBL_ASSUNTO_CNJ")
export class TblAssuntoCnj {
  @Column("clob", { name: "TXT_ASSUNTO_CNJ", nullable: true })
  txtAssuntoCnj: string | null;

  @Column("char", { name: "SIGILOSO", nullable: true, length: 1 })
  sigiloso: string | null;

  @Column("varchar2", {
    name: "DISPOSITIVO_LEGAL",
    nullable: true,
    length: 250,
  })
  dispositivoLegal: string | null;

  @Column("char", {
    name: "CRIME_ANTECEDENTE",
    nullable: true,
    length: 1,
    default: () => "'n'",
  })
  crimeAntecedente: string | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_ASSUNTO_CNJ", scale: 0 })
  codAssuntoCnj: number;

  @Column("char", { name: "ASSUNTO_SECUNDARIO", nullable: true, length: 1 })
  assuntoSecundario: string | null;

  @Column("varchar2", { name: "ARTI", nullable: true, length: 250 })
  arti: string | null;

  @ManyToMany(() => TblJudicial, (tblJudicial) => tblJudicial.tblAssuntoCnjs)
  @JoinTable({
    name: "TBL_JUDICIAL_ASSUNTO",
    joinColumns: [
      { name: "COD_ASSUNTO_CNJ", referencedColumnName: "codAssuntoCnj" },
    ],
    inverseJoinColumns: [
      { name: "COD_JUDICIAL", referencedColumnName: "codJudicial" },
    ],
  })
  tblJudicials: TblJudicial[];
}

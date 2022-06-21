import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblJudicialMovimento } from "./TblJudicialMovimento";

@Index("PK_TBL_JUDICIAL_FASE", ["codJudicialFase"], { unique: true })
@Entity("TBL_JUDICIAL_FASE")
export class TblJudicialFase {
  @Column("varchar2", { name: "USU_INCLUSAO", nullable: true, length: 30 })
  usuInclusao: string | null;

  @Column("varchar2", { name: "USU_ALTERACAO", nullable: true, length: 30 })
  usuAlteracao: string | null;

  @Column("varchar2", { name: "TXT_FASE", nullable: true, length: 250 })
  txtFase: string | null;

  @Column("clob", { name: "GLOSSARIO", nullable: true })
  glossario: string | null;

  @Column("varchar2", {
    name: "DSC_IP_USU_INCLUSAO",
    nullable: true,
    length: 15,
  })
  dscIpUsuInclusao: string | null;

  @Column("date", { name: "DAT_INCLUSAO", nullable: true })
  datInclusao: Date | null;

  @Column("number", { primary: true, name: "COD_JUDICIAL_FASE", scale: 0 })
  codJudicialFase: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblJudicialMovimento,
    (tblJudicialMovimento) => tblJudicialMovimento.codJudicialFase
  )
  tblJudicialMovimentos: TblJudicialMovimento[];
}

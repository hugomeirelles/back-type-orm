import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicial } from "./TblJudicial";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_JUDICIAL_NUMERO", ["codJudicial", "codJudicialNumero"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_NUMERO")
export class TblJudicialNumero {
  @Column("varchar2", { name: "TXT_NUMERO_CLASSE", length: 50 })
  txtNumeroClasse: string;

  @Column("date", { name: "DT_NUMERO", default: () => "sysdate" })
  dtNumero: Date;

  @Column("date", { name: "DT_DECISAO_URGENCIA", nullable: true })
  dtDecisaoUrgencia: Date | null;

  @Column("date", { name: "DT_DECISAO_DEFINITIVA", nullable: true })
  dtDecisaoDefinitiva: Date | null;

  @Column("number", { name: "COD_VARA", nullable: true, scale: 0 })
  codVara: number | null;

  @Column("number", { name: "COD_ORGAO_JULGADOR", nullable: true, scale: 0 })
  codOrgaoJulgador: number | null;

  @Column("number", { primary: true, name: "COD_JUDICIAL_NUMERO", scale: 0 })
  codJudicialNumero: number;

  @Column("number", {
    name: "COD_JUDICIAL_DECISAO_URGENCIA",
    scale: 0,
    default: () => "(1)",
  })
  codJudicialDecisaoUrgencia: number;

  @Column("number", {
    name: "COD_JUDICIAL_DECISAO_DEFINITIV",
    scale: 0,
    default: () => "(1)",
  })
  codJudicialDecisaoDefinitiv: number;

  @Column("number", { name: "COD_JUDICIAL_CLASSE", scale: 0 })
  codJudicialClasse: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("varchar2", { name: "TXT_VARA_", nullable: true, length: 100 })
  txtVara: string | null;

  @Column("varchar2", { name: "TXT_NUMERO_CNJ", nullable: true, length: 50 })
  txtNumeroCnj: string | null;

  @ManyToOne(() => TblJudicial, (tblJudicial) => tblJudicial.tblJudicialNumeros)
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblJudicialNumeros
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

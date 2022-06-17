import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblMinuta } from "./TblMinuta";
import { TblOrgao } from "./TblOrgao";

@Index("PK_TBL_MINUTA_ACESSO", ["codMinuta", "codOrgao"], { unique: true })
@Entity("TBL_MINUTA_ACESSO")
export class TblMinutaAcesso {
  @Column("date", { name: "DT_LEITURA", nullable: true })
  dtLeitura: Date | null;

  @Column("date", { name: "DT_ACESSO", default: () => "sysdate" })
  dtAcesso: Date;

  @Column("number", { name: "COD_USUARIO", nullable: true, scale: 0 })
  codUsuario: number | null;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_OPERACAO", scale: 0, default: () => "(1)" })
  codOperacao: number;

  @Column("number", { primary: true, name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @Column("number", { name: "COD_LEITURA", scale: 0, default: () => "(0)" })
  codLeitura: number;

  @ManyToOne(() => TblMinuta, (tblMinuta) => tblMinuta.tblMinutaAcessos)
  @JoinColumn([{ name: "COD_MINUTA", referencedColumnName: "codMinuta" }])
  codMinuta2: TblMinuta;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblMinutaAcessos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;
}

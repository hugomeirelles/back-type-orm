import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblJudicial } from "./TblJudicial";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_JUDICIAL_ARMAZENAR", ["codJudicial", "dtArmazenar"], {
  unique: true,
})
@Entity("TBL_JUDICIAL_ARMAZENAR")
export class TblJudicialArmazenar {
  @Column("varchar2", { name: "TXT_CAIXA", nullable: true, length: 255 })
  txtCaixa: string | null;

  @Column("varchar2", { name: "TXT_ARMARIO", nullable: true, length: 255 })
  txtArmario: string | null;

  @Column("date", {
    primary: true,
    name: "DT_ARMAZENAR",
    default: () => "sysdate",
  })
  dtArmazenar: Date;

  @Column("number", { name: "COD_USUARIO_DESFAZER", nullable: true, scale: 0 })
  codUsuarioDesfazer: number | null;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { primary: true, name: "COD_JUDICIAL", scale: 0 })
  codJudicial: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblJudicial,
    (tblJudicial) => tblJudicial.tblJudicialArmazenars
  )
  @JoinColumn([{ name: "COD_JUDICIAL", referencedColumnName: "codJudicial" }])
  codJudicial2: TblJudicial;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblJudicialArmazenars
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

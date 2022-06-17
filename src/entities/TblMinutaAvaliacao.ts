import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblMinuta } from "./TblMinuta";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_MINUTA_AVALIACAO", ["codMinuta", "codAvaliacao"], {
  unique: true,
})
@Entity("TBL_MINUTA_AVALIACAO")
export class TblMinutaAvaliacao {
  @Column("clob", { name: "TXT_AVALIACAO" })
  txtAvaliacao: string;

  @Column("date", { name: "DT_PRAZO" })
  dtPrazo: Date;

  @Column("date", { name: "DT_FINALIZACAO", nullable: true })
  dtFinalizacao: Date | null;

  @Column("date", { name: "DT_AVALIACAO", default: () => "sysdate" })
  dtAvaliacao: Date;

  @Column("number", {
    name: "COD_USUARIO_FINALIZACAO",
    nullable: true,
    scale: 0,
  })
  codUsuarioFinalizacao: number | null;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @Column("number", {
    name: "COD_AVALIACAO_FINAL",
    scale: 0,
    default: () => "(0)",
  })
  codAvaliacaoFinal: number;

  @Column("number", { name: "COD_AVALIACAO", scale: 0 })
  codAvaliacao: number;

  @ManyToOne(() => TblMinuta, (tblMinuta) => tblMinuta.tblMinutaAvaliacaos)
  @JoinColumn([{ name: "COD_MINUTA", referencedColumnName: "codMinuta" }])
  codMinuta2: TblMinuta;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblMinutaAvaliacaos
  )
  @JoinColumn([
    { name: "COD_USUARIO_SOLICITANTE", referencedColumnName: "codUsuario" },
  ])
  codUsuarioSolicitante: TblSegUsuario;
}

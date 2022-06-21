import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegPerfil } from "./TblSegPerfil";

@Index("PK_TBL_SEG_PERFIL_RELATORIO", ["codPerfil", "codRelatorioTipo"], {
  unique: true,
})
@Entity("TBL_SEG_PERFIL_RELATORIO")
export class TblSegPerfilRelatorio {
  @Column("number", { primary: true, name: "COD_RELATORIO_TIPO", scale: 0 })
  codRelatorioTipo: number;

  @Column("number", { primary: true, name: "COD_PERFIL", scale: 0 })
  codPerfil: number;

  @Column("number", { name: "COD_ACESSO", scale: 0, default: () => "(0)" })
  codAcesso: number;

  @ManyToOne(
    () => TblSegPerfil,
    (tblSegPerfil) => tblSegPerfil.tblSegPerfilRelatorios
  )
  @JoinColumn([{ name: "COD_PERFIL", referencedColumnName: "codPerfil" }])
  codPerfil2: TblSegPerfil;
}

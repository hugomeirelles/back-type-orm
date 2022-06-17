import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblResponsavelAtividade } from "./TblResponsavelAtividade";

@Index("PK_FLUXO_TRABALHO_GRUPO", ["codGrupo"], { unique: true })
@Entity("TBL_FLUXO_TRABALHO_GRUPO")
export class TblFluxoTrabalhoGrupo {
  @Column("varchar2", { name: "TXT_GRUPO", length: 100 })
  txtGrupo: string;

  @Column("date", { name: "DT_GRUPO" })
  dtGrupo: Date;

  @Column("number", { name: "COD_TIPO_DISTRIBUICAO", precision: 22, scale: 0 })
  codTipoDistribuicao: number;

  @Column("number", {
    primary: true,
    name: "COD_GRUPO",
    precision: 22,
    scale: 0,
  })
  codGrupo: number;

  @OneToMany(
    () => TblResponsavelAtividade,
    (tblResponsavelAtividade) => tblResponsavelAtividade.codGrupo
  )
  tblResponsavelAtividades: TblResponsavelAtividade[];
}

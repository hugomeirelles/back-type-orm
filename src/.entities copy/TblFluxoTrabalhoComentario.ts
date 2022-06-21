import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoAtividade } from "./TblFluxoTrabalhoAtividade";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_FLUXO_TRABALHO_COMENTARIO", ["codFluxoTrabalhoComentario"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRABALHO_COMENTARIO")
export class TblFluxoTrabalhoComentario {
  @Column("varchar2", { name: "TXT_COMENTARIO", nullable: true, length: 500 })
  txtComentario: string | null;

  @Column("timestamp", { name: "DT_COMENTARIO", scale: 6 })
  dtComentario: Date;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO_COMENTARIO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoComentario: number;

  @ManyToOne(
    () => TblFluxoTrabalhoAtividade,
    (tblFluxoTrabalhoAtividade) =>
      tblFluxoTrabalhoAtividade.tblFluxoTrabalhoComentarios
  )
  @JoinColumn([
    {
      name: "COD_FLUXO_TRABALHO_ATIVIDADE",
      referencedColumnName: "codFluxoTrabalhoAtividade",
    },
  ])
  codFluxoTrabalhoAtividade: TblFluxoTrabalhoAtividade;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblFluxoTrabalhoComentarios
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

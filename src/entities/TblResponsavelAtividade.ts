import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoGrupo } from "./TblFluxoTrabalhoGrupo";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_RESPONSAVEL_ATIVIDADE")
export class TblResponsavelAtividade {
  @Column("number", { name: "COD_ATIVIDADE_FLUXO" })
  codAtividadeFluxo: number;

  @ManyToOne(
    () => TblFluxoTrabalhoGrupo,
    (tblFluxoTrabalhoGrupo) => tblFluxoTrabalhoGrupo.tblResponsavelAtividades
  )
  @JoinColumn([{ name: "COD_GRUPO", referencedColumnName: "codGrupo" }])
  codGrupo: TblFluxoTrabalhoGrupo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblResponsavelAtividades
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

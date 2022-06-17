import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { TblPendenciaRespArqUsuario } from "./TblPendenciaRespArqUsuario";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";
import { TblPendenciaUsuarioExterno } from "./TblPendenciaUsuarioExterno";

@Index("TBL_PENDENCIA_RESPOSTA_USU_PK", ["codPendenciaRespostaUsuario"], {
  unique: true,
})
@Entity("TBL_PENDENCIA_RESPOSTA_USUARIO")
export class TblPendenciaRespostaUsuario {
  @Column("clob", { name: "TXT_RESPOSTA", nullable: true })
  txtResposta: string | null;

  @Column("date", { name: "DT_RESPOSTA", nullable: true })
  dtResposta: Date | null;

  @Column("number", { name: "COD_USUARIO_EXTERNO_RESPOSTA" })
  codUsuarioExternoResposta: number;

  @Column("number", { name: "COD_USUARIO_ANALISE", nullable: true })
  codUsuarioAnalise: number | null;

  @Column("number", { name: "COD_PENDENCIA_SITUACAO", nullable: true })
  codPendenciaSituacao: number | null;

  @Column("number", { primary: true, name: "COD_PENDENCIA_RESPOSTA_USUARIO" })
  codPendenciaRespostaUsuario: number;

  @OneToMany(
    () => TblPendenciaRespArqUsuario,
    (tblPendenciaRespArqUsuario) =>
      tblPendenciaRespArqUsuario.codPendenciaRespostaUsuario
  )
  tblPendenciaRespArqUsuarios: TblPendenciaRespArqUsuario[];

  @OneToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblPendenciaRespostaUsuario
  )
  @JoinColumn([
    {
      name: "COD_PENDENCIA_RESPOSTA_USUARIO",
      referencedColumnName: "codUsuarioExterno",
    },
  ])
  codPendenciaRespostaUsuario2: TblSegUsuarioExterno;

  @ManyToOne(
    () => TblPendenciaUsuarioExterno,
    (tblPendenciaUsuarioExterno) =>
      tblPendenciaUsuarioExterno.tblPendenciaRespostaUsuarios
  )
  @JoinColumn([
    {
      name: "COD_PENDENCIA_USUARIO_EXTERNO",
      referencedColumnName: "codPendenciaUsuarioExterno",
    },
  ])
  codPendenciaUsuarioExterno: TblPendenciaUsuarioExterno;
}

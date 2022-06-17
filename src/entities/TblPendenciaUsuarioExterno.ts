import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblPendenciaRespostaUsuario } from "./TblPendenciaRespostaUsuario";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblOrgao } from "./TblOrgao";
import { TblInteressado } from "./TblInteressado";

@Index("TBL_PENDENCIA_USUARIO_EXTE_PK", ["codPendenciaUsuarioExterno"], {
  unique: true,
})
@Entity("TBL_PENDENCIA_USUARIO_EXTERNO")
export class TblPendenciaUsuarioExterno {
  @Column("clob", { name: "TXT_DESCRICAO" })
  txtDescricao: string;

  @Column("date", { name: "DT_RESPOSTA", nullable: true })
  dtResposta: Date | null;

  @Column("date", { name: "DT_PRAZO_RESPOSTA", nullable: true })
  dtPrazoResposta: Date | null;

  @Column("date", { name: "DT_LEITURA", nullable: true })
  dtLeitura: Date | null;

  @Column("date", { name: "DT_CADASTRO", default: () => "sysdate" })
  dtCadastro: Date;

  @Column("number", { name: "COD_USUARIO_LEITURA", nullable: true })
  codUsuarioLeitura: number | null;

  @Column("number", { primary: true, name: "COD_PENDENCIA_USUARIO_EXTERNO" })
  codPendenciaUsuarioExterno: number;

  @Column("number", { name: "COD_PENDENCIA_TIPO" })
  codPendenciaTipo: number;

  @Column("number", { name: "COD_PENDENCIA_SITUACAO" })
  codPendenciaSituacao: number;

  @OneToMany(
    () => TblPendenciaRespostaUsuario,
    (tblPendenciaRespostaUsuario) =>
      tblPendenciaRespostaUsuario.codPendenciaUsuarioExterno
  )
  tblPendenciaRespostaUsuarios: TblPendenciaRespostaUsuario[];

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblPendenciaUsuarioExternos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblPendenciaUsuarioExternos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblPendenciaUsuarioExternos
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;
}

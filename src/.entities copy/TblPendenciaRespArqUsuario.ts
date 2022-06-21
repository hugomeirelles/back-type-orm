import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPendenciaRespostaUsuario } from "./TblPendenciaRespostaUsuario";

@Index("TBL_PENDENCIA_RESP_ARQ_USU_PK", ["codPendenciaRespArqUsuario"], {
  unique: true,
})
@Entity("TBL_PENDENCIA_RESP_ARQ_USUARIO")
export class TblPendenciaRespArqUsuario {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", length: 255 })
  txtHash: string;

  @Column("clob", { name: "TXT_ARQUIVO" })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("number", { name: "COD_TAMANHO" })
  codTamanho: number;

  @Column("number", { primary: true, name: "COD_PENDENCIA_RESP_ARQ_USUARIO" })
  codPendenciaRespArqUsuario: number;

  @Column("number", { name: "COD_PAGINA" })
  codPagina: number;

  @ManyToOne(
    () => TblPendenciaRespostaUsuario,
    (tblPendenciaRespostaUsuario) =>
      tblPendenciaRespostaUsuario.tblPendenciaRespArqUsuarios
  )
  @JoinColumn([
    {
      name: "COD_PENDENCIA_RESPOSTA_USUARIO",
      referencedColumnName: "codPendenciaRespostaUsuario",
    },
  ])
  codPendenciaRespostaUsuario: TblPendenciaRespostaUsuario;
}

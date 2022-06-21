import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPergunta } from "./TblPergunta";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";

@Index("PK_TBL_PERGUNTA_RESPOSTA", ["codPerguntaResposta"], { unique: true })
@Entity("TBL_PERGUNTA_RESPOSTA")
export class TblPerguntaResposta {
  @Column("varchar2", { name: "TXT_RESPOSTA", length: 100 })
  txtResposta: string;

  @Column("number", { primary: true, name: "COD_PERGUNTA_RESPOSTA" })
  codPerguntaResposta: number;

  @Column("number", { name: "COD_DIRECIONAMENTO" })
  codDirecionamento: number;

  @ManyToOne(
    () => TblPergunta,
    (tblPergunta) => tblPergunta.tblPerguntaRespostas
  )
  @JoinColumn([{ name: "COD_PERGUNTA", referencedColumnName: "codPergunta" }])
  codPergunta: TblPergunta;

  @ManyToOne(
    () => TblPergunta,
    (tblPergunta) => tblPergunta.tblPerguntaRespostas2
  )
  @JoinColumn([
    { name: "COD_PERGUNTA_DIRECIONADA", referencedColumnName: "codPergunta" },
  ])
  codPerguntaDirecionada: TblPergunta;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) => tblAssuntoDocumentoTipo.tblPerguntaRespostas
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo: TblAssuntoDocumentoTipo;
}

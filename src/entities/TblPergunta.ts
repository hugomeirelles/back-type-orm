import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAtividadeEconomica } from "./TblAtividadeEconomica";
import { TblPerguntaResposta } from "./TblPerguntaResposta";

@Index("PK_TBL_PERGUNTA", ["codPergunta"], { unique: true })
@Entity("TBL_PERGUNTA")
export class TblPergunta {
  @Column("varchar2", { name: "TXT_PERGUNTA", length: 500 })
  txtPergunta: string;

  @Column("number", { primary: true, name: "COD_PERGUNTA" })
  codPergunta: number;

  @Column("number", { name: "COD_ATIVO", nullable: true })
  codAtivo: number | null;

  @OneToMany(
    () => TblAtividadeEconomica,
    (tblAtividadeEconomica) => tblAtividadeEconomica.codPergunta
  )
  tblAtividadeEconomicas: TblAtividadeEconomica[];

  @OneToMany(
    () => TblPerguntaResposta,
    (tblPerguntaResposta) => tblPerguntaResposta.codPergunta
  )
  tblPerguntaRespostas: TblPerguntaResposta[];

  @OneToMany(
    () => TblPerguntaResposta,
    (tblPerguntaResposta) => tblPerguntaResposta.codPerguntaDirecionada
  )
  tblPerguntaRespostas2: TblPerguntaResposta[];
}

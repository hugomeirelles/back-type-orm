import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { TblAssuntoDocumentoTipo } from "./TblAssuntoDocumentoTipo";
import { TblPergunta } from "./TblPergunta";
import { TblServicoGrupo } from "./TblServicoGrupo";

@Index("PK_TBL_ATIVIDADE_ECONOMICA", ["codAtividadeEconomica"], {
  unique: true,
})
@Entity("TBL_ATIVIDADE_ECONOMICA")
export class TblAtividadeEconomica {
  @Column("clob", { name: "TXT_ORIENTACAO", nullable: true })
  txtOrientacao: string | null;

  @Column("varchar2", { name: "TXT_CODIGO_CNAE", nullable: true, length: 10 })
  txtCodigoCnae: string | null;

  @Column("varchar2", { name: "TXT_ATIVIDADE", length: 500 })
  txtAtividade: string;

  @Column("number", { name: "COD_DIRECIONAMENTO" })
  codDirecionamento: number;

  @Column("number", { name: "COD_ATIVO" })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_ATIVIDADE_ECONOMICA" })
  codAtividadeEconomica: number;

  @ManyToOne(
    () => TblAssuntoDocumentoTipo,
    (tblAssuntoDocumentoTipo) => tblAssuntoDocumentoTipo.tblAtividadeEconomicas
  )
  @JoinColumn([
    {
      name: "COD_ASSUNTO_DOCUMENTO_TIPO",
      referencedColumnName: "codAssuntoDocumentoTipo",
    },
  ])
  codAssuntoDocumentoTipo: TblAssuntoDocumentoTipo;

  @ManyToOne(
    () => TblPergunta,
    (tblPergunta) => tblPergunta.tblAtividadeEconomicas
  )
  @JoinColumn([{ name: "COD_PERGUNTA", referencedColumnName: "codPergunta" }])
  codPergunta: TblPergunta;

  @ManyToMany(
    () => TblServicoGrupo,
    (tblServicoGrupo) => tblServicoGrupo.tblAtividadeEconomicas
  )
  @JoinTable({
    name: "TBL_SERVICO_GRUPO_ATIVIDADE",
    joinColumns: [
      {
        name: "COD_ATIVIDADE_ECONOMICA",
        referencedColumnName: "codAtividadeEconomica",
      },
    ],
    inverseJoinColumns: [
      { name: "COD_SERVICO_GRUPO", referencedColumnName: "codServicoGrupo" },
    ],
  })
  tblServicoGrupos: TblServicoGrupo[];
}

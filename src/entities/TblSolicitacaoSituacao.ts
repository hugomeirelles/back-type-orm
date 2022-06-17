import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblSolicitacao } from "./TblSolicitacao";

@Index("PK_TBL_SOLICITACAO_SITUACAO", ["codSituacao"], { unique: true })
@Entity("TBL_SOLICITACAO_SITUACAO")
export class TblSolicitacaoSituacao {
  @Column("varchar2", { name: "TXT_SITUACAO", length: 100 })
  txtSituacao: string;

  @Column("number", { primary: true, name: "COD_SITUACAO", scale: 0 })
  codSituacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblSolicitacao,
    (tblSolicitacao) => tblSolicitacao.codSituacao
  )
  tblSolicitacaos: TblSolicitacao[];
}

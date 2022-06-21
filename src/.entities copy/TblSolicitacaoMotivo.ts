import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblSolicitacao } from "./TblSolicitacao";

@Index("PK_TBL_SOLICITACAO_MOTIVO", ["codSolicitacaoMotivo"], { unique: true })
@Entity("TBL_SOLICITACAO_MOTIVO")
export class TblSolicitacaoMotivo {
  @Column("varchar2", { name: "TXT_SOLICITACAO_MOTIVO", length: 100 })
  txtSolicitacaoMotivo: string;

  @Column("number", { primary: true, name: "COD_SOLICITACAO_MOTIVO", scale: 0 })
  codSolicitacaoMotivo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblSolicitacao,
    (tblSolicitacao) => tblSolicitacao.codSolicitacaoMotivo
  )
  tblSolicitacaos: TblSolicitacao[];
}

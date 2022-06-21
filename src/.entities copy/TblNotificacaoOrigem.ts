import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblNotificacao } from "./TblNotificacao";

@Index("TBL_NOTIFICACAO_ORIGEM_PK", ["codNotificacaoOrigem"], { unique: true })
@Entity("TBL_NOTIFICACAO_ORIGEM")
export class TblNotificacaoOrigem {
  @Column("varchar2", { name: "TXT_NOTIFICACAO_ORIGEM", length: 400 })
  txtNotificacaoOrigem: string;

  @Column("number", { primary: true, name: "COD_NOTIFICACAO_ORIGEM" })
  codNotificacaoOrigem: number;

  @Column("number", { name: "COD_ATIVO" })
  codAtivo: number;

  @OneToMany(
    () => TblNotificacao,
    (tblNotificacao) => tblNotificacao.codNotificacaoOrigem
  )
  tblNotificacaos: TblNotificacao[];
}

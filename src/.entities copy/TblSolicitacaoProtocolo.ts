import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SOLICITACAO_PROTOCOLO", ["codSolicitacao", "codProtocolo"], {
  unique: true,
})
@Entity("TBL_SOLICITACAO_PROTOCOLO")
export class TblSolicitacaoProtocolo {
  @Column("number", { primary: true, name: "COD_SOLICITACAO", scale: 0 })
  codSolicitacao: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;
}

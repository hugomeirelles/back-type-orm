import { Column, Entity, Index } from "typeorm";

@Index("PK_LISTAGEMELIMINACAOPROTOCOLO", ["codListagem", "codProtocolo"], {
  unique: true,
})
@Entity("TBL_LISTAGEM_ELIMINACAO_PROTO")
export class TblListagemEliminacaoProto {
  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_LISTAGEM", scale: 0 })
  codListagem: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LICITACAO_DOCUMENTO_TI", ["codLicitacaoDocumentoTipo"], {
  unique: true,
})
@Entity("TBL_LICITACAO_DOCUMENTO_TIPO")
export class TblLicitacaoDocumentoTipo {
  @Column("varchar2", { name: "TXT_LICITACAO_DOCUMENTO_TIPO", length: 255 })
  txtLicitacaoDocumentoTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_LICITACAO_DOCUMENTO_TIPO",
    scale: 0,
  })
  codLicitacaoDocumentoTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

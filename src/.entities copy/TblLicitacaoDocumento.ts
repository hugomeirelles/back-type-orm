import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_LICITACAO_DOCUMENTO", ["codLicitacao", "txtArquivo"], {
  unique: true,
})
@Entity("TBL_LICITACAO_DOCUMENTO")
export class TblLicitacaoDocumento {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "SYSDATE" })
  dtInclusao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0, default: () => "1" })
  codUsuario: number;

  @Column("number", { name: "COD_LICITACAO_DOCUMENTO_TIPO", scale: 0 })
  codLicitacaoDocumentoTipo: number;

  @Column("number", { primary: true, name: "COD_LICITACAO", scale: 0 })
  codLicitacao: number;
}

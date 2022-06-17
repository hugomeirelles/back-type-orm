import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_RESOLUCAO", ["codProtocolo", "txtResolucao"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_RESOLUCAO")
export class TblProtocoloResolucao {
  @Column("varchar2", { primary: true, name: "TXT_RESOLUCAO", length: 255 })
  txtResolucao: string;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_DIGITAL",
    nullable: true,
    length: 255,
  })
  txtArquivoDigital: string | null;

  @Column("date", { name: "DT_RESOLUCAO" })
  dtResolucao: Date;

  @Column("date", { name: "DT_PUBLICACAO", nullable: true })
  dtPublicacao: Date | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_DOCUMENTO_TIPO",
    scale: 0,
    default: () => "(1)",
  })
  codDocumentoTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}

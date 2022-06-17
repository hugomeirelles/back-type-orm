import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPublicacaoTipo } from "./TblPublicacaoTipo";

@Index(
  "PK_TBL_PROTOCOLO_PUBLICACAO",
  ["codProtocolo", "codPublicacaoTipo", "dtPublicacao"],
  { unique: true }
)
@Entity("TBL_PROTOCOLO_PUBLICACAO")
export class TblProtocoloPublicacao {
  @Column("varchar2", { name: "TXT_PAGINA", length: 255 })
  txtPagina: string;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_DIGITAL",
    nullable: true,
    length: 255,
  })
  txtArquivoDigital: string | null;

  @Column("date", { primary: true, name: "DT_PUBLICACAO" })
  dtPublicacao: Date;

  @Column("number", { name: "COD_SECAO", nullable: true, scale: 0 })
  codSecao: number | null;

  @Column("number", { primary: true, name: "COD_PUBLICACAO_TIPO", scale: 0 })
  codPublicacaoTipo: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_EDICAO", scale: 0 })
  codEdicao: number;

  @ManyToOne(
    () => TblPublicacaoTipo,
    (tblPublicacaoTipo) => tblPublicacaoTipo.tblProtocoloPublicacaos
  )
  @JoinColumn([
    { name: "COD_PUBLICACAO_TIPO", referencedColumnName: "codPublicacaoTipo" },
  ])
  codPublicacaoTipo2: TblPublicacaoTipo;
}

import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocoloPublicacao } from "./TblProtocoloPublicacao";

@Index("PK_TBL_PUBLICACAO_TIPO", ["codPublicacaoTipo"], { unique: true })
@Entity("TBL_PUBLICACAO_TIPO")
export class TblPublicacaoTipo {
  @Column("varchar2", {
    name: "TXT_PUBLICACAO_TIPO_SIGLA",
    nullable: true,
    length: 50,
  })
  txtPublicacaoTipoSigla: string | null;

  @Column("varchar2", { name: "TXT_PUBLICACAO_TIPO", length: 255 })
  txtPublicacaoTipo: string;

  @Column("varchar2", {
    name: "TXT_ENDERECO_PADRAO",
    nullable: true,
    length: 500,
  })
  txtEnderecoPadrao: string | null;

  @Column("number", { primary: true, name: "COD_PUBLICACAO_TIPO", scale: 0 })
  codPublicacaoTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_AREA", nullable: true, scale: 0 })
  codArea: number | null;

  @OneToMany(
    () => TblProtocoloPublicacao,
    (tblProtocoloPublicacao) => tblProtocoloPublicacao.codPublicacaoTipo2
  )
  tblProtocoloPublicacaos: TblProtocoloPublicacao[];
}

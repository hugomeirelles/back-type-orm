import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblDocumentoTipo } from "./TblDocumentoTipo";

@Index("PK_TBL_DOCUMENTO_TIPO_PADRAO", ["codDocumentoTipo", "codVersao"], {
  unique: true,
})
@Entity("TBL_DOCUMENTO_TIPO_PADRAO")
export class TblDocumentoTipoPadrao {
  @Column("clob", { name: "TXT_RESUMO_PADRAO", nullable: true })
  txtResumoPadrao: string | null;

  @Column("varchar2", {
    name: "TXT_IDENTIFICACAO_PADRAO",
    nullable: true,
    length: 255,
  })
  txtIdentificacaoPadrao: string | null;

  @Column("number", {
    primary: true,
    name: "COD_VERSAO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codVersao: number;

  @Column("number", {
    name: "COD_PRAZO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codPrazoPadrao: number | null;

  @Column("number", {
    name: "COD_ORGAO_DESTINO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoDestinoPadrao: number | null;

  @Column("number", {
    name: "COD_INTERESSADO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codInteressadoPadrao: number | null;

  @Column("number", {
    primary: true,
    name: "COD_DOCUMENTO_TIPO",
    precision: 10,
    scale: 0,
  })
  codDocumentoTipo: number;

  @Column("number", {
    name: "COD_DESTINATARIO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codDestinatarioPadrao: number | null;

  @Column("number", {
    name: "COD_ASSUNTO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAssuntoPadrao: number | null;

  @Column("number", {
    name: "COD_ACESSO_TIPO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAcessoTipoPadrao: number | null;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblDocumentoTipoPadraos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo2: TblDocumentoTipo;
}

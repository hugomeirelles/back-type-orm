import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAutorizacaoSituacao } from "./TblAutorizacaoSituacao";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";

@Index("PK_TBL_AUTORIZACAO", ["codAutorizacao"], { unique: true })
@Entity("TBL_AUTORIZACAO")
export class TblAutorizacao {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", nullable: true, length: 255 })
  txtHash: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_REVOGACAO", nullable: true })
  dtRevogacao: Date | null;

  @Column("date", { name: "DT_REJEICAO", nullable: true })
  dtRejeicao: Date | null;

  @Column("date", { name: "DT_AUTORIZACAO", default: () => "sysdate" })
  dtAutorizacao: Date;

  @Column("number", { name: "COD_PAGINA", default: () => "(0)" })
  codPagina: number;

  @Column("number", { primary: true, name: "COD_AUTORIZACAO" })
  codAutorizacao: number;

  @ManyToOne(
    () => TblAutorizacaoSituacao,
    (tblAutorizacaoSituacao) => tblAutorizacaoSituacao.tblAutorizacaos
  )
  @JoinColumn([
    {
      name: "COD_AUTORIZACAO_SITUACAO",
      referencedColumnName: "codAutorizacaoSituacao",
    },
  ])
  codAutorizacaoSituacao: TblAutorizacaoSituacao;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblAutorizacaos
  )
  @JoinColumn([
    {
      name: "COD_USUARIO_EXT_AUTORIZADOR",
      referencedColumnName: "codUsuarioExterno",
    },
  ])
  codUsuarioExtAutorizador: TblSegUsuarioExterno;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblAutorizacaos2
  )
  @JoinColumn([
    {
      name: "COD_USUARIO_EXT_AUTORIZADO",
      referencedColumnName: "codUsuarioExterno",
    },
  ])
  codUsuarioExtAutorizado: TblSegUsuarioExterno;
}

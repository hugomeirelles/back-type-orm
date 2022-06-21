import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSistemaHistoricoAcao } from "./TblSistemaHistoricoAcao";

@Index("IX_SH_DT_ACAO", ["dtAcao"], {})
@Index("TBL_SISTEMA_HIST_N1", ["codChave", "codAcao"], {})
@Entity("TBL_SISTEMA_HISTORICO")
export class TblSistemaHistorico {
  @Column("clob", { name: "TXT_SQL", nullable: true })
  txtSql: string | null;

  @Column("varchar2", {
    name: "TXT_ENDERECO_NOME",
    nullable: true,
    length: 255,
  })
  txtEnderecoNome: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO_IP", nullable: true, length: 28 })
  txtEnderecoIp: string | null;

  @Column("varchar2", { name: "TXT_ALTERACAO", nullable: true, length: 4000 })
  txtAlteracao: string | null;

  @Column("date", { name: "DT_ACAO", default: () => "sysdate" })
  dtAcao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_ORIGEM", nullable: true, scale: 0 })
  codOrigem: number | null;

  @Column("number", {
    name: "COD_ORGAO",
    precision: 10,
    scale: 0,
    default: () => "0",
  })
  codOrgao: number;

  @Column("number", { name: "COD_INTERESSADO", nullable: true })
  codInteressado: number | null;

  @Column("number", { name: "COD_CHAVE", scale: 0 })
  codChave: number;

  @Column("number", { name: "COD_ACAO", scale: 0 })
  codAcao: number;

  @ManyToOne(
    () => TblSistemaHistoricoAcao,
    (tblSistemaHistoricoAcao) => tblSistemaHistoricoAcao.tblSistemaHistoricos
  )
  @JoinColumn([{ name: "COD_ACAO", referencedColumnName: "codAcao" }])
  codAcao2: TblSistemaHistoricoAcao;
}

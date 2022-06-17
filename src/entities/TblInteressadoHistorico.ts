import { Column, Entity } from "typeorm";

@Entity("TBL_INTERESSADO_HISTORICO")
export class TblInteressadoHistorico {
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

  @Column("date", { name: "DT_ACAO", default: () => "sysdate" })
  dtAcao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @Column("number", { name: "COD_ACAO", scale: 0 })
  codAcao: number;
}

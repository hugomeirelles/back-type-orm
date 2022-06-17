import { Column, Entity, Index } from "typeorm";

@Index("IX_SL_COD_ACAO_DATA", ["codAcao", "dtSistemaLog"], {})
@Index("PK_TBL_SISTEMA_LOG", ["codSistemaLog"], { unique: true })
@Entity("TBL_SISTEMA_LOG")
export class TblSistemaLog {
  @Column("varchar2", {
    name: "TXT_ENDERECO_NOME",
    nullable: true,
    length: 100,
  })
  txtEnderecoNome: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO_IP", nullable: true, length: 50 })
  txtEnderecoIp: string | null;

  @Column("date", { name: "DT_SISTEMA_LOG", default: () => "sysdate" })
  dtSistemaLog: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", {
    primary: true,
    name: "COD_SISTEMA_LOG",
    precision: 6,
    scale: 0,
  })
  codSistemaLog: number;

  @Column("number", { name: "COD_ACAO", scale: 0 })
  codAcao: number;
}

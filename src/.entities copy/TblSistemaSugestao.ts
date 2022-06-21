import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_SUGESTAO", ["codSistemaSugestao"], { unique: true })
@Entity("TBL_SISTEMA_SUGESTAO")
export class TblSistemaSugestao {
  @Column("clob", { name: "TXT_SUGESTAO", nullable: true })
  txtSugestao: string | null;

  @Column("varchar2", { name: "TXT_RAMAL", nullable: true, length: 50 })
  txtRamal: string | null;

  @Column("varchar2", { name: "TXT_NOME", nullable: true, length: 50 })
  txtNome: string | null;

  @Column("varchar2", { name: "TXT_IP", nullable: true, length: 50 })
  txtIp: string | null;

  @Column("varchar2", { name: "TXT_EMAIL", nullable: true, length: 100 })
  txtEmail: string | null;

  @Column("date", { name: "DT_SUGESTAO", default: () => "sysdate" })
  dtSugestao: Date;

  @Column("number", { name: "COD_USUARIO", nullable: true, scale: 0 })
  codUsuario: number | null;

  @Column("number", {
    primary: true,
    name: "COD_SISTEMA_SUGESTAO",
    precision: 6,
    scale: 0,
  })
  codSistemaSugestao: number;

  @Column("number", { name: "COD_EMAIL", nullable: true, scale: 0 })
  codEmail: number | null;
}

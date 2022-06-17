import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAutorizacaoAcesso } from "./TblAutorizacaoAcesso";

@Index("PK_PESSOA_EMAIL", ["codPessoaEmail"], { unique: true })
@Entity("TBL_PESSOA_EMAIL")
export class TblPessoaEmail {
  @Column("varchar2", { name: "TXT_NOME", length: 255 })
  txtNome: string;

  @Column("varchar2", { name: "TXT_EMAIL", length: 100 })
  txtEmail: string;

  @Column("number", {
    primary: true,
    name: "COD_PESSOA_EMAIL",
    precision: 10,
    scale: 0,
  })
  codPessoaEmail: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;

  @OneToMany(
    () => TblAutorizacaoAcesso,
    (tblAutorizacaoAcesso) => tblAutorizacaoAcesso.codPessoaEmail
  )
  tblAutorizacaoAcessos: TblAutorizacaoAcesso[];
}

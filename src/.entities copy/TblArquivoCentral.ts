import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblEmprestimo } from "./TblEmprestimo";
import { TblSolicitacao } from "./TblSolicitacao";

@Index("PK_TBL_ARQUIVO_CENTRAL", ["codArquivoCentral"], { unique: true })
@Entity("TBL_ARQUIVO_CENTRAL")
export class TblArquivoCentral {
  @Column("varchar2", { name: "TXT_LOCALIZACAO", nullable: true, length: 255 })
  txtLocalizacao: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO_CENTRAL", length: 255 })
  txtArquivoCentral: string;

  @Column("varchar2", {
    name: "TXT_ARQUIVISTA_RESPONSAVEL",
    nullable: true,
    length: 255,
  })
  txtArquivistaResponsavel: string | null;

  @Column("number", { name: "COD_ORGAO", nullable: true, scale: 0 })
  codOrgao: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_ARQUIVO_CENTRAL", scale: 0 })
  codArquivoCentral: number;

  @OneToMany(
    () => TblEmprestimo,
    (tblEmprestimo) => tblEmprestimo.codArquivoCentral
  )
  tblEmprestimos: TblEmprestimo[];

  @OneToMany(
    () => TblSolicitacao,
    (tblSolicitacao) => tblSolicitacao.codArquivoCentral
  )
  tblSolicitacaos: TblSolicitacao[];
}

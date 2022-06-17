import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblSegAplicacao } from "./TblSegAplicacao";
import { TblSegUsuarioConfiguracao } from "./TblSegUsuarioConfiguracao";

@Index("IX_SC_TXT_CONFIGURACAO", ["txtConfiguracao"], {})
@Index("PK_TBL_SEG_CONFIGURACAO", ["codConfiguracao"], { unique: true })
@Entity("TBL_SEG_CONFIGURACAO")
export class TblSegConfiguracao {
  @Column("varchar2", {
    name: "TXT_VALOR_PADRAO",
    nullable: true,
    length: 1000,
  })
  txtValorPadrao: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 255 })
  txtDescricao: string | null;

  @Column("varchar2", { name: "TXT_CONFIGURACAO", length: 255 })
  txtConfiguracao: string;

  @Column("number", {
    name: "COD_CONFIGURACAO_TIPO",
    scale: 0,
    default: () => "(1)",
  })
  codConfiguracaoTipo: number;

  @Column("number", { primary: true, name: "COD_CONFIGURACAO", scale: 0 })
  codConfiguracao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @ManyToOne(
    () => TblSegAplicacao,
    (tblSegAplicacao) => tblSegAplicacao.tblSegConfiguracaos
  )
  @JoinColumn([{ name: "COD_APLICACAO", referencedColumnName: "codAplicacao" }])
  codAplicacao: TblSegAplicacao;

  @OneToMany(
    () => TblSegUsuarioConfiguracao,
    (tblSegUsuarioConfiguracao) => tblSegUsuarioConfiguracao.codConfiguracao2
  )
  tblSegUsuarioConfiguracaos: TblSegUsuarioConfiguracao[];
}

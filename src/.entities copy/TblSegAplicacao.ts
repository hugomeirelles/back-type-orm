import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { TblSegConfiguracao } from "./TblSegConfiguracao";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_APLICACAO", ["codAplicacao"], { unique: true })
@Entity("TBL_SEG_APLICACAO")
export class TblSegAplicacao {
  @Column("varchar2", {
    name: "TXT_ENDERECO_PADRAO",
    nullable: true,
    length: 255,
  })
  txtEnderecoPadrao: string | null;

  @Column("varchar2", { name: "TXT_APLICACAO", length: 255 })
  txtAplicacao: string;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_APLICACAO", scale: 0 })
  codAplicacao: number;

  @OneToMany(
    () => TblSegConfiguracao,
    (tblSegConfiguracao) => tblSegConfiguracao.codAplicacao
  )
  tblSegConfiguracaos: TblSegConfiguracao[];

/*   @ManyToMany(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegAplicacaos
  )
  @JoinTable({
    name: "TBL_SEG_USUARIO_APLICACAO",
    joinColumns: [
      { name: "COD_APLICACAO", referencedColumnName: "codAplicacao" },
    ],
    inverseJoinColumns: [
      { name: "COD_USUARIO", referencedColumnName: "codUsuario" },
    ],
  })
  tblSegUsuarios: TblSegUsuario[]; */
}

import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SISTEMA_RELATORIO", ["codRelatorioTipo"], { unique: true })
@Entity("TBL_SISTEMA_RELATORIO")
export class TblSistemaRelatorio {
  @Column("varchar2", {
    name: "TXT_RELATORIO_TIPO",
    nullable: true,
    length: 50,
  })
  txtRelatorioTipo: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 255 })
  txtEndereco: string | null;

  @Column("number", { primary: true, name: "COD_RELATORIO_TIPO", scale: 0 })
  codRelatorioTipo: number;

  @Column("number", {
    name: "COD_RELATORIO_SUPERIOR",
    scale: 0,
    default: () => "(0)",
  })
  codRelatorioSuperior: number;

  @Column("number", { name: "COD_ORDEM", nullable: true, scale: 0 })
  codOrdem: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_AREA", nullable: true, scale: 0 })
  codArea: number | null;

  @Column("number", { name: "COD_ACESSO_TIPO", scale: 0, default: () => "(1)" })
  codAcessoTipo: number;

/*   @ManyToMany(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSistemaRelatorios
  ) */
  @JoinTable({
    name: "TBL_SEG_USUARIO_RELATORIO",
    joinColumns: [
      { name: "COD_RELATORIO_TIPO", referencedColumnName: "codRelatorioTipo" },
    ],
    inverseJoinColumns: [
      { name: "COD_USUARIO", referencedColumnName: "codUsuario" },
    ],
  })
  tblSegUsuarios: TblSegUsuario[];
}

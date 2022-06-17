import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblDocTipoPesRelacionamen } from "./TblDocTipoPesRelacionamen";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblSegUsuarioPerfil } from "./TblSegUsuarioPerfil";

@Index("PK_TBL_SEG_CARGO", ["codCargo"], { unique: true })
@Entity("TBL_SEG_CARGO")
export class TblSegCargo {
  @Column("varchar2", { name: "TXT_CODIGO", nullable: true, length: 50 })
  txtCodigo: string | null;

  @Column("varchar2", { name: "TXT_CARGO", length: 255 })
  txtCargo: string;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", {
    name: "COD_PRAZO_EMPRESTIMO",
    scale: 0,
    default: () => "(15)",
  })
  codPrazoEmprestimo: number;

  @Column("number", { name: "COD_NIVEL_ACESSO", scale: 0, default: () => "0" })
  codNivelAcesso: number;

  @Column("number", { primary: true, name: "COD_CARGO", scale: 0 })
  codCargo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.codCargo
  )
  tblAcervoDocumentos: TblAcervoDocumento[];

  @ManyToMany(
    () => TblDocTipoPesRelacionamen,
    (tblDocTipoPesRelacionamen) => tblDocTipoPesRelacionamen.tblSegCargos
  )
  tblDocTipoPesRelacionamen: TblDocTipoPesRelacionamen[];

  @OneToMany(() => TblSegUsuario, (tblSegUsuario) => tblSegUsuario.codCargo)
  tblSegUsuarios: TblSegUsuario[];

  @OneToMany(
    () => TblSegUsuarioPerfil,
    (tblSegUsuarioPerfil) => tblSegUsuarioPerfil.codCargo
  )
  tblSegUsuarioPerfils: TblSegUsuarioPerfil[];
}

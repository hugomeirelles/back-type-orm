import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_USUARIO_FAVORITO", ["codUsuario", "codFavorito"], {
  unique: true,
})
@Entity("TBL_SEG_USUARIO_FAVORITO")
export class TblSegUsuarioFavorito {
  @Column("varchar2", { name: "TXT_ENDERECO", length: 255 })
  txtEndereco: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 255 })
  txtDescricao: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_JANELA", scale: 0, default: () => "(0)" })
  codJanela: number;

  @Column("number", { name: "COD_FUNCAO", nullable: true, scale: 0 })
  codFuncao: number | null;

  @Column("number", { primary: true, name: "COD_FAVORITO", scale: 0 })
  codFavorito: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

/*   @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioFavoritos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario; */
}

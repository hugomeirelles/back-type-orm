import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblArquivo } from "./TblArquivo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_ARQUIVO_ELIMINAR", ["codInventario", "dtEliminacao"], {
  unique: true,
})
@Entity("TBL_ARQUIVO_ELIMINAR")
export class TblArquivoEliminar {
  @Column("varchar2", { name: "TXT_ELIMINACAO", length: 500 })
  txtEliminacao: string;

  @Column("date", {
    primary: true,
    name: "DT_ELIMINACAO",
    default: () => "sysdate",
  })
  dtEliminacao: Date;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @ManyToOne(() => TblArquivo, (tblArquivo) => tblArquivo.tblArquivoEliminars)
  @JoinColumn([
    { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
  ])
  codInventario2: TblArquivo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblArquivoEliminars
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

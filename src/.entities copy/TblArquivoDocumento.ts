import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblArquivo } from "./TblArquivo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_ARQUIVOINVENTARIODOCUMENTO", ["codInventario", "txtArquivo"], {
  unique: true,
})
@Entity("TBL_ARQUIVO_DOCUMENTO")
export class TblArquivoDocumento {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @ManyToOne(() => TblArquivo, (tblArquivo) => tblArquivo.tblArquivoDocumentos)
  @JoinColumn([
    { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
  ])
  codInventario2: TblArquivo;

/*   @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblArquivoDocumentos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario; */
}

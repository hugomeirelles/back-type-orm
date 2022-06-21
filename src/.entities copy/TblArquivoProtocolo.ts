import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblArquivo } from "./TblArquivo";

@Index("PK_TBL_ARQUIVO_PROTOCOLO", ["codInventario", "codProtocolo"], {
  unique: true,
})
@Entity("TBL_ARQUIVO_PROTOCOLO")
export class TblArquivoProtocolo {
  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @ManyToOne(() => TblArquivo, (tblArquivo) => tblArquivo.tblArquivoProtocolos)
  @JoinColumn([
    { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
  ])
  codInventario2: TblArquivo;
}

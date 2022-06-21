import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblMinuta } from "./TblMinuta";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_MINUTA_ARQUIVO", ["codMinuta", "txtArquivo"], { unique: true })
@Entity("TBL_MINUTA_ARQUIVO")
export class TblMinutaArquivo {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { primary: true, name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @ManyToOne(() => TblMinuta, (tblMinuta) => tblMinuta.tblMinutaArquivos)
  @JoinColumn([{ name: "COD_MINUTA", referencedColumnName: "codMinuta" }])
  codMinuta2: TblMinuta;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblMinutaArquivos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

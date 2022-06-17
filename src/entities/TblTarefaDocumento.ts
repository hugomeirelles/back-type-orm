import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblTarefa } from "./TblTarefa";

@Index("PK_TBL_TAREFA_DOCUMENTO_1", ["codTarefa", "codDocumento"], {
  unique: true,
})
@Entity("TBL_TAREFA_DOCUMENTO")
export class TblTarefaDocumento {
  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { primary: true, name: "COD_TAREFA", scale: 0 })
  codTarefa: number;

  @Column("number", { primary: true, name: "COD_DOCUMENTO", scale: 0 })
  codDocumento: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblTarefaDocumentos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @ManyToOne(() => TblTarefa, (tblTarefa) => tblTarefa.tblTarefaDocumentos)
  @JoinColumn([{ name: "COD_TAREFA", referencedColumnName: "codTarefa" }])
  codTarefa2: TblTarefa;
}

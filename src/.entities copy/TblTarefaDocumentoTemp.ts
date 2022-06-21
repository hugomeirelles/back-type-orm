import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_TAREFA_DOCUMENTO_TEMP", ["codTarefa", "txtArquivo"], {
  unique: true,
})
@Entity("TBL_TAREFA_DOCUMENTO_TEMP")
export class TblTarefaDocumentoTemp {
  @Column("varchar2", { primary: true, name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_TAREFA", scale: 0 })
  codTarefa: number;

  @Column("number", { name: "COD_DOCUMENTO", scale: 0 })
  codDocumento: number;
}

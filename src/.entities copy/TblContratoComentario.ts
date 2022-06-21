import { Column, Entity } from "typeorm";

@Entity("TBL_CONTRATO_COMENTARIO")
export class TblContratoComentario {
  @Column("varchar2", { name: "TXT_COMENTARIO", length: 500 })
  txtComentario: string;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "HR_COMENTARIO", default: () => "SYSDATE" })
  hrComentario: Date;

  @Column("date", { name: "DT_COMENTARIO", default: () => "SYSDATE" })
  dtComentario: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}

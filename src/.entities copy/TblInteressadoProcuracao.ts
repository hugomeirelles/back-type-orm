import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressado } from "./TblInteressado";

@Index("TBL_INTERESSADO_PROCURACAO_PK", ["codProcuracao"], { unique: true })
@Entity("TBL_INTERESSADO_PROCURACAO")
export class TblInteressadoProcuracao {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", {
    name: "TXT_MOTIVO_CANCELA",
    nullable: true,
    length: 500,
  })
  txtMotivoCancela: string | null;

  @Column("varchar2", { name: "TXT_HASH", nullable: true, length: 255 })
  txtHash: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_VIGENCIA" })
  dtVigencia: Date;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("date", { name: "DT_CANCELA", nullable: true })
  dtCancela: Date | null;

  @Column("number", { name: "COD_USUARIO_VALIDA", nullable: true })
  codUsuarioValida: number | null;

  @Column("number", { name: "COD_SITUACAO" })
  codSituacao: number;

  @Column("number", { primary: true, name: "COD_PROCURACAO" })
  codProcuracao: number;

  @Column("number", { name: "COD_PAGINA" })
  codPagina: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoProcuracaos
  )
  @JoinColumn([
    { name: "COD_PROCURADOR", referencedColumnName: "codInteressado" },
  ])
  codProcurador: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoProcuracaos2
  )
  @JoinColumn([
    { name: "COD_OUTORGANTE", referencedColumnName: "codInteressado" },
  ])
  codOutorgante: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoProcuracaos3
  )
  @JoinColumn([
    { name: "COD_USUARIO_INCLUSAO", referencedColumnName: "codInteressado" },
  ])
  codUsuarioInclusao: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoProcuracaos4
  )
  @JoinColumn([
    { name: "COD_USUARIO_CANCELA", referencedColumnName: "codInteressado" },
  ])
  codUsuarioCancela: TblInteressado;
}

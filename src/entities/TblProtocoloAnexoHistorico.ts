import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_PROTOCOLO_A_H", ["codProtocolo"], {})
@Entity("TBL_PROTOCOLO_ANEXO_HISTORICO")
export class TblProtocoloAnexoHistorico {
  @Column("clob", { name: "TXT_JUSTIFICATIVA", nullable: true })
  txtJustificativa: string | null;

  @Column("date", { name: "HR_DESAPENSAR", nullable: true })
  hrDesapensar: Date | null;

  @Column("date", { name: "HR_APENSAR" })
  hrApensar: Date;

  @Column("date", { name: "DT_DESAPENSAR", nullable: true })
  dtDesapensar: Date | null;

  @Column("date", { name: "DT_APENSAR" })
  dtApensar: Date;

  @Column("number", { name: "COD_PROTOCOLO_ANEXO", scale: 0 })
  codProtocoloAnexo: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_ORGAO_DESAPENSAR",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoDesapensar: number | null;

  @Column("number", {
    name: "COD_ORGAO_APENSAR",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoApensar: number | null;

  @Column("number", { name: "COD_OPERACAO", nullable: true, scale: 0 })
  codOperacao: number | null;

  @Column("number", { name: "COD_JUNTADA", nullable: true, scale: 0 })
  codJuntada: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(0)" })
  codAtivo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloAnexoHistoricos
  )
  @JoinColumn([
    { name: "COD_USUARIO_DESAPENSAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioDesapensar: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloAnexoHistoricos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_APENSAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioApensar: TblSegUsuario;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("IDX$$_0001000F", ["codProtocolo", "codProtocoloAnexo", "codOrdem"], {})
@Index("PK_PROTOCOLOANEXO", ["codProtocolo", "codProtocoloAnexo", "codAtivo"], {
  unique: true,
})
@Index("TBL_PROTOCOLO_ANEXO_N1", ["codProtocoloAnexo", "codProtocolo"], {})
@Entity("TBL_PROTOCOLO_ANEXO")
export class TblProtocoloAnexo {
  @Column("clob", { name: "TXT_JUSTIFICATIVA", nullable: true })
  txtJustificativa: string | null;

  @Column("date", { name: "HR_DESAPENSAR", nullable: true })
  hrDesapensar: Date | null;

  @Column("date", { name: "HR_APENSAR", default: () => "sysdate" })
  hrApensar: Date;

  @Column("date", { name: "DT_DESAPENSAR", nullable: true })
  dtDesapensar: Date | null;

  @Column("date", { name: "DT_APENSAR", default: () => "sysdate" })
  dtApensar: Date;

  @Column("number", { primary: true, name: "COD_PROTOCOLO_ANEXO", scale: 0 })
  codProtocoloAnexo: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
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

  @Column("number", { name: "COD_ORDEM", nullable: true, scale: 0 })
  codOrdem: number | null;

  @Column("number", { name: "COD_OPERACAO", nullable: true, scale: 0 })
  codOperacao: number | null;

  @Column("number", { name: "COD_JUNTADA", scale: 0 })
  codJuntada: number;

  @Column("number", {
    primary: true,
    name: "COD_ATIVO",
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloAnexos
  )
  @JoinColumn([
    { name: "COD_USUARIO_APENSAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioApensar: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloAnexos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_DESAPENSAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioDesapensar: TblSegUsuario;
}

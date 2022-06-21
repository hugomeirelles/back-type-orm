import { Column, Entity } from "typeorm";

@Entity("TBL_PROTOCOLO_ANEXO_COPIA")
export class TblProtocoloAnexoCopia {
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

  @Column("number", {
    name: "COD_USUARIO_DESAPENSAR",
    nullable: true,
    scale: 0,
  })
  codUsuarioDesapensar: number | null;

  @Column("number", { name: "COD_USUARIO_APENSAR", scale: 0 })
  codUsuarioApensar: number;

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

  @Column("number", { name: "COD_ORDEM", nullable: true, scale: 0 })
  codOrdem: number | null;

  @Column("number", { name: "COD_OPERACAO", nullable: true, scale: 0 })
  codOperacao: number | null;

  @Column("number", { name: "COD_JUNTADA", scale: 0 })
  codJuntada: number;

  @Column("number", { name: "COD_ATIVO", scale: 0 })
  codAtivo: number;
}

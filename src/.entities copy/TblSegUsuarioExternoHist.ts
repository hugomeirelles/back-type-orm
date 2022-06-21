import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269746", ["codSegUsuarioExternoHist"], { unique: true })
@Entity("TBL_SEG_USUARIO_EXTERNO_HIST")
export class TblSegUsuarioExternoHist {
  @Column("varchar2", {
    name: "TXT_REGISTRO_PROFISSIONAL",
    nullable: true,
    length: 255,
  })
  txtRegistroProfissional: string | null;

  @Column("varchar2", { name: "TXT_OPERACAO", nullable: true, length: 20 })
  txtOperacao: string | null;

  @Column("varchar2", { name: "TXT_HISTORICO", nullable: true, length: 4000 })
  txtHistorico: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO_IP", nullable: true, length: 50 })
  txtEnderecoIp: string | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "CURRENT_TIMESTAMP" })
  dtInclusao: Date;

  @Column("number", {
    name: "COD_USUARIO_EXTERNO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codUsuarioExterno: number | null;

  @Column("number", {
    primary: true,
    name: "COD_SEG_USUARIO_EXTERNO_HIST",
    precision: 10,
    scale: 0,
  })
  codSegUsuarioExternoHist: number;
}

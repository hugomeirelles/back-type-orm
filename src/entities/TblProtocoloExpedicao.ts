import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblRemessaTipo } from "./TblRemessaTipo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("TBL_PROTOCOLO_EXPEDICAO_N1", ["codProtocolo"], {})
@Entity("TBL_PROTOCOLO_EXPEDICAO")
export class TblProtocoloExpedicao {
  @Column("varchar2", { name: "TXT_REMESSA", nullable: true, length: 50 })
  txtRemessa: string | null;

  @Column("varchar2", { name: "TXT_PESO", nullable: true, length: 7 })
  txtPeso: string | null;

  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("varchar2", {
    name: "TXT_DESTINO_EXPEDICAO",
    nullable: true,
    length: 50,
  })
  txtDestinoExpedicao: string | null;

  @Column("varchar2", { name: "TXT_DESTINO", nullable: true, length: 255 })
  txtDestino: string | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", { name: "DT_EXPEDICAO", default: () => "sysdate" })
  dtExpedicao: Date;

  @Column("date", { name: "DT_DESFAZER", nullable: true })
  dtDesfazer: Date | null;

  @Column("number", {
    name: "COD_VALOR",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "(0)",
  })
  codValor: number | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO_EXPEDIDOR", nullable: true, scale: 0 })
  codOrgaoExpedidor: number | null;

  @Column("number", {
    name: "COD_ORGAO_DESFAZER",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoDesfazer: number | null;

  @Column("number", {
    name: "COD_INTEGRACAO_EMPRESA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codIntegracaoEmpresa: number | null;

  @Column("number", { name: "COD_GUIA", scale: 0, default: () => "(0)" })
  codGuia: number;

  @Column("number", {
    name: "COD_ENVIO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codEnvio: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblRemessaTipo,
    (tblRemessaTipo) => tblRemessaTipo.tblProtocoloExpedicaos
  )
  @JoinColumn([
    { name: "COD_REMESSA_TIPO", referencedColumnName: "codRemessaTipo" },
  ])
  codRemessaTipo: TblRemessaTipo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloExpedicaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

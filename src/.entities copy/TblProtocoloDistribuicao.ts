import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("IX_PD_COD_ATIVO", ["codProtocolo", "codAtivo"], {})
@Entity("TBL_PROTOCOLO_DISTRIBUICAO")
export class TblProtocoloDistribuicao {
  @Column("clob", { name: "TXT_PROVIDENCIA", nullable: true })
  txtProvidencia: string | null;

  @Column("clob", { name: "TXT_JUSTIFICATIVA", nullable: true })
  txtJustificativa: string | null;

  @Column("date", { name: "HR_DISTRIBUICAO", default: () => "sysdate" })
  hrDistribuicao: Date;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_PRAZO_RESPOSTA", nullable: true })
  dtPrazoResposta: Date | null;

  @Column("date", {
    name: "DT_DISTRIBUICAO",
    nullable: true,
    default: () => "sysdate",
  })
  dtDistribuicao: Date | null;

  @Column("date", { name: "DT_CANCELAR", nullable: true })
  dtCancelar: Date | null;

  @Column("number", { name: "COD_USUARIO_DESFAZER", nullable: true, scale: 0 })
  codUsuarioDesfazer: number | null;

  @Column("number", { name: "COD_RECEBIMENTO", scale: 0, default: () => "0" })
  codRecebimento: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_MOTIVO", scale: 0, default: () => "0" })
  codMotivo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloDistribuicaos
  )
  @JoinColumn([
    { name: "COD_USUARIO_DISTRIBUIDOR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioDistribuidor: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloDistribuicaos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_RECEBEDOR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioRecebedor: TblSegUsuario;
}

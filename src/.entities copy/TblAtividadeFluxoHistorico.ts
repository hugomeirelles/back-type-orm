import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoConfigura } from "./TblFluxoTrabalhoConfigura";

@Index("PK_ATIVIDADE_FLUXO_HISTORICO", ["codAtividadeFluxoHistorico"], {
  unique: true,
})
@Entity("TBL_ATIVIDADE_FLUXO_HISTORICO")
export class TblAtividadeFluxoHistorico {
  @Column("char", { name: "TXT_TIPO_OPERACAO", length: 1 })
  txtTipoOperacao: string;

  @Column("varchar2", { name: "TXT_ENDERECO_IP", length: 20 })
  txtEnderecoIp: string;

  @Column("varchar2", {
    name: "TXT_ALTERACAO_REALIZADA",
    nullable: true,
    length: 3000,
  })
  txtAlteracaoRealizada: string | null;

  @Column("date", { name: "DT_OPERACAO", default: () => "SYSDATE" })
  dtOperacao: Date;

  @Column("number", { name: "COD_USUARIO", precision: 22, scale: 0 })
  codUsuario: number;

  @Column("number", {
    primary: true,
    name: "COD_ATIVIDADE_FLUXO_HISTORICO",
    precision: 22,
    scale: 0,
  })
  codAtividadeFluxoHistorico: number;

  @Column("number", {
    name: "COD_ATIVIDADE_FLUXO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtividadeFluxo: number | null;

  @ManyToOne(
    () => TblFluxoTrabalhoConfigura,
    (tblFluxoTrabalhoConfigura) =>
      tblFluxoTrabalhoConfigura.tblAtividadeFluxoHistoricos
  )
  @JoinColumn([
    { name: "COD_FLUXO_TRABALHO", referencedColumnName: "codFluxoTrabalho" },
  ])
  codFluxoTrabalho: TblFluxoTrabalhoConfigura;
}

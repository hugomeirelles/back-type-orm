import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFluxoTrabalhoConfigura } from "./TblFluxoTrabalhoConfigura";

@Index("PK_FLUXO_TRABALHO_HISTORICO", ["codFluxoTrabalhoHistorico"], {
  unique: true,
})
@Entity("TBL_FLUXO_TRABALHO_HISTORICO")
export class TblFluxoTrabalhoHistorico {
  @Column("char", { name: "TXT_TIPO_OPERACAO", length: 3 })
  txtTipoOperacao: string;

  @Column("varchar2", { name: "TXT_ENDERECO_IP", length: 20 })
  txtEnderecoIp: string;

  @Column("varchar2", { name: "TXT_ALTERACAO_REALIZADA", length: 3000 })
  txtAlteracaoRealizada: string;

  @Column("date", { name: "DT_OPERACAO", default: () => "SYSDATE" })
  dtOperacao: Date;

  @Column("number", {
    name: "COD_USUARIO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codUsuario: number | null;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO_HISTORICO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalhoHistorico: number;

  @ManyToOne(
    () => TblFluxoTrabalhoConfigura,
    (tblFluxoTrabalhoConfigura) =>
      tblFluxoTrabalhoConfigura.tblFluxoTrabalhoHistoricos
  )
  @JoinColumn([
    { name: "COD_FLUXO_TRABALHO", referencedColumnName: "codFluxoTrabalho" },
  ])
  codFluxoTrabalho: TblFluxoTrabalhoConfigura;
}

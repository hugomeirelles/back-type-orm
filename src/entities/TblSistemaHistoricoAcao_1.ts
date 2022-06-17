import { Column, Entity } from "typeorm";

@Entity("TBL_SISTEMA_HISTORICO_ACAO_1")
export class TblSistemaHistoricoAcao_1 {
  @Column("varchar2", { name: "TXT_CONSTANTE", length: 50 })
  txtConstante: string;

  @Column("varchar2", { name: "TXT_ACAO", length: 255 })
  txtAcao: string;

  @Column("number", { name: "COD_EXIBE_COMBO" })
  codExibeCombo: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;

  @Column("number", { name: "COD_ACAO", precision: 10, scale: 0 })
  codAcao: number;
}

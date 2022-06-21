import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_NOTIFICACAO_NUMERO", ["codAno", "codNumero"], { unique: true })
@Entity("TBL_NOTIFICACAO_NUMERO")
export class TblNotificacaoNumero {
  @Column("number", { primary: true, name: "COD_NUMERO" })
  codNumero: number;

  @Column("number", { primary: true, name: "COD_ANO" })
  codAno: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONVENIO_ACAO", ["codAcao"], { unique: true })
@Entity("TBL_CONVENIO_ACAO")
export class TblConvenioAcao {
  @Column("varchar2", { name: "TXT_NUMERO", nullable: true, length: 50 })
  txtNumero: string | null;

  @Column("varchar2", { name: "TXT_ACAO", length: 255 })
  txtAcao: string;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { primary: true, name: "COD_ACAO", scale: 0 })
  codAcao: number;
}

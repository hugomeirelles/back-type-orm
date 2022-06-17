import { Column, Entity } from "typeorm";

@Entity("TBL_SISTEMA_CONTADOR_INTERNET")
export class TblSistemaContadorInternet {
  @Column("date", { name: "DT_CONTADOR", default: () => "sysdate" })
  dtContador: Date;

  @Column("number", { name: "COD_SERVICO", scale: 0, default: () => "1" })
  codServico: number;

  @Column("number", { name: "COD_CONTADOR", scale: 0, default: () => "1" })
  codContador: number;
}

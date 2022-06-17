import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_FORMATO", ["codFormato"], { unique: true })
@Entity("TBL_SISTEMA_FORMATO")
export class TblSistemaFormato {
  @Column("varchar2", { name: "TXT_FORMATO", length: 100 })
  txtFormato: string;

  @Column("varchar2", { name: "TXT_EXTENSAO", length: 100 })
  txtExtensao: string;

  @Column("number", { name: "COD_TAMANHO_MAXIMO", precision: 10, scale: 0 })
  codTamanhoMaximo: number;

  @Column("number", { name: "COD_PERMITIDO", precision: 1, scale: 0 })
  codPermitido: number;

  @Column("number", {
    primary: true,
    name: "COD_FORMATO",
    precision: 10,
    scale: 0,
  })
  codFormato: number;
}

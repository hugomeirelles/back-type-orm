import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAtributo } from "./TblAtributo";

@Index("PK_TBL_ATRIBUTO_OPCAO", ["codAtributo", "codOpcao"], { unique: true })
@Entity("TBL_ATRIBUTO_OPCAO")
export class TblAtributoOpcao {
  @Column("varchar2", { name: "TXT_VALOR", nullable: true, length: 50 })
  txtValor: string | null;

  @Column("varchar2", { name: "TXT_OPCAO", nullable: true, length: 255 })
  txtOpcao: string | null;

  @Column("number", { primary: true, name: "COD_OPCAO", scale: 0 })
  codOpcao: number;

  @Column("number", { primary: true, name: "COD_ATRIBUTO", scale: 0 })
  codAtributo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(() => TblAtributo, (tblAtributo) => tblAtributo.tblAtributoOpcaos)
  @JoinColumn([{ name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" }])
  codAtributo2: TblAtributo;
}

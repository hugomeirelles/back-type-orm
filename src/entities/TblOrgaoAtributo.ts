import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAtributo } from "./TblAtributo";
import { TblOrgao } from "./TblOrgao";

@Index("PK_TBL_ORGAO_ATRIBUTO", ["codAtributo", "codOrgao"], { unique: true })
@Entity("TBL_ORGAO_ATRIBUTO")
export class TblOrgaoAtributo {
  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_LOCAL", scale: 0, default: () => "(0)" })
  codLocal: number;

  @Column("number", { primary: true, name: "COD_ATRIBUTO", scale: 0 })
  codAtributo: number;

  @ManyToOne(() => TblAtributo, (tblAtributo) => tblAtributo.tblOrgaoAtributos)
  @JoinColumn([{ name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" }])
  codAtributo2: TblAtributo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblOrgaoAtributos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;
}

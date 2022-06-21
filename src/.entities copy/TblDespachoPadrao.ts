import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblDespachoPadraoOrgao } from "./TblDespachoPadraoOrgao";

@Index("PK_TBL_DESPACHO_PADRAO", ["codDespachoPadrao"], { unique: true })
@Entity("TBL_DESPACHO_PADRAO")
export class TblDespachoPadrao {
  @Column("varchar2", { name: "TXT_DESPACHO_PADRAO", length: 255 })
  txtDespachoPadrao: string;

  @Column("number", { primary: true, name: "COD_DESPACHO_PADRAO", scale: 0 })
  codDespachoPadrao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblDespachoPadraoOrgao,
    (tblDespachoPadraoOrgao) => tblDespachoPadraoOrgao.codDespachoPadrao
  )
  tblDespachoPadraoOrgaos: TblDespachoPadraoOrgao[];
}

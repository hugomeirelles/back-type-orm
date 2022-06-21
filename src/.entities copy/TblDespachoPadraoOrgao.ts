import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblDespachoPadrao } from "./TblDespachoPadrao";
import { TblOrgao } from "./TblOrgao";

@Entity("TBL_DESPACHO_PADRAO_ORGAO")
export class TblDespachoPadraoOrgao {
  @ManyToOne(
    () => TblDespachoPadrao,
    (tblDespachoPadrao) => tblDespachoPadrao.tblDespachoPadraoOrgaos
  )
  @JoinColumn([
    { name: "COD_DESPACHO_PADRAO", referencedColumnName: "codDespachoPadrao" },
  ])
  codDespachoPadrao: TblDespachoPadrao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblDespachoPadraoOrgaos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;
}

import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblOrgao } from "./TblOrgao";

@Index("PK_TBL_TIPOORGAO", ["codOrgaoTipo"], { unique: true })
@Entity("TBL_ORGAO_TIPO")
export class TblOrgaoTipo {
  @Column("varchar2", { name: "TXT_ORGAO_TIPO", length: 50 })
  txtOrgaoTipo: string;

  @Column("number", { primary: true, name: "COD_ORGAO_TIPO", scale: 0 })
  codOrgaoTipo: number;

  @OneToMany(() => TblOrgao, (tblOrgao) => tblOrgao.codOrgaoTipo)
  tblOrgaos: TblOrgao[];
}

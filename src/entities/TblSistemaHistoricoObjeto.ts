import { Column, Entity, Index, ManyToMany } from "typeorm";
import { TblSistemaHistoricoAcao } from "./TblSistemaHistoricoAcao";

@Index("PK_SISTEMA_HISTORICO_OBJETO", ["codObjeto"], { unique: true })
@Entity("TBL_SISTEMA_HISTORICO_OBJETO")
export class TblSistemaHistoricoObjeto {
  @Column("varchar2", { name: "TXT_OBJETO", length: 50 })
  txtObjeto: string;

  @Column("number", { primary: true, name: "COD_OBJETO" })
  codObjeto: number;

  @Column("number", { name: "COD_ATIVO", default: () => "(1)" })
  codAtivo: number;

  @ManyToMany(
    () => TblSistemaHistoricoAcao,
    (tblSistemaHistoricoAcao) =>
      tblSistemaHistoricoAcao.tblSistemaHistoricoObjetos
  )
  tblSistemaHistoricoAcaos: TblSistemaHistoricoAcao[];
}

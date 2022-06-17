import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("PK_TBL_PAIS", ["codPais"], { unique: true })
@Entity("TBL_PAIS")
export class TblPais {
  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 10 })
  txtSigla: string | null;

  @Column("varchar2", { name: "TXT_PAIS", length: 100 })
  txtPais: string;

  @Column("number", { primary: true, name: "COD_PAIS", scale: 0 })
  codPais: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(() => TblInteressado, (tblInteressado) => tblInteressado.codPais)
  tblInteressados: TblInteressado[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codPais
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];
}

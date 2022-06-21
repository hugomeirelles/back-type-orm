import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("PK_OCUPACAO_BRASILEIRA", ["codOcupacao"], { unique: true })
@Entity("TBL_OCUPACAO_BRASILEIRA")
export class TblOcupacaoBrasileira {
  @Column("varchar2", { name: "TXT_OCUPACAO", length: 255 })
  txtOcupacao: string;

  @Column("number", { name: "COD_OCUPACAO_CBO" })
  codOcupacaoCbo: number;

  @Column("number", { primary: true, name: "COD_OCUPACAO" })
  codOcupacao: number;

  @Column("number", { name: "COD_ATIVO", default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codOcupacao
  )
  tblInteressados: TblInteressado[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codOcupacao
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];
}

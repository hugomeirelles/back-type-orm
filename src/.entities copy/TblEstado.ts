import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblOrgao } from "./TblOrgao";
import { TblProtocoloProcurador } from "./TblProtocoloProcurador";

@Index("PK_TBL_ESTADO", ["codEstado"], { unique: true })
@Entity("TBL_ESTADO")
export class TblEstado {
  @Column("char", { name: "TXT_SIGLA", length: 2 })
  txtSigla: string;

  @Column("varchar2", { name: "TXT_ESTADO", length: 50 })
  txtEstado: string;

  @Column("number", { primary: true, name: "COD_ESTADO", scale: 0 })
  codEstado: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codEstadoNascimento
  )
  tblInteressados: TblInteressado[];

  @OneToMany(() => TblInteressado, (tblInteressado) => tblInteressado.codEstado)
  tblInteressados2: TblInteressado[];

  @OneToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.codOrgaoExpedidorEstado
  )
  tblInteressados3: TblInteressado[];

  @OneToMany(() => TblOrgao, (tblOrgao) => tblOrgao.codEstado)
  tblOrgaos: TblOrgao[];

  @OneToMany(
    () => TblProtocoloProcurador,
    (tblProtocoloProcurador) => tblProtocoloProcurador.codEstadoNacimento
  )
  tblProtocoloProcuradors: TblProtocoloProcurador[];
}

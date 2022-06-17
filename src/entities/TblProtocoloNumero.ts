import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblProtocoloTipo } from "./TblProtocoloTipo";
import { TblOrgao } from "./TblOrgao";

@Index("IX_PN_COD_DOCUMENTO_TIPO", ["codDocumentoTipo", "codAno"], {})
@Index(
  "PK_TBL_PROTOCOLO_NUMERO",
  ["codOrgao", "codProtocoloTipo", "codAno", "codDocumentoTipo"],
  { unique: true }
)
@Entity("TBL_PROTOCOLO_NUMERO")
export class TblProtocoloNumero {
  @Column("number", { primary: true, name: "COD_PROTOCOLO_TIPO", scale: 0 })
  codProtocoloTipo: number;

  @Column("number", { primary: true, name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_NUMERO", scale: 0 })
  codNumero: number;

  @Column("number", { name: "COD_EMPRESA", scale: 0, default: () => "(0)" })
  codEmpresa: number;

  @Column("number", {
    primary: true,
    name: "COD_DOCUMENTO_TIPO",
    scale: 0,
    default: () => "0",
  })
  codDocumentoTipo: number;

  @Column("number", { primary: true, name: "COD_ANO", scale: 0 })
  codAno: number;

  @ManyToOne(
    () => TblProtocoloTipo,
    (tblProtocoloTipo) => tblProtocoloTipo.tblProtocoloNumeros
  )
  @JoinColumn([
    { name: "COD_PROTOCOLO_TIPO", referencedColumnName: "codProtocoloTipo" },
  ])
  codProtocoloTipo2: TblProtocoloTipo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloNumeros)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao2: TblOrgao;
}

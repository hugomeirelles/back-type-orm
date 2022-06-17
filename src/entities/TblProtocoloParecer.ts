import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblLaudoTipo } from "./TblLaudoTipo";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_PROTOCOLO_PARECER", ["codProtocolo", "dtInclusao"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_PARECER")
export class TblProtocoloParecer {
  @Column("varchar2", { name: "TXT_PARECER", nullable: true, length: 500 })
  txtParecer: string | null;

  @Column("date", {
    name: "DT_REALIZACAO",
    default: () => "TO_DATE('01/01/1900', 'DD/MM/YYYY')",
  })
  dtRealizacao: Date;

  @Column("date", {
    primary: true,
    name: "DT_INCLUSAO",
    default: () => "(SYSDATE)",
  })
  dtInclusao: Date;

  @Column("number", {
    primary: true,
    name: "COD_PROTOCOLO",
    precision: 10,
    scale: 0,
  })
  codProtocolo: number;

  @Column("number", {
    name: "COD_PARECER",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codParecer: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;

  @ManyToOne(
    () => TblLaudoTipo,
    (tblLaudoTipo) => tblLaudoTipo.tblProtocoloParecers
  )
  @JoinColumn([
    { name: "COD_LAUDO_TIPO", referencedColumnName: "codLaudoTipo" },
  ])
  codLaudoTipo: TblLaudoTipo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloParecers
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblOrgao } from "./TblOrgao";

@Entity("TBL_PROTOCOLO_CANCELAR")
export class TblProtocoloCancelar {
  @Column("varchar2", { name: "TXT_CANCELAMENTO", length: 500 })
  txtCancelamento: string;

  @Column("date", { name: "DT_CANCELAMENTO", default: () => "sysdate" })
  dtCancelamento: Date;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloCancelars
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloCancelars)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;
}

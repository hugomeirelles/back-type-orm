import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_PROTOCOLO_ARMAZENAR")
export class TblProtocoloArmazenar {
  @Column("varchar2", { name: "TXT_CAIXA", nullable: true, length: 255 })
  txtCaixa: string | null;

  @Column("varchar2", { name: "TXT_ARMARIO", nullable: true, length: 255 })
  txtArmario: string | null;

  @Column("date", { name: "DT_ARMAZENAR", default: () => "sysdate" })
  dtArmazenar: Date;

  @Column("number", { name: "COD_USUARIO_DESFAZER", nullable: true, scale: 0 })
  codUsuarioDesfazer: number | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloArmazenars
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

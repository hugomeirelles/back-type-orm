import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index(
  "PK_TBL_PROTOCOLO_VINCULO",
  ["codProtocolo", "codProtocoloVinculo", "codAtivo"],
  { unique: true }
)
@Entity("TBL_PROTOCOLO_VINCULO")
export class TblProtocoloVinculo {
  @Column("clob", { name: "TXT_JUSTIFICATIVA", nullable: true })
  txtJustificativa: string | null;

  @Column("date", { name: "HR_VINCULAR", default: () => "sysdate" })
  hrVincular: Date;

  @Column("date", { name: "HR_DESVINCULAR", nullable: true })
  hrDesvincular: Date | null;

  @Column("date", { name: "DT_VINCULAR", default: () => "sysdate" })
  dtVincular: Date;

  @Column("date", { name: "DT_DESVINCULAR", nullable: true })
  dtDesvincular: Date | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO_VINCULO", scale: 0 })
  codProtocoloVinculo: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    primary: true,
    name: "COD_ATIVO",
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloVinculos
  )
  @JoinColumn([
    { name: "COD_USUARIO_DESVINCULAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioDesvincular: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloVinculos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_VINCULAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioVincular: TblSegUsuario;
}

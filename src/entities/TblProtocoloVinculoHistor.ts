import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index(
  "PK_PROTOCOLOVINCULOHISTORICO",
  ["codProtocolo", "codProtocoloVinculo", "dtVincular"],
  { unique: true }
)
@Entity("TBL_PROTOCOLO_VINCULO_HISTOR")
export class TblProtocoloVinculoHistor {
  @Column("clob", { name: "TXT_JUSTIFICATIVA", nullable: true })
  txtJustificativa: string | null;

  @Column("date", { name: "HR_VINCULAR" })
  hrVincular: Date;

  @Column("date", { name: "HR_DESVINCULAR", nullable: true })
  hrDesvincular: Date | null;

  @Column("date", { name: "DT_VINCULAR" })
  dtVincular: Date;

  @Column("date", { name: "DT_DESVINCULAR", nullable: true })
  dtDesvincular: Date | null;

  @Column("number", { name: "COD_PROTOCOLO_VINCULO", scale: 0 })
  codProtocoloVinculo: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0 })
  codAtivo: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloVinculoHistors
  )
  @JoinColumn([
    { name: "COD_USUARIO_VINCULAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioVincular: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloVinculoHistors2
  )
  @JoinColumn([
    { name: "COD_USUARIO_DESVINCULAR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioDesvincular: TblSegUsuario;
}

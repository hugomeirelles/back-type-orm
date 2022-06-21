import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";

@Index("IDX_PROTOCOLO_ASSINA_EXT_PK", ["codProtocolo", "codUsuarioExterno"], {})
@Index("PK_PROTOCOLO_ASSINA_EXT_PK", ["codProtocoloAssinatura"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_ASSINATURA_EXT")
export class TblProtocoloAssinaturaExt {
  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", {
    name: "DT_ASSINATURA",
    nullable: true,
    default: () => "NULL",
  })
  dtAssinatura: Date | null;

  @Column("number", { name: "COD_USUARIO_EXTERNO", precision: 10, scale: 0 })
  codUsuarioExterno: number;

  @Column("number", {
    name: "COD_SITUACAO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codSituacao: number;

  @Column("number", {
    name: "COD_PROTOCOLO_DOCUMENTO",
    precision: 10,
    scale: 0,
  })
  codProtocoloDocumento: number;

  @Column("number", {
    primary: true,
    name: "COD_PROTOCOLO_ASSINATURA",
    precision: 10,
    scale: 0,
  })
  codProtocoloAssinatura: number;

  @Column("number", { name: "COD_PROTOCOLO", precision: 10, scale: 0 })
  codProtocolo: number;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblProtocoloAssinaturaExts
  )
  @JoinColumn([
    { name: "COD_USUARIO_EXTERNO", referencedColumnName: "codUsuarioExterno" },
  ])
  codUsuarioExterno2: TblSegUsuarioExterno;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblProtocoloAssinaturaExts2
  )
  @JoinColumn([
    { name: "COD_USUARIO_DEFINIU", referencedColumnName: "codUsuarioExterno" },
  ])
  codUsuarioDefiniu: TblSegUsuarioExterno;
}

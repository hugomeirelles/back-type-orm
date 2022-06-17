import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";

@Index("IX_DAE_COD_PROTOCOLO_DOCUMENTO", ["codProtocoloDocumento"], {})
@Index("PK_TBL_DOCUMENTO_ASSINA_EXT", ["codDocumentoAssinatura"], {
  unique: true,
})
@Entity("TBL_DOCUMENTO_ASSINATURA_EXT")
export class TblDocumentoAssinaturaExt {
  @Column("date", { name: "DT_ASSINATURA", default: () => "SYSDATE" })
  dtAssinatura: Date;

  @Column("number", { name: "COD_PROTOCOLO_DOCUMENTO" })
  codProtocoloDocumento: number;

  @Column("number", { primary: true, name: "COD_DOCUMENTO_ASSINATURA" })
  codDocumentoAssinatura: number;

  @ManyToOne(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) => tblProtocoloDocumento.tblDocumentoAssinaturaExts
  )
  @JoinColumn([
    {
      name: "COD_PROTOCOLO_DOCUMENTO",
      referencedColumnName: "codProtocoloDocumento",
    },
  ])
  codProtocoloDocumento2: TblProtocoloDocumento;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblDocumentoAssinaturaExts
  )
  @JoinColumn([
    { name: "COD_USUARIO_EXTERNO", referencedColumnName: "codUsuarioExterno" },
  ])
  codUsuarioExterno: TblSegUsuarioExterno;
}

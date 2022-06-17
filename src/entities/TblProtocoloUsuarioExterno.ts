import { Column, Entity, Index } from "typeorm";

@Index("PK_PROTOCOLOUSUARIOEXTERNO", ["codProtocolo", "codUsuarioExterno"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_USUARIO_EXTERNO")
export class TblProtocoloUsuarioExterno {
  @Column("number", { primary: true, name: "COD_USUARIO_EXTERNO", scale: 0 })
  codUsuarioExterno: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;
}

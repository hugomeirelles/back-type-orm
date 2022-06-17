import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_ARMAZENAMENTO", ["codProtocolo", "codArmazenamento"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_ARMAZENAMENTO")
export class TblProtocoloArmazenamento {
  @Column("number", { name: "COD_USUARIO", nullable: true, scale: 0 })
  codUsuario: number | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO", nullable: true, scale: 0 })
  codOrgao: number | null;

  @Column("number", { primary: true, name: "COD_ARMAZENAMENTO", scale: 0 })
  codArmazenamento: number;
}

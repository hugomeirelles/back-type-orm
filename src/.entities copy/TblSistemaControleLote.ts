import { Column, Entity, Index } from "typeorm";

@Index("TBL_SISTEMA_CONTROLE_LOTE_PK", ["codProtocolo", "dtOperacao"], {
  unique: true,
})
@Entity("TBL_SISTEMA_CONTROLE_LOTE")
export class TblSistemaControleLote {
  @Column("date", { primary: true, name: "DT_OPERACAO" })
  dtOperacao: Date;

  @Column("number", { name: "COD_USUARIO" })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO" })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO_ORIGEM" })
  codOrgaoOrigem: number;

  @Column("number", { name: "COD_ORGAO_DESTINO" })
  codOrgaoDestino: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_FLUXO", ["codProtocolo", "datCriacao"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_FLUXO")
export class TblProtocoloFluxo {
  @Column("date", {
    primary: true,
    name: "DAT_CRIACAO",
    default: () => "SYSDATE",
  })
  datCriacao: Date;

  @Column("number", { name: "COD_USUARIO", precision: 10, scale: 0 })
  codUsuario: number;

  @Column("number", {
    primary: true,
    name: "COD_PROTOCOLO",
    precision: 10,
    scale: 0,
  })
  codProtocolo: number;

  @Column("number", {
    name: "COD_ORDEM_ATUAL",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codOrdemAtual: number;

  @Column("varchar2", { name: "COD_FLUXO_ESPECIFICO", length: 15 })
  codFluxoEspecifico: string;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;
}

import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_FLUXO_TRABALHO", ["codFluxoTrabalho"], { unique: true })
@Entity("TBL_FLUXO_TRABALHO")
export class TblFluxoTrabalho {
  @Column("varchar2", { name: "TXT_FLUXO_TRABALHO", length: 255 })
  txtFluxoTrabalho: string;

  @Column("date", { name: "DT_FLUXO_TRABALHO", default: () => "SYSDATE" })
  dtFluxoTrabalho: Date;

  @Column("number", {
    name: "COD_PROTOCOLO_TIPO",
    precision: 10,
    scale: 0,
    default: () => "0",
  })
  codProtocoloTipo: number;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO",
    precision: 10,
    scale: 0,
  })
  codFluxoTrabalho: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @Column("number", {
    name: "COD_ASSUNTO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAssunto: number | null;
}

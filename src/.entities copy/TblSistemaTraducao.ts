import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_TRADUCAO", ["codChave"], { unique: true })
@Entity("TBL_SISTEMA_TRADUCAO")
export class TblSistemaTraducao {
  @Column("varchar2", {
    name: "TXT_TERMO_PORTUGUES",
    nullable: true,
    length: 255,
  })
  txtTermoPortugues: string | null;

  @Column("varchar2", { name: "TXT_TERMO_INGLES", nullable: true, length: 255 })
  txtTermoIngles: string | null;

  @Column("varchar2", {
    name: "TXT_TERMO_FRANCES",
    nullable: true,
    length: 255,
  })
  txtTermoFrances: string | null;

  @Column("varchar2", {
    name: "TXT_TERMO_ESPANHOL",
    nullable: true,
    length: 255,
  })
  txtTermoEspanhol: string | null;

  @Column("varchar2", { name: "TXT_CHAVE", length: 255 })
  txtChave: string;

  @Column("number", {
    primary: true,
    name: "COD_CHAVE",
    precision: 6,
    scale: 0,
  })
  codChave: number;
}

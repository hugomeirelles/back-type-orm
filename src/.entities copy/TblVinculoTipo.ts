import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269511", ["codVinculoTipo"], { unique: true })
@Entity("TBL_VINCULO_TIPO")
export class TblVinculoTipo {
  @Column("varchar2", { name: "TXT_NOME", length: 60 })
  txtNome: string;

  @Column("varchar2", { name: "TXT_IDENTIFICADOR", nullable: true, length: 50 })
  txtIdentificador: string | null;

  @Column("number", { primary: true, name: "COD_VINCULO_TIPO" })
  codVinculoTipo: number;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;
}

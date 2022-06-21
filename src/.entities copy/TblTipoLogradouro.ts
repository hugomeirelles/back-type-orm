import { Column, Entity, Index } from "typeorm";

@Index("PK_TIPO_LOGRADOURO", ["codTipoLogradouro"], { unique: true })
@Entity("TBL_TIPO_LOGRADOURO")
export class TblTipoLogradouro {
  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 50 })
  txtSigla: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 255 })
  txtDescricao: string | null;

  @Column("number", {
    primary: true,
    name: "COD_TIPO_LOGRADOURO",
    precision: 10,
    scale: 0,
  })
  codTipoLogradouro: number;

  @Column("number", {
    name: "COD_ATIVO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codAtivo: number | null;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";

@Index("SYS_C00269500", ["codAcervoDocumento", "dtAcesso"], { unique: true })
@Entity("TBL_ACERVO_DOCUMENTO_ACESSO")
export class TblAcervoDocumentoAcesso {
  @Column("varchar2", { name: "TXT_ENDERECO_IP", nullable: true, length: 25 })
  txtEnderecoIp: string | null;

  @Column("date", { primary: true, name: "DT_ACESSO" })
  dtAcesso: Date;

  @Column("number", { name: "COD_ACESSO_TIPO", precision: 1, scale: 0 })
  codAcessoTipo: number;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_DOCUMENTO",
    precision: 10,
    scale: 0,
  })
  codAcervoDocumento: number;

  @ManyToOne(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.tblAcervoDocumentoAcessos
  )
  @JoinColumn([
    {
      name: "COD_ACERVO_DOCUMENTO",
      referencedColumnName: "codAcervoDocumento",
    },
  ])
  codAcervoDocumento2: TblAcervoDocumento;
}

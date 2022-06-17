import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("SYS_C00269598", ["codAcervoDocumentoHistorico"], { unique: true })
@Entity("TBL_ACERVO_DOCUMENTO_HISTORICO")
export class TblAcervoDocumentoHistorico {
  @Column("varchar2", { name: "TXT_OPERACAO", length: 25 })
  txtOperacao: string;

  @Column("varchar2", { name: "TXT_ENDERECO_IP", nullable: true, length: 50 })
  txtEnderecoIp: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 4000 })
  txtDescricao: string | null;

  @Column("date", { name: "DT_OPERACAO", default: () => "CURRENT_TIMESTAMP" })
  dtOperacao: Date;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_DOCUMENTO_HISTORICO",
    precision: 10,
    scale: 0,
  })
  codAcervoDocumentoHistorico: number;

  @ManyToOne(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.tblAcervoDocumentoHistoricos
  )
  @JoinColumn([
    {
      name: "COD_ACERVO_DOCUMENTO",
      referencedColumnName: "codAcervoDocumento",
    },
  ])
  codAcervoDocumento: TblAcervoDocumento;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblAcervoDocumentoHistoricos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

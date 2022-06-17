import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblAcervoTipo } from "./TblAcervoTipo";
import { TblAssunto } from "./TblAssunto";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblCaixaComentario } from "./TblCaixaComentario";

@Index("IX_C_COD_ACERVO_TIPO", ["codAcervoTipo"], {})
@Index("SYS_C00269731", ["codCaixa"], { unique: true })
@Entity("TBL_CAIXA")
export class TblCaixa {
  @Column("varchar2", { name: "TXT_OBSERVACAO", nullable: true, length: 1000 })
  txtObservacao: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", length: 30 })
  txtNumero: string;

  @Column("varchar2", {
    name: "TXT_IDENTIFICACAO",
    nullable: true,
    length: 255,
  })
  txtIdentificacao: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 1000 })
  txtDescricao: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "SYSDATE" })
  dtInclusao: Date;

  @Column("number", {
    primary: true,
    name: "COD_CAIXA",
    precision: 10,
    scale: 0,
  })
  codCaixa: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;

  @Column("number", { name: "COD_ACERVO_TIPO", precision: 5, scale: 0 })
  codAcervoTipo: number;

  @OneToMany(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.codCaixa2
  )
  tblAcervoDocumentos: TblAcervoDocumento[];

  @ManyToOne(() => TblAcervoTipo, (tblAcervoTipo) => tblAcervoTipo.tblCaixas)
  @JoinColumn([
    { name: "COD_ACERVO_TIPO", referencedColumnName: "codAcervoTipo" },
  ])
  codAcervoTipo2: TblAcervoTipo;

  @ManyToOne(() => TblAssunto, (tblAssunto) => tblAssunto.tblCaixas)
  @JoinColumn([{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }])
  codAssunto: TblAssunto;

  @ManyToOne(() => TblSegUsuario, (tblSegUsuario) => tblSegUsuario.tblCaixas)
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @OneToMany(
    () => TblCaixaComentario,
    (tblCaixaComentario) => tblCaixaComentario.codCaixa2
  )
  tblCaixaComentarios: TblCaixaComentario[];
}

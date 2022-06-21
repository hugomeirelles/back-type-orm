import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblAcervoTipoAtributo } from "./TblAcervoTipoAtributo";
import { TblCaixa } from "./TblCaixa";
import { TblDossieAcervoTipo } from "./TblDossieAcervoTipo";

@Index("SYS_C00269675", ["codAcervoTipo"], { unique: true })
@Entity("TBL_ACERVO_TIPO")
export class TblAcervoTipo {
  @Column("varchar2", { name: "TXT_SIGLA", length: 10 })
  txtSigla: string;

  @Column("varchar2", { name: "TXT_PESSOA", nullable: true, length: 100 })
  txtPessoa: string | null;

  @Column("varchar2", { name: "TXT_ACERVO_TIPO", length: 100 })
  txtAcervoTipo: string;

  @Column("number", { name: "COD_VINCULO_EMPREGATICIO", nullable: true })
  codVinculoEmpregaticio: number | null;

  @Column("number", { name: "COD_TIPO_DOCUMENTO", nullable: true })
  codTipoDocumento: number | null;

  @Column("number", { name: "COD_PESSOA", nullable: true })
  codPessoa: number | null;

  @Column("number", { name: "COD_CLASSIFICACAO", nullable: true })
  codClassificacao: number | null;

  @Column("number", { name: "COD_ATIVO", precision: 1, scale: 0 })
  codAtivo: number;

  @Column("number", {
    name: "COD_ACESSO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codAcesso: number | null;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_TIPO",
    precision: 5,
    scale: 0,
  })
  codAcervoTipo: number;

  @OneToMany(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.codAcervoTipo
  )
  tblAcervoDocumentos: TblAcervoDocumento[];

  @OneToMany(
    () => TblAcervoTipoAtributo,
    (tblAcervoTipoAtributo) => tblAcervoTipoAtributo.codAcervoTipo2
  )
  tblAcervoTipoAtributos: TblAcervoTipoAtributo[];

  @OneToMany(() => TblCaixa, (tblCaixa) => tblCaixa.codAcervoTipo2)
  tblCaixas: TblCaixa[];

  @OneToMany(
    () => TblDossieAcervoTipo,
    (tblDossieAcervoTipo) => tblDossieAcervoTipo.codAcervoTipo2
  )
  tblDossieAcervoTipos: TblDossieAcervoTipo[];
}

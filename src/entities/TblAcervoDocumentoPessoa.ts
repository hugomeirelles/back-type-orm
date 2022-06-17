import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblInteressadoVinculoEmpre } from "./TblInteressadoVinculoEmpre";
import { TblInteressado } from "./TblInteressado";

@Index(
  "TBL_ACERVO_DOCUMENTO_PESSO_PK",
  ["codAcervoDocumento", "codInteressado", "codCaixa"],
  { unique: true }
)
@Entity("TBL_ACERVO_DOCUMENTO_PESSOA")
export class TblAcervoDocumentoPessoa {
  @Column("number", { primary: true, name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @Column("number", { primary: true, name: "COD_CAIXA", scale: 0 })
  codCaixa: number;

  @Column("number", { primary: true, name: "COD_ACERVO_DOCUMENTO", scale: 0 })
  codAcervoDocumento: number;

  @ManyToOne(
    () => TblInteressadoVinculoEmpre,
    (tblInteressadoVinculoEmpre) =>
      tblInteressadoVinculoEmpre.tblAcervoDocumentoPessoas
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_VINCULO_EMPRE",
      referencedColumnName: "codInteressadoVinculoEmpre",
    },
  ])
  codInteressadoVinculoEmpre: TblInteressadoVinculoEmpre;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblAcervoDocumentoPessoas
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado2: TblInteressado;
}

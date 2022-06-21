import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblPalavraChave } from "./TblPalavraChave";

@Index("SYS_C00269725", ["codAcervoDocumento", "codPalavraChave"], {
  unique: true,
})
@Entity("TBL_ACERVO_DOC_PALAVRA_CHAVE")
export class TblAcervoDocPalavraChave {
  @Column("date", { name: "DT_PALAVRA", default: () => "SYSDATE" })
  dtPalavra: Date;

  @Column("number", { primary: true, name: "COD_PALAVRA_CHAVE" })
  codPalavraChave: number;

  @Column("number", { primary: true, name: "COD_ACERVO_DOCUMENTO" })
  codAcervoDocumento: number;

  @ManyToOne(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.tblAcervoDocPalavraChaves
  )
  @JoinColumn([
    {
      name: "COD_ACERVO_DOCUMENTO",
      referencedColumnName: "codAcervoDocumento",
    },
  ])
  codAcervoDocumento2: TblAcervoDocumento;

/*   @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblAcervoDocPalavraChaves
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario; */

  @ManyToOne(
    () => TblPalavraChave,
    (tblPalavraChave) => tblPalavraChave.tblAcervoDocPalavraChaves
  )
  @JoinColumn([
    { name: "COD_PALAVRA_CHAVE", referencedColumnName: "codPalavraChave" },
  ])
  codPalavraChave2: TblPalavraChave;
}

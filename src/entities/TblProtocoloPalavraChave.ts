import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblPalavraChave } from "./TblPalavraChave";

@Index("IX_PP_COD_PALAVRA_CHAVE", ["codPalavraChave"], {})
@Index("IX_PP_COD_USUARIO", ["codUsuario"], {})
@Index("PK_TBL_PROTOCOLO_PALAVRA_CHAVE", ["codProtocolo", "codPalavraChave"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_PALAVRA_CHAVE")
export class TblProtocoloPalavraChave {
  @Column("date", { name: "DT_PALAVRA", default: () => "sysdate" })
  dtPalavra: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_PALAVRA_CHAVE", scale: 0 })
  codPalavraChave: number;

  @ManyToOne(
    () => TblPalavraChave,
    (tblPalavraChave) => tblPalavraChave.tblProtocoloPalavraChaves
  )
  @JoinColumn([
    { name: "COD_PALAVRA_CHAVE", referencedColumnName: "codPalavraChave" },
  ])
  codPalavraChave2: TblPalavraChave;
}

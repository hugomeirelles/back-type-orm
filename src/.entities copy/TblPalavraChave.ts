import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAcervoDocPalavraChave } from "./TblAcervoDocPalavraChave";
import { TblProtocoloPalavraChave } from "./TblProtocoloPalavraChave";

@Index("IX_TXT_PALAVRA_CHAVE", ["txtPalavraChave"], {})
@Index("PK_TBL_PALAVRA_CHAVE", ["codPalavraChave"], { unique: true })
@Entity("TBL_PALAVRA_CHAVE")
export class TblPalavraChave {
  @Column("varchar2", { name: "TXT_PALAVRA_CHAVE", length: 50 })
  txtPalavraChave: string;

  @Column("number", { primary: true, name: "COD_PALAVRA_CHAVE", scale: 0 })
  codPalavraChave: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblAcervoDocPalavraChave,
    (tblAcervoDocPalavraChave) => tblAcervoDocPalavraChave.codPalavraChave2
  )
  tblAcervoDocPalavraChaves: TblAcervoDocPalavraChave[];

  @OneToMany(
    () => TblProtocoloPalavraChave,
    (tblProtocoloPalavraChave) => tblProtocoloPalavraChave.codPalavraChave2
  )
  tblProtocoloPalavraChaves: TblProtocoloPalavraChave[];
}

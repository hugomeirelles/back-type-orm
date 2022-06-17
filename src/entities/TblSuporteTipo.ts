import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAcervoDocumento } from "./TblAcervoDocumento";
import { TblArquivo } from "./TblArquivo";
import { TblProtocolo } from "./TblProtocolo";
import { TblSuporteTipoProtocoloTip } from "./TblSuporteTipoProtocoloTip";

@Index("PK_TBL_SUPORTE_TIPO", ["codSuporteTipo"], { unique: true })
@Entity("TBL_SUPORTE_TIPO")
export class TblSuporteTipo {
  @Column("varchar2", { name: "TXT_SUPORTE_TIPO", nullable: true, length: 50 })
  txtSuporteTipo: string | null;

  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 2 })
  txtSigla: string | null;

  @Column("number", { primary: true, name: "COD_SUPORTE_TIPO", scale: 0 })
  codSuporteTipo: number;

  @Column("number", { name: "COD_PRAZO", scale: 0, default: () => "(0)" })
  codPrazo: number;

  @Column("number", { name: "COD_ORDEM", scale: 0, default: () => "1" })
  codOrdem: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { name: "COD_ANEXO", scale: 0, default: () => "(0)" })
  codAnexo: number;

  @OneToMany(
    () => TblAcervoDocumento,
    (tblAcervoDocumento) => tblAcervoDocumento.codSuporteOriginal
  )
  tblAcervoDocumentos: TblAcervoDocumento[];

  @OneToMany(() => TblArquivo, (tblArquivo) => tblArquivo.codSuporteTipo)
  tblArquivos: TblArquivo[];

  @OneToMany(() => TblProtocolo, (tblProtocolo) => tblProtocolo.codSuporteTipo2)
  tblProtocolos: TblProtocolo[];

  @OneToMany(
    () => TblSuporteTipoProtocoloTip,
    (tblSuporteTipoProtocoloTip) => tblSuporteTipoProtocoloTip.codSuporteTipo2
  )
  tblSuporteTipoProtocoloTips: TblSuporteTipoProtocoloTip[];
}

import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";
import { TblProtocoloArquivo } from "./TblProtocoloArquivo";

@Index("PK_TBL_SITUACAO", ["codSituacao"], { unique: true })
@Entity("TBL_SITUACAO")
export class TblSituacao {
  @Column("varchar2", { name: "TXT_SITUACAO", length: 100 })
  txtSituacao: string;

  @Column("number", { primary: true, name: "COD_SITUACAO", scale: 0 })
  codSituacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(() => TblProtocolo, (tblProtocolo) => tblProtocolo.codSituacao2)
  tblProtocolos: TblProtocolo[];

  @OneToMany(
    () => TblProtocoloArquivo,
    (tblProtocoloArquivo) => tblProtocoloArquivo.codOperacao
  )
  tblProtocoloArquivos: TblProtocoloArquivo[];
}

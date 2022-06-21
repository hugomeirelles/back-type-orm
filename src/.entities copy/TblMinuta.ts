import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblMinutaAcesso } from "./TblMinutaAcesso";
import { TblMinutaArquivo } from "./TblMinutaArquivo";
import { TblMinutaAvaliacao } from "./TblMinutaAvaliacao";
import { TblMinutaDistribuicao } from "./TblMinutaDistribuicao";
import { TblMinutaMovimento } from "./TblMinutaMovimento";
import { TblProtocoloMinuta } from "./TblProtocoloMinuta";

@Index("PK_TBL_MINUTA", ["codMinuta"], { unique: true })
@Entity("TBL_MINUTA")
export class TblMinuta {
  @Column("varchar2", { name: "TXT_DESCRICAO", length: 500 })
  txtDescricao: string;

  @Column("varchar2", { name: "TXT_ARQUIVO_ID", nullable: true, length: 50 })
  txtArquivoId: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("number", { primary: true, name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @Column("number", { name: "COD_DOCUMENTO_TIPO", nullable: true, scale: 0 })
  codDocumentoTipo: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ASSUNTO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAssunto: number | null;

  @Column("number", { name: "COD_ASSOCIADO", scale: 0, default: () => "0" })
  codAssociado: number;

  @ManyToOne(() => TblSegUsuario, (tblSegUsuario) => tblSegUsuario.tblMinutas)
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @OneToMany(
    () => TblMinutaAcesso,
    (tblMinutaAcesso) => tblMinutaAcesso.codMinuta2
  )
  tblMinutaAcessos: TblMinutaAcesso[];

  @OneToMany(
    () => TblMinutaArquivo,
    (tblMinutaArquivo) => tblMinutaArquivo.codMinuta2
  )
  tblMinutaArquivos: TblMinutaArquivo[];

  @OneToMany(
    () => TblMinutaAvaliacao,
    (tblMinutaAvaliacao) => tblMinutaAvaliacao.codMinuta2
  )
  tblMinutaAvaliacaos: TblMinutaAvaliacao[];

  @OneToMany(
    () => TblMinutaDistribuicao,
    (tblMinutaDistribuicao) => tblMinutaDistribuicao.codMinuta2
  )
  tblMinutaDistribuicaos: TblMinutaDistribuicao[];

  @OneToMany(
    () => TblMinutaMovimento,
    (tblMinutaMovimento) => tblMinutaMovimento.codMinuta2
  )
  tblMinutaMovimentos: TblMinutaMovimento[];

  @OneToMany(
    () => TblProtocoloMinuta,
    (tblProtocoloMinuta) => tblProtocoloMinuta.codMinuta2
  )
  tblProtocoloMinutas: TblProtocoloMinuta[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { TblInteressado } from "./TblInteressado";
import { TblNotificacaoOrigem } from "./TblNotificacaoOrigem";
import { TblProtocolo } from "./TblProtocolo";

@Index("PK_TBL_NOTIFICACAO", ["codNotificacao"], { unique: true })
@Entity("TBL_NOTIFICACAO")
export class TblNotificacao {
  @Column("varchar2", { name: "TXT_NUMERO", length: 20 })
  txtNumero: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 4000 })
  txtDescricao: string;

  @Column("varchar2", { name: "TXT_ASSUNTO", length: 500 })
  txtAssunto: string;

  @Column("date", { name: "DT_LIDO", nullable: true })
  dtLido: Date | null;

  @Column("date", { name: "DT_ENVIO" })
  dtEnvio: Date;

  @Column("number", { name: "COD_SITUACAO", nullable: true })
  codSituacao: number | null;

  @Column("number", { primary: true, name: "COD_NOTIFICACAO" })
  codNotificacao: number;

  @Column("number", { name: "COD_DESTINO_EXIBICAO", precision: 1, scale: 0 })
  codDestinoExibicao: number;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblNotificacaos
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_REMETENTE",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoRemetente: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblNotificacaos2
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_DESTINATARIO",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoDestinatario: TblInteressado;

  @ManyToOne(
    () => TblNotificacaoOrigem,
    (tblNotificacaoOrigem) => tblNotificacaoOrigem.tblNotificacaos
  )
  @JoinColumn([
    {
      name: "COD_NOTIFICACAO_ORIGEM",
      referencedColumnName: "codNotificacaoOrigem",
    },
  ])
  codNotificacaoOrigem: TblNotificacaoOrigem;

  @ManyToMany(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblNotificacaos
  )
  @JoinTable({
    name: "TBL_NOTIFICACAO_PROTOCOLO",
    joinColumns: [
      { name: "COD_NOTIFICACAO", referencedColumnName: "codNotificacao" },
    ],
    inverseJoinColumns: [
      { name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" },
    ],
  })
  tblProtocolos: TblProtocolo[];
}

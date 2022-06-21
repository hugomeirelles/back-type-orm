import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_PROTOCOLO_EMPRESTIMO")
export class TblProtocoloEmprestimo {
  @Column("number", { name: "COD_ORGAO_DESTINO", scale: 0, default: () => "1" })
  codOrgaoDestino: number;

  @Column("number", {
    name: "COD_EMPRESTIMO_FLUXO",
    scale: 0,
    default: () => "0",
  })
  codEmprestimoFluxo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("varchar2", { name: "TXT_PESSOA", nullable: true, length: 255 })
  txtPessoa: string | null;

  @Column("clob", { name: "TXT_PARTE", nullable: true })
  txtParte: string | null;

  @Column("number", { name: "TXT_DIA", scale: 0 })
  txtDia: number;

  @Column("date", { name: "DT_RETORNO" })
  dtRetorno: Date;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_EMPRESTIMO", default: () => "sysdate" })
  dtEmprestimo: Date;

  @Column("date", { name: "DT_DEVOLUCAO", nullable: true })
  dtDevolucao: Date | null;

  @Column("number", { name: "COD_RECEBIDO", scale: 0, default: () => "(0)" })
  codRecebido: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO_ORIGEM", scale: 0, default: () => "3" })
  codOrgaoOrigem: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloEmprestimos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

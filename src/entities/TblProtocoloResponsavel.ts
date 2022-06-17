import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblOrgao } from "./TblOrgao";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_PROTOCOLO_RESPONSAVEL")
export class TblProtocoloResponsavel {
  @Column("clob", { name: "TXT_INFORMACAO_COMPLEMENTAR", nullable: true })
  txtInformacaoComplementar: string | null;

  @Column("date", { name: "DT_FINALIZACAO", nullable: true })
  dtFinalizacao: Date | null;

  @Column("date", { name: "DT_ATRIBUICAO", default: () => "sysdate" })
  dtAtribuicao: Date;

  @Column("number", {
    name: "COD_USUARIO_FINALIZADOR",
    nullable: true,
    scale: 0,
  })
  codUsuarioFinalizador: number | null;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO_FINALIZADOR", nullable: true, scale: 0 })
  codOrgaoFinalizador: number | null;

  @Column("number", { name: "COD_EMAIL", scale: 0, default: () => "(0)" })
  codEmail: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblProtocoloResponsavels)
  @JoinColumn([
    { name: "COD_ORGAO_ATRIBUIDOR", referencedColumnName: "codOrgao" },
  ])
  codOrgaoAtribuidor: TblOrgao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloResponsavels
  )
  @JoinColumn([
    { name: "COD_USUARIO_RESPONSAVEL", referencedColumnName: "codUsuario" },
  ])
  codUsuarioResponsavel: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblProtocoloResponsavels2
  )
  @JoinColumn([
    { name: "COD_USUARIO_ATRIBUIDOR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioAtribuidor: TblSegUsuario;
}

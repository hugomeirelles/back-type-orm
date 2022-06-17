import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblMinuta } from "./TblMinuta";
import { TblOrgao } from "./TblOrgao";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_MINUTADISTRIBUICAO", ["codMinuta", "dtDistribuicao"], {
  unique: true,
})
@Entity("TBL_MINUTA_DISTRIBUICAO")
export class TblMinutaDistribuicao {
  @Column("clob", { name: "TXT_PROVIDENCIA" })
  txtProvidencia: string;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_PRAZO_RESPOSTA", nullable: true })
  dtPrazoResposta: Date | null;

  @Column("date", {
    primary: true,
    name: "DT_DISTRIBUICAO",
    default: () => "sysdate",
  })
  dtDistribuicao: Date;

  @Column("date", { name: "DT_CANCELAR", nullable: true })
  dtCancelar: Date | null;

  @Column("number", { name: "COD_RECEBIMENTO", scale: 0, default: () => "(0)" })
  codRecebimento: number;

  @Column("number", { name: "COD_MOTIVO", scale: 0, default: () => "(0)" })
  codMotivo: number;

  @Column("number", { primary: true, name: "COD_MINUTA", scale: 0 })
  codMinuta: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(() => TblMinuta, (tblMinuta) => tblMinuta.tblMinutaDistribuicaos)
  @JoinColumn([{ name: "COD_MINUTA", referencedColumnName: "codMinuta" }])
  codMinuta2: TblMinuta;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblMinutaDistribuicaos)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblMinutaDistribuicaos
  )
  @JoinColumn([
    { name: "COD_USUARIO_RECEBEDOR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioRecebedor: TblSegUsuario;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblMinutaDistribuicaos2
  )
  @JoinColumn([
    { name: "COD_USUARIO_DISTRIBUIDOR", referencedColumnName: "codUsuario" },
  ])
  codUsuarioDistribuidor: TblSegUsuario;
}

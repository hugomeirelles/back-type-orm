import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblCaixa } from "./TblCaixa";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("SYS_C00269551", ["codCaixa", "dtInclusao"], { unique: true })
@Entity("TBL_CAIXA_COMENTARIO")
export class TblCaixaComentario {
  @Column("varchar2", { name: "TXT_COMENTARIO", length: 1000 })
  txtComentario: string;

  @Column("date", {
    primary: true,
    name: "DT_INCLUSAO",
    default: () => "(SYSDATE)",
  })
  dtInclusao: Date;

  @Column("number", {
    primary: true,
    name: "COD_CAIXA",
    precision: 10,
    scale: 0,
  })
  codCaixa: number;

  @ManyToOne(() => TblCaixa, (tblCaixa) => tblCaixa.tblCaixaComentarios)
  @JoinColumn([{ name: "COD_CAIXA", referencedColumnName: "codCaixa" }])
  codCaixa2: TblCaixa;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblCaixaComentarios
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

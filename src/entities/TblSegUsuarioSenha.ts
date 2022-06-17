import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_SEG_USUARIO_SENHA", ["codUsuario", "txtSenha", "dtSenha"], {
  unique: true,
})
@Entity("TBL_SEG_USUARIO_SENHA")
export class TblSegUsuarioSenha {
  @Column("varchar2", { primary: true, name: "TXT_SENHA", length: 64 })
  txtSenha: string;

  @Column("date", { primary: true, name: "DT_SENHA", default: () => "sysdate" })
  dtSenha: Date;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioSenhas
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario;
}

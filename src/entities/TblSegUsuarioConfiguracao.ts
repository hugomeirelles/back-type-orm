import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegConfiguracao } from "./TblSegConfiguracao";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("IX_SUC_COD_CONFIGURACAO", ["codConfiguracao", "txtValor"], {})
@Index("PK_SEGUSUARIOCONFIGURACAO", ["codUsuario", "codConfiguracao"], {
  unique: true,
})
@Entity("TBL_SEG_USUARIO_CONFIGURACAO")
export class TblSegUsuarioConfiguracao {
  @Column("varchar2", { name: "TXT_VALOR", nullable: true, length: 255 })
  txtValor: string | null;

  @Column("number", { primary: true, name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_CONFIGURACAO", scale: 0 })
  codConfiguracao: number;

  @ManyToOne(
    () => TblSegConfiguracao,
    (tblSegConfiguracao) => tblSegConfiguracao.tblSegUsuarioConfiguracaos
  )
  @JoinColumn([
    { name: "COD_CONFIGURACAO", referencedColumnName: "codConfiguracao" },
  ])
  codConfiguracao2: TblSegConfiguracao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioConfiguracaos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario2: TblSegUsuario;
}

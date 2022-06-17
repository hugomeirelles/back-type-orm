import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblAtributo } from "./TblAtributo";
import { TblSegUsuario } from "./TblSegUsuario";

@Entity("TBL_SEG_USUARIO_ATRIBUTO")
export class TblSegUsuarioAtributo {
  @ManyToOne(
    () => TblAtributo,
    (tblAtributo) => tblAtributo.tblSegUsuarioAtributos
  )
  @JoinColumn([{ name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" }])
  codAtributo: TblAtributo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblSegUsuarioAtributos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;
}

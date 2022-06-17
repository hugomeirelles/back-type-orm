import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TblEmpresa } from "./TblEmpresa";
import { TblMotivo } from "./TblMotivo";

@Entity("TBL_MOTIVO_EMPRESA")
export class TblMotivoEmpresa {
  @ManyToOne(() => TblEmpresa, (tblEmpresa) => tblEmpresa.tblMotivoEmpresas)
  @JoinColumn([{ name: "COD_EMPRESA", referencedColumnName: "codEmpresa" }])
  codEmpresa: TblEmpresa;

  @ManyToOne(() => TblMotivo, (tblMotivo) => tblMotivo.tblMotivoEmpresas)
  @JoinColumn([{ name: "COD_MOTIVO", referencedColumnName: "codMotivo" }])
  codMotivo: TblMotivo;
}

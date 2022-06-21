import { Column, Entity, Index } from "typeorm";

@Index("PK_DISTRIBUICAO_AUTO", ["codUsuario", "codOrgao"], { unique: true })
@Entity("TBL_DISTRIBUICAO_AUTO")
export class TblDistribuicaoAuto {
  @Column("number", { primary: true, name: "COD_USUARIO" })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_ORGAO" })
  codOrgao: number;

  @Column("number", { name: "COD_ENVIO", nullable: true })
  codEnvio: number | null;
}

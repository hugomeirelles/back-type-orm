import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";


@Entity({
    name:'TBL_SEG_USUARIO',
    database:'ORCL',
    schema:'IUSR_UERR',
    synchronize: false
})
export class Usuario extends BaseEntity{
    @ApiProperty({
        description:'id do usuario.',
        type: Number
    })
    @PrimaryGeneratedColumn()
    COD_USUARIO:number;

    @ApiProperty({
        description:'Código do oargão tipo NUMBER(38,0)',
        type:Number
    })
    @Column()
    COD_ORGAO:number;

    @ApiProperty({
        description:'Nome digitado no campo usuário!. VARCHAR2(255) Not null',
        type:String
    })
    @Column()
    TXT_LOGIN:string;

    @ApiProperty({
        description:'Senha do usuário campo do tipo VARCHAR2(64)',
        type:String
    })
    @Column()
    TXT_SENHA:string;

    @ApiProperty({
        description:'Nome do usuário VARCHAR2(64)',
        type:String
    })
    @Column()
    TXT_NOME:string;

    @ApiProperty({
        description:'Email VARCHAR2(100)',
        type:String
    })
    @Column()
    TXT_EMAIL:string;

    @ApiProperty({
        description:'Código do cargo: NUMBER(38,0)',
        type:Number
    })
    @Column()
    COD_CARGO:number;

    @ApiProperty({
        description:'Data do cadastro: Date',
        type:Date
    })
    @Column()
    DT_CADASTRO:Date;
    
    @ApiProperty({
        description:'Certificado: tipo de campo VARCHAR2(50)',
        type:String
    })
    @Column()
    TXT_CERTIFICADO:string;

    @ApiProperty({
        description:'Código do cargo: NUMBER(38,0)',
        type:Number
    })
    @Column()
    COD_EMPRESA:number;

    @ApiProperty({
        description:'Código Alterar Senha tipo:NUMBER(38,0)',
        type:Number
    })
    @Column()
    COD_ALTERAR_SENHA:number;

    @ApiProperty({
        description:'Código Alterar Senha tipo:NUMBER(38,0)',
        type:String
    })
    @Column()
    DT_SENHA:string;

    @ApiProperty({
        description:'NUMBER(38,0) DEFAULT (0)',
        type:Number
    })
    @Column()
    COD_SENHA_INCORRETA:number;

    @ApiProperty({
        description:'NUMBER(38,0) DEFAULT (1)',
        type:Number
    })
    @Column()
    COD_ATIVO:number;

    @ApiProperty({
        description:'NUMBER(10,0)',
        type:Number
    })
    @Column()
    COD_USUARIO_CIVICO:number;    

    @ApiProperty({
        description:'VARCHAR2(50)',
        type:String
    })
    @Column()
    TXT_LOGIN_CIVICO:string; 

    @ApiProperty({
        description:'NUMBER',
        type:Number
    })
    @Column()
    COD_INTERESSADO:number;	 

    public static validaLoginSenha(TXT_LOGIN: string, TXT_SENHA:string){
        return this.createQueryBuilder('TBL_SEG_USUARIO')
            .where("TBL_SEG_USUARIO.TXT_LOGIN = :TXT_LOGIN", {TXT_LOGIN})
            .andWhere("TBL_SEG_USUARIO.TXT_SENHA = :TXT_SENHA", {TXT_SENHA})
            .getMany()
    }

    public static findByLogin(TXT_LOGIN: string):Promise<Usuario[]>{

        const res = this.createQueryBuilder('TBL_SEG_USUARIO')
            .where("TBL_SEG_USUARIO.TXT_LOGIN = :TXT_LOGIN", {TXT_LOGIN})
            .getMany()
        
        return res
    }

    public static async updateUsuario(usuario:Usuario){
        try {
            await this.createQueryBuilder()
                .update(Usuario)
                .set({
                    TXT_SENHA: usuario.TXT_SENHA,
                    TXT_NOME: usuario.TXT_NOME,
                    TXT_EMAIL: usuario.TXT_EMAIL,
                    COD_CARGO: usuario.COD_CARGO,
                    DT_CADASTRO: usuario.DT_CADASTRO,
                    TXT_CERTIFICADO: usuario.TXT_CERTIFICADO,
                    COD_EMPRESA: usuario.COD_EMPRESA,
                    COD_ALTERAR_SENHA: usuario.COD_ALTERAR_SENHA,
                    //DT_SENHA: usuario.DT_SENHA,
                    COD_SENHA_INCORRETA: usuario.COD_SENHA_INCORRETA,
                    COD_ATIVO: usuario.COD_ATIVO,
                    COD_USUARIO_CIVICO: usuario.COD_USUARIO_CIVICO,
                    TXT_LOGIN_CIVICO: usuario.TXT_LOGIN_CIVICO,
                    COD_INTERESSADO: usuario.COD_INTERESSADO
                })
                .where("COD_USUARIO = :COD_USUARIO", { COD_USUARIO: usuario.COD_USUARIO })
                .execute();
            console.log(usuario);
        } catch (error) {
            console.log(error);
        }
    }

    public static deleteUsuario(PCOD_USUARIO:number){
        return this.createQueryBuilder()
                   .delete()
                   .where("COD_USUARIO = :COD_USUARIO", { COD_USUARIO: PCOD_USUARIO })
                   .execute()
    }
}

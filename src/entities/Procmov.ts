import { Column, Entity } from "typeorm";

@Entity("PROCMOV")
export class Procmov {
  @Column("number", {
    name: "NUMREMSAIDA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  numremsaida: number | null;

  @Column("number", {
    name: "NUMREMENTRADA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  numrementrada: number | null;

  @Column("number", {
    name: "NUMPROCMOV",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  numprocmov: number | null;

  @Column("varchar2", { name: "NUMDOCTOSAIDA", nullable: true, length: 240 })
  numdoctosaida: string | null;

  @Column("varchar2", { name: "NUMDOCTOENTRADA", nullable: true, length: 80 })
  numdoctoentrada: string | null;

  @Column("varchar2", { name: "NOMFISICO", nullable: true, length: 800 })
  nomfisico: string | null;

  @Column("varchar2", { name: "NOMDESTINATARIO", nullable: true, length: 800 })
  nomdestinatario: string | null;

  @Column("number", {
    name: "IDUNIDADE",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idunidade: number | null;

  @Column("number", {
    name: "IDTRAMITESAIDA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idtramitesaida: number | null;

  @Column("number", {
    name: "IDTRAMITEENTRADA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idtramiteentrada: number | null;

  @Column("number", {
    name: "IDRESPONSAVEL",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idresponsavel: number | null;

  @Column("number", { name: "IDPROCMOV", precision: 10, scale: 0 })
  idprocmov: number;

  @Column("number", { name: "IDPROCESSO", precision: 10, scale: 0 })
  idprocesso: number;

  @Column("number", {
    name: "IDPESSOAQRECEBEU",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idpessoaqrecebeu: number | null;

  @Column("number", {
    name: "IDPESSOAQCANCELOU",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idpessoaqcancelou: number | null;

  @Column("number", { name: "IDLOCALPROCEDE", precision: 10, scale: 0 })
  idlocalprocede: number;

  @Column("number", {
    name: "IDLOCALORIGEM",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idlocalorigem: number | null;

  @Column("number", {
    name: "IDLOCALDESTINO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idlocaldestino: number | null;

  @Column("number", {
    name: "IDFLUXO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idfluxo: number | null;

  @Column("number", {
    name: "IDDOCTOSAIDA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  iddoctosaida: number | null;

  @Column("number", {
    name: "IDDOCTOENTRADA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  iddoctoentrada: number | null;

  @Column("number", {
    name: "IDDESTINATARIO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  iddestinatario: number | null;

  @Column("number", {
    name: "IDAUXMIGRACAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idauxmigracao: number | null;

  @Column("char", { name: "FLAEMITE", nullable: true, length: 4 })
  flaemite: string | null;

  @Column("number", {
    name: "FLACANCELADO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  flacancelado: number | null;

  @Column("varchar2", { name: "DESOBS", nullable: true, length: 4000 })
  desobs: string | null;

  @Column("date", { name: "DATSAIDA", nullable: true })
  datsaida: Date | null;

  @Column("date", { name: "DATENTRADA" })
  datentrada: Date;

  @Column("date", { name: "DATATUALIZA" })
  datatualiza: Date;

  @Column("number", { name: "CODPESSOA", precision: 10, scale: 0 })
  codpessoa: number;

  @Column("char", { name: "ANOREMSAIDA", nullable: true, length: 16 })
  anoremsaida: string | null;

  @Column("char", { name: "ANOREMENTRADA", nullable: true, length: 16 })
  anorementrada: string | null;
}

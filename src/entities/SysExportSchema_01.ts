import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269876", ["processOrder", "duplicate"], { unique: true })
@Index(
  "SYS_MTABLE_00001DFFD_IND_1",
  ["objectSchema", "originalObjectName", "objectType"],
  {}
)
@Index(
  "SYS_MTABLE_00001DFFD_IND_2",
  [
    "objectSchema",
    "objectName",
    "objectType",
    "partitionName",
    "subpartitionName",
  ],
  {}
)
@Index("SYS_MTABLE_00001DFFD_IND_3", ["baseProcessOrder"], {})
@Index(
  "SYS_MTABLE_00001DFFD_IND_4",
  ["originalObjectSchema", "originalObjectName", "partitionName"],
  {}
)
@Index("SYS_MTABLE_00001DFFD_IND_5", ["seed"], {})
@Entity("SYS_EXPORT_SCHEMA_01")
export class SysExportSchema_01 {
  @Column("number", { name: "XML_PROCESS_ORDER", nullable: true })
  xmlProcessOrder: number | null;

  @Column("clob", { name: "XML_CLOB", nullable: true })
  xmlClob: string | null;

  @Column("varchar2", { name: "WORK_ITEM", nullable: true, length: 21 })
  workItem: string | null;

  @Column("number", { name: "VERSION", nullable: true })
  version: number | null;

  @Column("varchar2", { name: "VALUE_T", nullable: true, length: 4000 })
  valueT: string | null;

  @Column("number", { name: "VALUE_N", nullable: true })
  valueN: number | null;

  @Column("varchar2", { name: "USER_NAME", nullable: true, length: 128 })
  userName: string | null;

  @Column("varchar2", { name: "USER_FILE_NAME", nullable: true, length: 4000 })
  userFileName: string | null;

  @Column("varchar2", { name: "USER_DIRECTORY", nullable: true, length: 4000 })
  userDirectory: string | null;

  @Column("number", { name: "UNLOAD_METHOD", nullable: true })
  unloadMethod: number | null;

  @Column("number", { name: "TRIGFLAG", nullable: true })
  trigflag: number | null;

  @Column("number", { name: "TOTAL_BYTES", nullable: true })
  totalBytes: number | null;

  @Column("varchar2", { name: "TIMEZONE", nullable: true, length: 64 })
  timezone: string | null;

  @Column("varchar2", { name: "TEMPLATE_TABLE", nullable: true, length: 128 })
  templateTable: string | null;

  @Column("raw", { name: "TDE_REWRAPPED_KEY", nullable: true, length: 2000 })
  tdeRewrappedKey: Buffer | null;

  @Column("clob", { name: "TARGET_XML_CLOB", nullable: true })
  targetXmlClob: string | null;

  @Column("varchar2", {
    name: "SUBPARTITION_NAME",
    nullable: true,
    length: 128,
  })
  subpartitionName: string | null;

  @Column("varchar2", { name: "STATUS_QUEUE", nullable: true, length: 128 })
  statusQueue: string | null;

  @Column("varchar2", { name: "STATE", nullable: true, length: 12 })
  state: string | null;

  @Column("date", { name: "START_TIME", nullable: true })
  startTime: Date | null;

  @Column("varchar2", { name: "SRC_COMPAT", nullable: true, length: 60 })
  srcCompat: string | null;

  @Column("number", { name: "SIZE_ESTIMATE", nullable: true })
  sizeEstimate: number | null;

  @Column("varchar2", { name: "SERVICE_NAME", nullable: true, length: 64 })
  serviceName: string | null;

  @Column("number", { name: "SEED", nullable: true })
  seed: number | null;

  @Column("number", { name: "SCN", nullable: true })
  scn: number | null;

  @Column("varchar2", { name: "REMOTE_LINK", nullable: true, length: 128 })
  remoteLink: string | null;

  @Column("number", { name: "QUEUE_TABNUM", nullable: true })
  queueTabnum: number | null;

  @Column("varchar2", { name: "PROXY_VIEW", nullable: true, length: 128 })
  proxyView: string | null;

  @Column("varchar2", { name: "PROXY_SCHEMA", nullable: true, length: 128 })
  proxySchema: string | null;

  @Column("number", { name: "PROPERTY", nullable: true })
  property: number | null;

  @Column("number", { primary: true, name: "PROCESS_ORDER", nullable: true })
  processOrder: number | null;

  @Column("varchar2", { name: "PROCESS_NAME", nullable: true, length: 128 })
  processName: string | null;

  @Column("char", { name: "PROCESSING_STATUS", nullable: true, length: 1 })
  processingStatus: string | null;

  @Column("char", { name: "PROCESSING_STATE", nullable: true, length: 1 })
  processingState: string | null;

  @Column("varchar2", { name: "PLATFORM", nullable: true, length: 101 })
  platform: string | null;

  @Column("number", { name: "PHASE", nullable: true })
  phase: number | null;

  @Column("varchar2", { name: "PARTITION_NAME", nullable: true, length: 128 })
  partitionName: string | null;

  @Column("number", { name: "PARENT_PROCESS_ORDER", nullable: true })
  parentProcessOrder: number | null;

  @Column("varchar2", {
    name: "PARENT_OBJECT_SCHEMA",
    nullable: true,
    length: 128,
  })
  parentObjectSchema: string | null;

  @Column("varchar2", {
    name: "PARENT_OBJECT_NAME",
    nullable: true,
    length: 128,
  })
  parentObjectName: string | null;

  @Column("number", { name: "PARALLELIZATION", nullable: true })
  parallelization: number | null;

  @Column("number", { name: "PACKET_NUMBER", nullable: true })
  packetNumber: number | null;

  @Column("varchar2", {
    name: "ORIGINAL_OBJECT_SCHEMA",
    nullable: true,
    length: 128,
  })
  originalObjectSchema: string | null;

  @Column("varchar2", {
    name: "ORIGINAL_OBJECT_NAME",
    nullable: true,
    length: 128,
  })
  originalObjectName: string | null;

  @Column("varchar2", {
    name: "ORIG_BASE_OBJECT_SCHEMA",
    nullable: true,
    length: 128,
  })
  origBaseObjectSchema: string | null;

  @Column("varchar2", {
    name: "ORIG_BASE_OBJECT_NAME",
    nullable: true,
    length: 128,
  })
  origBaseObjectName: string | null;

  @Column("varchar2", { name: "OPTION_TAG", nullable: true, length: 128 })
  optionTag: string | null;

  @Column("varchar2", { name: "OPERATION", nullable: true, length: 8 })
  operation: string | null;

  @Column("varchar2", { name: "OLD_VALUE", nullable: true, length: 4000 })
  oldValue: string | null;

  @Column("number", { name: "OBJNUM", nullable: true })
  objnum: number | null;

  @Column("varchar2", { name: "OBJECT_TYPE_PATH", nullable: true, length: 200 })
  objectTypePath: string | null;

  @Column("varchar2", { name: "OBJECT_TYPE", nullable: true, length: 128 })
  objectType: string | null;

  @Column("varchar2", {
    name: "OBJECT_TABLESPACE",
    nullable: true,
    length: 128,
  })
  objectTablespace: string | null;

  @Column("varchar2", { name: "OBJECT_SCHEMA", nullable: true, length: 128 })
  objectSchema: string | null;

  @Column("number", { name: "OBJECT_ROW", nullable: true })
  objectRow: number | null;

  @Column("number", { name: "OBJECT_PATH_SEQNO", nullable: true })
  objectPathSeqno: number | null;

  @Column("number", { name: "OBJECT_NUMBER", nullable: true })
  objectNumber: number | null;

  @Column("varchar2", { name: "OBJECT_NAME", nullable: true, length: 200 })
  objectName: string | null;

  @Column("varchar2", {
    name: "OBJECT_LONG_NAME",
    nullable: true,
    length: 4000,
  })
  objectLongName: string | null;

  @Column("varchar2", { name: "OBJECT_INT_OID", nullable: true, length: 130 })
  objectIntOid: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 128 })
  name: string | null;

  @Column("number", { name: "METADATA_IO", nullable: true })
  metadataIo: number | null;

  @Column("number", { name: "METADATA_BUFFER_SIZE", nullable: true })
  metadataBufferSize: number | null;

  @Column("number", { name: "LOAD_METHOD", nullable: true })
  loadMethod: number | null;

  @Column("date", { name: "LAST_UPDATE", nullable: true })
  lastUpdate: Date | null;

  @Column("number", { name: "LAST_FILE", nullable: true })
  lastFile: number | null;

  @Column("varchar2", { name: "JOB_VERSION", nullable: true, length: 60 })
  jobVersion: string | null;

  @Column("varchar2", { name: "JOB_MODE", nullable: true, length: 21 })
  jobMode: string | null;

  @Column("number", { name: "IS_DEFAULT", nullable: true })
  isDefault: number | null;

  @Column("number", { name: "INSTANCE_ID", nullable: true })
  instanceId: number | null;

  @Column("varchar2", { name: "INSTANCE", nullable: true, length: 60 })
  instance: string | null;

  @Column("char", { name: "IN_PROGRESS", nullable: true, length: 1 })
  inProgress: string | null;

  @Column("raw", { name: "GUID", nullable: true, length: 16 })
  guid: Buffer | null;

  @Column("number", { name: "GRANULES", nullable: true })
  granules: number | null;

  @Column("varchar2", { name: "GRANTOR", nullable: true, length: 128 })
  grantor: string | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "FILE_TYPE", nullable: true })
  fileType: number | null;

  @Column("varchar2", { name: "FILE_NAME", nullable: true, length: 4000 })
  fileName: string | null;

  @Column("number", { name: "FILE_MAX_SIZE", nullable: true })
  fileMaxSize: number | null;

  @Column("number", { name: "EXTEND_SIZE", nullable: true })
  extendSize: number | null;

  @Column("number", { name: "ERROR_COUNT", nullable: true })
  errorCount: number | null;

  @Column("number", { name: "ELAPSED_TIME", nullable: true })
  elapsedTime: number | null;

  @Column("number", { primary: true, name: "DUPLICATE", nullable: true })
  duplicate: number | null;

  @Column("number", { name: "DUMP_POSITION", nullable: true })
  dumpPosition: number | null;

  @Column("number", { name: "DUMP_ORIG_LENGTH", nullable: true })
  dumpOrigLength: number | null;

  @Column("number", { name: "DUMP_LENGTH", nullable: true })
  dumpLength: number | null;

  @Column("number", { name: "DUMP_FILEID", nullable: true })
  dumpFileid: number | null;

  @Column("number", { name: "DUMP_ALLOCATION", nullable: true })
  dumpAllocation: number | null;

  @Column("number", { name: "DOMAIN_PROCESS_ORDER", nullable: true })
  domainProcessOrder: number | null;

  @Column("number", { name: "DEGREE", nullable: true })
  degree: number | null;

  @Column("varchar2", { name: "DB_VERSION", nullable: true, length: 60 })
  dbVersion: string | null;

  @Column("number", { name: "DATAOBJ_NUM", nullable: true })
  dataobjNum: number | null;

  @Column("number", { name: "DATA_IO", nullable: true })
  dataIo: number | null;

  @Column("number", { name: "DATA_BUFFER_SIZE", nullable: true })
  dataBufferSize: number | null;

  @Column("number", { name: "CUMULATIVE_TIME", nullable: true })
  cumulativeTime: number | null;

  @Column("date", { name: "CREATION_TIME", nullable: true })
  creationTime: Date | null;

  @Column("number", { name: "CREATION_LEVEL", nullable: true })
  creationLevel: number | null;

  @Column("varchar2", { name: "CONTROL_QUEUE", nullable: true, length: 128 })
  controlQueue: string | null;

  @Column("date", { name: "COMPLETION_TIME", nullable: true })
  completionTime: Date | null;

  @Column("number", { name: "COMPLETED_ROWS", nullable: true })
  completedRows: number | null;

  @Column("number", { name: "COMPLETED_BYTES", nullable: true })
  completedBytes: number | null;

  @Column("number", { name: "CLUSTER_OK", nullable: true })
  clusterOk: number | null;

  @Column("number", { name: "BLOCK_SIZE", nullable: true })
  blockSize: number | null;

  @Column("number", { name: "BASE_PROCESS_ORDER", nullable: true })
  baseProcessOrder: number | null;

  @Column("varchar2", { name: "BASE_OBJECT_TYPE", nullable: true, length: 128 })
  baseObjectType: string | null;

  @Column("varchar2", {
    name: "BASE_OBJECT_SCHEMA",
    nullable: true,
    length: 128,
  })
  baseObjectSchema: string | null;

  @Column("varchar2", { name: "BASE_OBJECT_NAME", nullable: true, length: 128 })
  baseObjectName: string | null;

  @Column("number", { name: "ANCESTOR_PROCESS_ORDER", nullable: true })
  ancestorProcessOrder: number | null;

  @Column("varchar2", {
    name: "ANCESTOR_OBJECT_TYPE",
    nullable: true,
    length: 128,
  })
  ancestorObjectType: string | null;

  @Column("varchar2", {
    name: "ANCESTOR_OBJECT_SCHEMA",
    nullable: true,
    length: 128,
  })
  ancestorObjectSchema: string | null;

  @Column("varchar2", {
    name: "ANCESTOR_OBJECT_NAME",
    nullable: true,
    length: 128,
  })
  ancestorObjectName: string | null;

  @Column("varchar2", { name: "ACCESS_METHOD", nullable: true, length: 16 })
  accessMethod: string | null;

  @Column("number", { name: "ABORT_STEP", nullable: true })
  abortStep: number | null;
}

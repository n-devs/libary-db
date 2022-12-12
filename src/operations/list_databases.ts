import { Document } from "bson";


export interface ListDatabasesResult {
      databases: ({ name: string; sizeOnDisk?: number; empty?: boolean } & Document)[];
      totalSize?: number;
      totalSizeMb?: number;
      ok: 1 | 0;
}
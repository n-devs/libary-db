import { Db } from "./db";
import { ListDatabasesResult } from "./operations/list_databases";


export class Admin {
      db: Db;

      constructor(db: Db) {
            this.db = db;
      }

      listDatabases(): Promise<ListDatabasesResult> {
            return new Promise((resolve, reject): void => {
                  this.db.client.socket.on("show dbs", (data: ListDatabasesResult) => {
                        resolve(data)
                  });
            })

      }
}
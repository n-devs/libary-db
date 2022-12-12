import { Db } from "./db";
import { Find } from "./cursor/find_cursor";


export class Collection {
      db: Db;

      constructor(db: Db, name?: string) {
            this.db = db;

            this.db.client.socket.emit("use collection", name);
      }

      find(filter?: any): Find {

            const find = new Find(this, filter)

            return find

      }


}
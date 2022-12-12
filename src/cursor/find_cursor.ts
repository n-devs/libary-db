import { Collection } from "src/collection";


export class Find {
      collection!: Collection;
      filter: any;

      constructor(collection: Collection, filter: any) {
            this.collection = collection;
            this.filter = filter;

            if (!this.filter) {
                  this.collection.db.client.socket.on("show tables", (res: any) => {
                        console.log('show tables =>', res);

                  });
            } else {
                  this.collection.db.client.socket.emit("find table", filter);
            }
      }
}
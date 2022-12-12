import { Admin } from "./admin";
import { Client } from "./db_client";
import { Collection } from "./collection";



export class Db {
      client: Client;
      // databaseName: string;
      // name: string;
      constructor(client: Client, databaseName?: string) {
            this.client = client;
            
            this.client.socket.emit("use db", databaseName)
      }

      collection(name?: string): Collection {

            const collection = new Collection(this, name)
            return collection
      }

      admin(): Admin {
            const admin = new Admin(this);

            return admin
      }

      listCollections() {
            this.client.socket.on("show collections", (data: any) => {
                  console.log('show collections =>', data);

            });
      }

}
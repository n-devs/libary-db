import { io } from "socket.io-client";
import { Db } from "./db";
import { Callback } from "./utils";


export interface IDBOpitons {
      useNewUrlParser?: boolean,
      useUnifiedTopology?: boolean
}

export interface IDBConfig {
      url: string,
      options?: IDBOpitons
}

export class Client {
      url: string;
      socket: any;

      constructor(url: string, db: IDBConfig) {
            this.url = url

            this.socket = io(url, {
                  auth: {
                        url: db.url,
                        options: db.options
                  }
            })

      }

      connect(): Promise<this>;
      connect(callback: Callback<this>): void;
      connect(callback?: Callback<this>): Promise<this> {
            return new Promise((resolve, reject) => {
                  this.socket.on("connect", () => {
                        resolve(this)
                        if (callback) {
                              callback(this)
                        }
                  })

            })

      }

      close() {
            this.socket.on("disconnect", () => {
                  console.log(`disconnect`);
            });
      }

      db(dbName?: string): Db {
            const db = new Db(this, dbName)
            return db
      }
}
import { io } from "socket.io-client";
import { Db } from "./db";
var Client = /** @class */ (function () {
    function Client(url, db) {
        this.url = url;
        this.socket = io(url, {
            auth: {
                url: db.url,
                options: db.options
            }
        });
    }
    Client.prototype.connect = function (callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.socket.on("connect", function () {
                resolve(_this);
                if (callback) {
                    callback(_this);
                }
            });
        });
    };
    Client.prototype.close = function () {
        this.socket.on("disconnect", function () {
            console.log("disconnect");
        });
    };
    Client.prototype.db = function (dbName) {
        var db = new Db(this, dbName);
        return db;
    };
    return Client;
}());
export { Client };
//# sourceMappingURL=db_client.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var socket_io_client_1 = require("socket.io-client");
var db_1 = require("./db");
var Client = /** @class */ (function () {
    function Client(url, db) {
        this.url = url;
        this.socket = (0, socket_io_client_1.io)(url, {
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
        var db = new db_1.Db(this, dbName);
        return db;
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=db_client.js.map
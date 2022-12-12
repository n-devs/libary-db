"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
var admin_1 = require("./admin");
var collection_1 = require("./collection");
var Db = /** @class */ (function () {
    // databaseName: string;
    // name: string;
    function Db(client, databaseName) {
        this.client = client;
        this.client.socket.emit("use db", databaseName);
    }
    Db.prototype.collection = function (name) {
        var collection = new collection_1.Collection(this, name);
        return collection;
    };
    Db.prototype.admin = function () {
        var admin = new admin_1.Admin(this);
        return admin;
    };
    Db.prototype.listCollections = function () {
        this.client.socket.on("show collections", function (data) {
            console.log('show collections =>', data);
        });
    };
    return Db;
}());
exports.Db = Db;
//# sourceMappingURL=db.js.map
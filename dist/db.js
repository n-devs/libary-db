import { Admin } from "./admin";
import { Collection } from "./collection";
var Db = /** @class */ (function () {
    // databaseName: string;
    // name: string;
    function Db(client, databaseName) {
        this.client = client;
        this.client.socket.emit("use db", databaseName);
    }
    Db.prototype.collection = function (name) {
        var collection = new Collection(this, name);
        return collection;
    };
    Db.prototype.admin = function () {
        var admin = new Admin(this);
        return admin;
    };
    Db.prototype.listCollections = function () {
        this.client.socket.on("show collections", function (data) {
            console.log('show collections =>', data);
        });
    };
    return Db;
}());
export { Db };
//# sourceMappingURL=db.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Find = void 0;
var Find = /** @class */ (function () {
    function Find(collection, filter) {
        this.collection = collection;
        this.filter = filter;
        if (!this.filter) {
            this.collection.db.client.socket.on("show tables", function (res) {
                console.log('show tables =>', res);
            });
        }
        else {
            this.collection.db.client.socket.emit("find table", filter);
        }
    }
    return Find;
}());
exports.Find = Find;
//# sourceMappingURL=find_cursor.js.map
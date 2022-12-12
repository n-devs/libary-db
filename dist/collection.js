"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var find_cursor_1 = require("./cursor/find_cursor");
var Collection = /** @class */ (function () {
    function Collection(db, name) {
        this.db = db;
        this.db.client.socket.emit("use collection", name);
    }
    Collection.prototype.find = function (filter) {
        var find = new find_cursor_1.Find(this, filter);
        return find;
    };
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map
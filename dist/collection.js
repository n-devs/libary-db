import { Find } from "./cursor/find_cursor";
var Collection = /** @class */ (function () {
    function Collection(db, name) {
        this.db = db;
        this.db.client.socket.emit("use collection", name);
    }
    Collection.prototype.find = function (filter) {
        var find = new Find(this, filter);
        return find;
    };
    return Collection;
}());
export { Collection };
//# sourceMappingURL=collection.js.map
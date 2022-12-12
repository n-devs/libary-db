"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
var Admin = /** @class */ (function () {
    function Admin(db) {
        this.db = db;
    }
    Admin.prototype.listDatabases = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.client.socket.on("show dbs", function (data) {
                resolve(data);
            });
        });
    };
    return Admin;
}());
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map
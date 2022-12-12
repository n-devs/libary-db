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
export { Admin };
//# sourceMappingURL=admin.js.map
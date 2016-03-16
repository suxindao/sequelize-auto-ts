'depends typescript-client-server-compat.js';
"use strict";
var TableNames = (function () {
    function TableNames() {
        this.roles = 'roles';
        this.users = 'users';
    }
    return TableNames;
}());
exports.TableNames = TableNames;
exports.tableNames = new TableNames();
var RolesFields = (function () {
    function RolesFields() {
        this.roleid = 'roleid';
        this.rolename = 'rolename';
    }
    return RolesFields;
}());
exports.RolesFields = RolesFields;
exports.rolesFields = new RolesFields();
var UsersFields = (function () {
    function UsersFields() {
        this.userid = 'userid';
        this.roleid = 'roleid';
        this.username = 'username';
        this.role = 'role';
    }
    return UsersFields;
}());
exports.UsersFields = UsersFields;
exports.usersFields = new UsersFields();
var CalculatedFields = (function () {
    function CalculatedFields() {
    }
    return CalculatedFields;
}());
exports.CalculatedFields = CalculatedFields;
exports.calculatedFields = new CalculatedFields();
var References = (function () {
    function References() {
        this.roleid = { tableName: 'roles', primaryKey: 'roleId', foreignKey: 'roleid', as: undefined };
        this.userid = { tableName: 'users', primaryKey: 'userid', foreignKey: 'userid', as: undefined };
    }
    return References;
}());
exports.References = References;
exports.references = new References();

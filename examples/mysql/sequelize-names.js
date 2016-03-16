'depends typescript-client-server-compat.js';
"use strict";
var TableNames = (function () {
    function TableNames() {
        this.Roles = 'Roles';
        this.Users = 'Users';
    }
    return TableNames;
}());
exports.TableNames = TableNames;
exports.tableNames = new TableNames();
var RolesFields = (function () {
    function RolesFields() {
        this.RoleID = 'RoleID';
        this.RoleName = 'RoleName';
    }
    return RolesFields;
}());
exports.RolesFields = RolesFields;
exports.rolesFields = new RolesFields();
var UsersFields = (function () {
    function UsersFields() {
        this.UserID = 'UserID';
        this.RoleID = 'RoleID';
        this.UserName = 'UserName';
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
        this.RoleID = { tableName: 'Roles', primaryKey: 'roleId', foreignKey: 'RoleID', as: undefined };
        this.UserID = { tableName: 'Users', primaryKey: 'UserID', foreignKey: 'UserID', as: undefined };
    }
    return References;
}());
exports.References = References;
exports.references = new References();

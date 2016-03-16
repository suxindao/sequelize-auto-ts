'depends typescript-client-server-compat.js';
"use strict";
var TableNames = (function () {
    function TableNames() {
        this.__tableNameModel__ = '__tableNameModel__';
    }
    return TableNames;
}());
exports.TableNames = TableNames;
exports.tableNames = new TableNames();
var __tableNamePascal__Fields = (function () {
    function __tableNamePascal__Fields() {
        this.__fieldName__ = '__fieldName__';
    }
    return __tableNamePascal__Fields;
}());
exports.__tableNamePascal__Fields = __tableNamePascal__Fields;
exports.__tableNameCamel__Fields = new __tableNamePascal__Fields();
var CalculatedFields = (function () {
    function CalculatedFields() {
        this.__fieldName__ = '__fieldName__';
    }
    return CalculatedFields;
}());
exports.CalculatedFields = CalculatedFields;
exports.calculatedFields = new CalculatedFields();
var __associationNameQuoted__;
var References = (function () {
    function References() {
        this.__foreignKey__ = { tableName: '__primaryTableNameModel__', primaryKey: '__primaryKey__', foreignKey: '__foreignKey__', as: __associationNameQuoted__ };
    }
    return References;
}());
exports.References = References;
exports.references = new References();

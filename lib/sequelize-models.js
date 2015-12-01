var Sequelize = require('sequelize');
exports.initialized = false;
var __defineFieldType__;
var __primaryTableModelName__;
var __foreignTableModelName__;
var __firstTableModelName__;
var __secondTableModelName__;
var __associationNameQuoted__;
function initialize(database, username, password, options) {
    if (exports.initialized) {
        return;
    }
    exports.SEQUELIZE = new Sequelize(database, username, password, options);
    exports.__modelTypeName__ = exports.SEQUELIZE.define('__tableNameSingular__', {
        '__fieldName__': __defineFieldType__
    }, {
        classMethods: {
            __getterName__: function (__tableNameSingularCamel__) {
                var where = {};
                var id = parseInt(__tableNameSingularCamel__);
                if (isNaN(id)) {
                    if (__tableNameSingularCamel__['__fieldName__'] !== undefined) {
                        where['__fieldName__'] = __tableNameSingularCamel__['__fieldName__'];
                    }
                }
                else {
                    where['__idFieldName__'] = id;
                }
                return exports.__modelTypeName__.find({ where: where });
            }
        }
    });
    __primaryTableModelName__.hasMany(__foreignTableModelName__, { foreignKey: '__foreignKey__' });
    __foreignTableModelName__.belongsTo(__primaryTableModelName__, { as: __associationNameQuoted__, foreignKey: '__foreignKey__' });
    __firstTableModelName__.belongsToMany(__secondTableModelName__, { through: '__xrefTableName__' });
    __secondTableModelName__.belongsToMany(__firstTableModelName__, { through: '__xrefTableName__' });
    return exports;
}
exports.initialize = initialize;

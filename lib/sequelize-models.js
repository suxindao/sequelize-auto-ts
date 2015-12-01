var Sequelize = require('sequelize');
exports.initialized = false;
var __defineFieldType__;
var __primaryTableName__;
var __foreignTableName__;
var __firstTableName__;
var __secondTableName__;
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
            get__tableNameSingular__: function (__tableNameSingularCamel__) {
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
    __primaryTableName__.hasMany(__foreignTableName__, { foreignKey: '__foreignKey__' });
    __foreignTableName__.belongsTo(__primaryTableName__, { as: __associationNameQuoted__, foreignKey: '__foreignKey__' });
    __firstTableName__.belongsToMany(__secondTableName__, { through: '__xrefTableName__' });
    __secondTableName__.belongsToMany(__firstTableName__, { through: '__xrefTableName__' });
    return exports;
}
exports.initialize = initialize;

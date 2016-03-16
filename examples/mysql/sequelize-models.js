"use strict";
var Sequelize = require('sequelize');
exports.initialized = false;
function initialize(database, username, password, options) {
    if (exports.initialized) {
        return;
    }
    exports.SEQUELIZE = new Sequelize(database, username, password, options);
    exports.RolesModel = exports.SEQUELIZE.define('Role', {
        'RoleID': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'RoleName': { type: Sequelize.STRING, allowNull: false }
    }, {
        classMethods: {
            GetRoles: function (role) {
                var where = {};
                var id = parseInt(role);
                if (isNaN(id)) {
                    if (role['RoleID'] !== undefined) {
                        where['RoleID'] = role['RoleID'];
                    }
                    if (role['RoleName'] !== undefined) {
                        where['RoleName'] = role['RoleName'];
                    }
                }
                else {
                    where['RoleID'] = id;
                }
                return exports.RolesModel.find({ where: where });
            }
        }
    });
    exports.UsersModel = exports.SEQUELIZE.define('User', {
        'UserID': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'RoleID': { type: Sequelize.INTEGER, allowNull: false },
        'UserName': { type: Sequelize.STRING, allowNull: false }
    }, {
        classMethods: {
            GetUsers: function (user) {
                var where = {};
                var id = parseInt(user);
                if (isNaN(id)) {
                    if (user['UserID'] !== undefined) {
                        where['UserID'] = user['UserID'];
                    }
                    if (user['RoleID'] !== undefined) {
                        where['RoleID'] = user['RoleID'];
                    }
                    if (user['UserName'] !== undefined) {
                        where['UserName'] = user['UserName'];
                    }
                }
                else {
                    where['UserID'] = id;
                }
                return exports.UsersModel.find({ where: where });
            }
        }
    });
    exports.RolesModel.hasMany(exports.UsersModel, { foreignKey: 'RoleID' });
    exports.UsersModel.belongsTo(exports.RolesModel, { as: undefined, foreignKey: 'RoleID' });
    return exports;
}
exports.initialize = initialize;

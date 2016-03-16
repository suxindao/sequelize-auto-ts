"use strict";
var Sequelize = require('sequelize');
exports.initialized = false;
function initialize(database, username, password, options) {
    if (exports.initialized) {
        return;
    }
    exports.SEQUELIZE = new Sequelize(database, username, password, options);
    exports.RolesModel = exports.SEQUELIZE.define('role', {
        'roleid': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'rolename': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined }
    }, {
        classMethods: {
            GetRoles: function (role) {
                var where = {};
                var id = parseInt(role);
                if (isNaN(id)) {
                    if (role['roleid'] !== undefined) {
                        where['roleid'] = role['roleid'];
                    }
                    if (role['rolename'] !== undefined) {
                        where['rolename'] = role['rolename'];
                    }
                }
                else {
                    where['roleid'] = id;
                }
                return exports.RolesModel.find({ where: where });
            }
        }
    });
    exports.UsersModel = exports.SEQUELIZE.define('user', {
        'userid': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'roleid': { type: Sequelize.INTEGER, allowNull: false, defaultValue: undefined },
        'username': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined }
    }, {
        classMethods: {
            GetUsers: function (user) {
                var where = {};
                var id = parseInt(user);
                if (isNaN(id)) {
                    if (user['userid'] !== undefined) {
                        where['userid'] = user['userid'];
                    }
                    if (user['roleid'] !== undefined) {
                        where['roleid'] = user['roleid'];
                    }
                    if (user['username'] !== undefined) {
                        where['username'] = user['username'];
                    }
                }
                else {
                    where['userid'] = id;
                }
                return exports.UsersModel.find({ where: where });
            }
        }
    });
    exports.RolesModel.hasMany(exports.UsersModel, { foreignKey: 'roleid' });
    exports.UsersModel.belongsTo(exports.RolesModel, { as: undefined, foreignKey: 'roleid' });
    return exports;
}
exports.initialize = initialize;

import types = require('./sequelize-types');
import models = require('./sequelize-models');

models.initialize('test001', 'dbuser', 'password', {
    dialect : 'postgres',
    define : {
        timestamps : false
    }
});

let findall = models.UsersModel.findAll();

findall
    .catch((error : any) => {
        throw error;
    })
    .done((users : any) => {
        console.log('Returned ' + users.length + ' users.');

        users.forEach((user : types.UsersPojo) => {
            console.log(user.username + ' (' + user.userid + ')');
        })
    });

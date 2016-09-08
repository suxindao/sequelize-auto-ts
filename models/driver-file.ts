import types = require('./sequelize-types');
import models = require('./sequelize-models');

models.initialize('magic-platform', 'root', '123456', {
  dialect: 'mysql',
  port: 33306,
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

let findall = models.AdminModel.findAll();

findall
  .catch((error: any) => {
    throw error;
  })
  .done((users: any) => {
    console.log('Returned ' + users.length + ' users.');

    users.forEach((user: types.AdminPojo) => {
      console.log(user.id + ' (' + user.name + ')');
    })
  });

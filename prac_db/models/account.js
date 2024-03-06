//here we are actually creating our account model. we are setting up how the database is 
// going to hold our table, and what kind of data we can start storing inside of it
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connections');

class Account extends Model {
    //check password 
}

Account.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          email: {
            type: DataTypes.STRING
          },
          passowrd: {
            type: DataTypes.STRING
          }
    },  {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'account'
      }
);

module.exports = Account;
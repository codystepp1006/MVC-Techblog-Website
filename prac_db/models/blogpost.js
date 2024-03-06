const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connections');

class BlogPost extends Model {
    //check password 
}

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          blog_data: {
            type: DataTypes.STRING
          },
          account_id: {
            type: DataTypes.INTEGER
          }
          
    },  {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost'
      }
);

module.exports = BlogPost;
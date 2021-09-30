const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: 'false'
        }
      },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'post',
    underscored: true,
  }
);

module.exports = Post;
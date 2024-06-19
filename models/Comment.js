const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true, // Ensure the body is not empty
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure user_id is provided
      references: {
        model: 'user',
        key: 'id',
      },
      onDelete: 'CASCADE', // Optionally handle deletion of user
    },
  },
  {
    sequelize,
    timestamps: true, // Adds createdAt and updatedAt fields
    freezeTableName: true, // Prevents automatic pluralization of table name
    underscored: true, // Uses snake_case for automatically added attributes
    modelName: 'comment',
  }
);

module.exports = Comment;

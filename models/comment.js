const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}


Comment.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    body:  {type: DataTypes.STRING, allowNull: false}







}, {sequelize, modelName:"Comment"}
);

module.exports = Comment;

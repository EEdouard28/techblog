const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}


Blog.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: false},
    body:  {type: DataTypes.STRING, allowNull: false}







}, {sequelize, modelName:"blog"}
);

module.exports = Blog;

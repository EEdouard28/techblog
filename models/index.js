const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment');

User.hasMany(Blog)
Blog.hasMany(Comment)

module.exports = { User, Blog, Comment };

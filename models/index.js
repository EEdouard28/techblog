const user = require('./user');
const blog = require('./blog');
const comment = require('./comment');

user.hasMany(blog)
blog.hasMany(comment)

module.exports = { user, blog, comment };

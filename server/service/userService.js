const userData = require('../data/userData');

exports.getUsers = function() {
    return userData.getUsers();
};

exports.saveUser = function(user){
    return userData.saveUser(user);
};

exports.deleteUser = function(id){
    return userData.deleteUser(id);
};

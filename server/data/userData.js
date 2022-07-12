const database = require('../infra/database');

exports.getUsers = function(){
    return database.query('select * from carcatech.user');
};

exports.saveUser = function(user){
    return database.one('insert into carcatech.user (name, email, cpf, password) values ($1, $2, $3, $4) returning *',
    [user.name, user.email, user.cpf, user.password]);
};

exports.deleteUser = function(id){
    return database.none('delete from carcatech.user where id = $1', [id]);
};
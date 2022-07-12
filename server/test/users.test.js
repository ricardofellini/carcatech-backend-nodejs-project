const crypto = require('crypto');
const axios = require('axios');
const userService = require('../service/userService');

const request = function(url, method, data){
    return axios({url, method, data});
};

const generate = function(){
    return crypto.randomBytes(2).toString('hex');
}


test('Should get users', async function(){

    const user1 = await userService.saveUser({name: generate(), email: generate(), cpf: generate(), password: generate()});
    const user2 = await userService.saveUser({name: generate(), email: generate(), cpf: generate(), password: generate()});

    const response = await request ('http://localhost:3000/user', 'get');
    const users = response.data;

    expect(users).toHaveLength(2);
    await userService.deleteUser(user1.id);
    await userService.deleteUser(user2.id);
    
});

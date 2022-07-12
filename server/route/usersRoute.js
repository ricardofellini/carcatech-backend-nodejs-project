const express =  require('express');
const router = express.Router();
const userService = require('../service/userService')


router.get('/user', async function(req, res){
    const users = await userService.getUsers();
    res.json(users);
});

router.post('/user', async function(req, res){
    const user = req.body;
    const newPost = await userService.saveUser(user);
    res.json(newPost); 
});



module.exports = router;
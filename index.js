const express = require('express');
const { route } = require('express/lib/application');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', function(req,res){

    res.sendFile(path.join(__dirname+'/home.html'));

});

router.get('/register', function(req,res){

    res.sendFile(path.join(__dirname+'/register.html'));

});

router.get('/sucess', function(req, res) {

    res.sendFile(path.join(__dirname+'/sucess.html'));

})

router.get('/error', function(req, res) {

    res.sendFile(path.join(__dirname+'/error.html'));

})

app.post('/confirm-register', function(req, res){
    prisma.contas.create({
    data: {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        plano: 'Padrão'
    },
    }).then(() => {
        res.redirect('/sucess');
    }).catch(error => {
        res.redirect('/error');
    })
})

app.use('/',router);
app.listen(process.env.port || 3030);
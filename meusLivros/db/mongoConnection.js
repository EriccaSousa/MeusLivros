//Usando o mongoose (Front-End para o mongoDB)
var mongoose = require('mongoose');

//Updating, evitando depreciações
mongoose.set('useFindAndModify', false);

//conexão com o BD local
var mongoDB_URI = 'mongodb://127.0.0.1:27017/meusLivros';
mongoose.connect(mongoDB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
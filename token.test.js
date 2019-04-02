const { TokenGenerate } = require('./token.js')

const template = `<html><header></header></html>`;

const onToken = {
    receiveInput: function(token) {
        console.log(token);
    }
}

const tokenGenerate = new TokenGenerate(onToken);

for (var c of template) {
    tokenGenerate.receiveInput(c);
}

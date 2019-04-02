const { TokenGenerate } = require('./token.js')
const { DomGenerate } = require('./dom.js');

const domGenerate = new DomGenerate();
const tokenGenerate = new TokenGenerate(domGenerate);

const template = `<html><header></header></html>`;
for (var c of template) {
    tokenGenerate.receiveInput(c);
}

// 输出dom
const dom = domGenerate.getOutput();

console.log(JSON.stringify(dom, null, 2));
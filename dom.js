const { StartTagToken, EndTagToken } = require('./token.js')
class HTMLDocument {
    constructor() {
        this.childNodes = [];
    }
}

class Node {}
class Element extends Node {
    constructor (token) {
        super(token);
        for (var key in token) {
            this[key] = token[key];
        }
        this.childNodes = [];
    }
}

function DomGenerate() {
    const stack = [new HTMLDocument()];



    this.receiveInput = function (token) {
        if (token instanceof StartTagToken) {
            const e = new Element(token);
            getTop(stack).childNodes.push(e);
            stack.push(e);
        }
        if (token instanceof EndTagToken) {
            stack.pop();
        }
    }
    function getTop(stack) {
        return stack[stack.length - 1];
    }
    // 最后输出dom
    this.getOutput = function () {
        return stack[0];
    }
}

module.exports = {
    DomGenerate,
}
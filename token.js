function TokenGenerate(_onToke) {

    let token = null;
    let state = data;

    this.receiveInput = function (chart) {
        state = state(chart)
    }

    // 初始化
    function data(chart) {
        switch(chart) {
            case '<':
                return tagOpen;
            case '/':
                return tagEnd;

        }
    }

    // 以下是各种状态机
    function tagOpen(c) {
        if (/[a-zA-z]/.test(c)) {
            token = new StartTagToken();
            token.name = c;
            return tagName;
        }
        if (c === '/') {
            return tagEnd;
        }
    }

    function tagEnd(c) {
        if (/[a-zA-z]/.test(c)) {
            token = new EndTagToken();
            token.name = c;
            return tagName;
        }
    }

    function tagName(c) {
        if (c === '>') {
            emitToken(token);
            return data;
        }
        if (/[a-zA-Z]/.test(c)) {
            token.name += c;
            return tagName;
        }
    }
    function emitToken(token) {
        _onToke.receiveInput(token);
    }
}

class StartTagToken {}
class EndTagToken {}

module.exports = {
    TokenGenerate,
};

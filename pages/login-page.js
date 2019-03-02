const utils = require('../utils/common-utils');

class LoginPage {

    constructor() {
        this.url = '/login';
        this.username = $('input[name="username"]');
        this.password = $('input[name="password"]');
        this.signIn = $('button');
    }

    login(username, password) {
        return utils.typeText(this.username, username)
            .then(() => utils.typeText(this.password, password))
            .then(() => this.signIn.click());

    }
}

module.exports = LoginPage;


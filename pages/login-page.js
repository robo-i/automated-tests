const utils = require('../utils/common-utils');

class LoginPage {
    constructor() {
        this.username = $('input[name="username"]');
        this.password = $('input[name="password"]');
        this.signIn = $('button');
    }

    login() {
        return utils.typeText(this.username, utils.readProps('username'))
            .then(() => utils.typeText(this.password, utils.readProps('password')))
            .then(() => this.signIn.click());
    }
}

module.exports = LoginPage;

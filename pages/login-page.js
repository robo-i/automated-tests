const fs = require('fs');
const propsReader = require('properties-reader');
const utils = require('../utils/common-utils');

class LoginPage {
    constructor() {
        this.url = '/login';
        this.username = $('input[name="username"]');
        this.password = $('input[name="password"]');
        this.signIn = $('button');
    }

    login() {
        return utils.typeText(this.username, utils.readProps('username'))
            .then(() => utils.typeText(this.password, utils.readProps('password')))
            .then(() => this.signIn.click());
    }

    _readProps(propName) {
        const properties = propsReader('login.properties');

        return properties.get(propName);
    }
}

module.exports = LoginPage;

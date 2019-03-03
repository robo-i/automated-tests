const unirest = require('unirest');
const utils = require('./common-utils');
let count = 0;

module.exports = {
    visitEngagement(uuid, engagementName) {
        const timestamp = new Date().getTime();
        const url = `https://t.svtrd.com/t-1233?i=${uuid}&e=true&et=${engagementName}&cb=${timestamp}`;

        return unirest.get(url);
    },

    async checkUsersVisit(uuid) {
        const res = await unirest.get(`https://api.relay42.com/v1/site-1233/profiles/42/segments?partnerId=${uuid}`)
            .auth({
                user: utils.readProps('username'),
                pass: utils.readProps('password')
            });

        /* due to some ongoing requests/DB transactions check visit request isn't always successful. In order to avoid
         * hardcoded wait the following retry logic was implemented */
        return res.body.length === 1 ? res.body :
            count < 5 ? this.checkUsersVisit(uuid) : new Error('No data returned after visit check');
    }
};

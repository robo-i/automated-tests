const unirest = require('unirest');

module.exports = {
    visitEngagement(uuid, engagementName) {
        const timestamp = new Date().getTime();
        const url = `https://t.svtrd.com/t-1233?i=${uuid}&e=true&et=${engagementName}&cb=${timestamp}`;

        return unirest.get(url);
    },

    checkUsersVisit(uuid) {
        return unirest.get(`https://api.relay42.com/v1/site-1233/profiles/42/segments?partnerId=${uuid}`)
            .auth({
                user: 'relay42test1@gmail.com',
                pass: 'relay42test'
            });
    }
};

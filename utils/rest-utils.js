const axios = require('axios');
const request = require('request');

function base64Encode(string) {
    return Buffer.from(string).toString('base64');
}

module.exports = {
    checkResponse(response) {
        return response.statusCode === 200;
    },

    makeRequest(requestConfig) {
        let self = this;

        return new Promise((resolve, reject) => {
            function callback(error, response) {
                if (!error && self.checkResponse(response)) {
                    console.log('SUCCESS: ', response.statusCode);
                    resolve(response);
                } else {
                    console.log('SUCCESS: ', response.statusCode);
                    reject(new Error(response.body));
                }
            }

            request(requestConfig, callback);
        });
    },

    visitEngagement(engagementName, uuid) {
        const timestamp = new Date().getTime();
        const url = `https://t.svtrd.com/t-1233?i=${uuid}&e=true&et=${engagementName}&cb=${timestamp}`;

        const requestConfig = {
            url: 'https://t.svtrd.com/t-1233',
            qs: {
                url: 'https://t.svtrd.com/t-1233', i: uuid, e: true, et: engagementName, cb: timestamp
            },
            method: 'GET'
        };

        return this.makeRequest(requestConfig);
    },

    checkUsersVisit(uuid) {
        const auth = base64Encode('relay42test1@gmail.com:relay42test');
        const url = `https://api.relay42.com/v1/site-1233/profiles/42/segments?partnerId=${uuid}`;

        const requestConfig = {
            url: url,
            headers: {
                Authorization: `Basic ${auth}`
            }
        };

        return this.makeRequest(requestConfig);
    }
};


const { assert } = require('chai');
const request = require('request');
const test_data = require('../testData/test_data.json');

let apiPage = function () {

    this.postApiData = async function () {
        var defer = new protractor.promise.Deferred();

        var payload = {
            "title": test_data.postAPI.title,
            "body": test_data.postAPI.body,
            "userId": test_data.postAPI.userId
        }

        var option = {

            url: test_data.postAPI.uri,
            method: test_data.postAPI.method,
            body: JSON.stringify(payload)
        }

        request(option, function (error, response, body) {

            if (!error && response.statusCode === 201 || !error && response.statusCode === 200) {
                body = JSON.parse(body);
                console.log(body);
                assert(body.id == test_data.postAPI.id);
                defer.fulfill();
            }
            defer.reject("error is: " + response.statusCode);
        });

        return defer.promise;
    }

    this.getApiData = async function () {
        const defer = new protractor.promise.Deferred();

        var option = {
            uri: test_data.getAPI.uri,
            method: test_data.getAPI.method
        }
        request(option, function (error, response, body) {
            if (!error && response.statusCode === test_data.getAPI.status) {
                body = JSON.parse(body);
                assert(body.userId == test_data.getAPI.userId);
                assert(body.id == test_data.getAPI.id);
                assert(body.title == test_data.getAPI.title);
                assert(body.completed == test_data.getAPI.completed);
                defer.fulfill();
            }

            else console.log("error is: " + response.statusCode);
        });

        return defer.promise;
    }
}
module.exports = new apiPage;
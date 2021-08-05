const apiPage = require('../pages/apiPage');
global.mydata = {};

module.exports = function () {

    /************************************************************ This method Post the API ************************************************/
    this.Given(/^I make a post call and verify the response$/, async function () {
        await apiPage.postApiData();
    });

    /************************************************************ This method calls the API ************************************************/
    this.Given(/^I make a Get call and verify the response$/, async function () {
        await apiPage.getApiData();
    });

}; // end of main function
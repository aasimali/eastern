const todomvcPage = require('../pages/todomvcPage');
const { expect, assert } = require('chai');;

module.exports = function () {

    /************************************************************ This method opens the webpage ************************************************/
    this.Given(/^Open "([^"]*)" website$/, async function (url) {
        try {
            await todomvcPage.OpenWebUrl(url);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /************************************************************ This method is for typing *************************************************/
    this.When(/^User type "([^"]*)" in the "([^"]*)" text field$/, async function (text, field) {
        try {
            await todomvcPage.type(text, field);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This method press key *************************************************/
    this.When(/^User Press the keyboard enter$/, async function () {
        try {
            await todomvcPage.keyPress();
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This method clicks on button *******************************************/
    this.When(/^User click on "([^"]*)" button$/, async function (button) {
        try {
            await todomvcPage.clickOnButton(button);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This Method verify the todo list ***************************************/
    this.Then(/^User Verify that "([^"]*)" is added to the todo list$/, async function (todo) {
        try {
            let isVerified = await todomvcPage.verifytodoList(todo);
            expect(isVerified).to.be.true;
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This Method delete an item ***************************************/
    this.When(/^User remove the "([^"]*)" from the todos list$/, async function (item) {
        try {
            await todomvcPage.removeItemFromTodo(item);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This Method verify item is removed or not ***************************************/
    this.Then(/^User verify that "([^"]*)" is removed from todos list$/, async function (todo) {
        try {
            let isVerified = await todomvcPage.verifyRemovedtodo(todo);
            expect(isVerified).to.be.true;
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This Method select item ***************************************/
    this.Then(/^User select "([^"]*)" from todo$/, async function (radio) {
        try {
            await todomvcPage.selectRadio(radio);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This Method verify item ***************************************/
    this.Then(/^User Verify that "([^"]*)" is only visible todo list$/, async function (todo) {
        try {
            let isVerified = await todomvcPage.verifytodoList(todo);
            expect(isVerified).to.be.true;
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

}; // end of main function

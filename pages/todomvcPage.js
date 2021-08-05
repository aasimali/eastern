const locator = require('../locators/locators.json');
const test_data = require('../testData/test_data.json');
const GenericMethod = require('./genericMethods');
const { assert } = require('chai');
const { browser, element } = require('protractor');
const expected = protractor.ExpectedConditions;
const Max_TimeOut = 30000;

let todomvcPage = function () {

    this.OpenWebUrl = async function (url) {
        switch (url) {
            case 'todomvc':
                browser.waitForAngularEnabled(false);
                url = test_data.todomvc;
                break;

            default:
                assert.fail('No case found')
        }
        try {
            await browser.get(url);
        }
        catch (err) {
            assert.fail('Error is: ' + err);
        }
    }

    this.type = async function (text, field) {
        switch (field) {
            case 'todos':
                field = GenericMethod.SetLocator(locator.todosTextField);
                break;

            default:
                assert.fail('No case found for: ' + field)
        }

        try {
            await browser.wait(expected.visibilityOf(field, Max_TimeOut));
            await browser.actions().mouseMove(field).perform();
            await field.sendKeys(text);
        }
        catch (err) {
            assert.fail('Error is: ' + err);
        }
    }

    this.keyPress = async function () {
        let field = GenericMethod.SetLocator(locator.todosTextField);
        try {
            await field.sendKeys(protractor.Key.ENTER);
        }
        catch (err) {
            assert.fail('Error is: ' + err);
        }
    }

    this.verifytodoList = async function (todo) {
        let todoList = element.all(by.css(locator.todoList.locator));
        let count = await todoList.count();

        for (let task = 1; task <= count; task++) {
            let item = locator.todo.locator.replace('{count}', task);
            item = await element(by.xpath(item));
            await browser.wait(expected.visibilityOf(item, Max_TimeOut));
            await browser.actions().mouseMove(item).perform();
            let txt = await item.getText();

            if (txt == todo) {
                var flag = true;
                return flag;
            }

            else if (task == count && flag != true) {
                return false;
            }
        }
    }

    this.removeItemFromTodo = async function (item) {

        /* To delete all the items from todo list*/
        if (item.toLowerCase() == 'all items') {

            let todoList = element.all(by.css(locator.todoList.locator));
            let count = await todoList.count();

            for (let task = 1; task <= count; task++) {
                let todos = locator.todo.locator.replace('{count}', 1);
                let todo = await element(by.xpath(todos));
                await browser.wait(expected.visibilityOf(todo, Max_TimeOut));
                let itemText = await todo.getText();
                await browser.actions().mouseMove(todo).perform();
                item = element(by.xpath(locator.remove.locator.replace('{item}', itemText)));
                await browser.wait(expected.visibilityOf(item, Max_TimeOut));
                await item.click();
            }
        }

        /* To delete a specific item from todo list*/
        else {
            let todo = element(by.xpath(locator.itemName.locator.replace('{item}', item)));
            await browser.wait(expected.visibilityOf(todo, Max_TimeOut));
            await browser.actions().mouseMove(todo).perform();
            item = element(by.xpath(locator.remove.locator.replace('{item}', item)));
            await browser.wait(expected.visibilityOf(item, Max_TimeOut));
            await item.click();
        }
    }

    this.verifyRemovedtodo = async function (todo) {

        /* To check all the items removed from todo list or not*/
        if (todo.toLowerCase() == 'all items') {
            let list = element.all(by.css(locator.list.locator));
            list = await list.count();
            if (list == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        /* To check a specific item removed from todo list or not*/
        else {
            let todoList = element.all(by.css(locator.todoList.locator));
            let count = await todoList.count();
            for (let task = 1; task <= count; task++) {
                let item = locator.todo.locator.replace('{count}', task);
                item = await element(by.xpath(item));
                await browser.wait(expected.visibilityOf(item, Max_TimeOut));
                await browser.actions().mouseMove(item).perform();
                let txt = await item.getText();

                if (txt == todo) {
                    var flag = false;
                    return flag;
                }

                else if (task == count && flag != false) {
                    return true;
                }
            }
        }
    }

    this.clickOnButton = async function (button) {
        switch (button) {
            case 'Clear completed':
                button = GenericMethod.SetLocator(locator.clearCompleted);
                break;

            case 'Completed':
                button = GenericMethod.SetLocator(locator.completed);
                break;

            case 'Active':
                button = GenericMethod.SetLocator(locator.active);
                break;

            default:
                assert.fail('No case found for: ' + button)
        }
        await browser.wait(expected.visibilityOf(button, Max_TimeOut));
        await browser.actions().mouseMove(button).perform();
        await button.click();
    }

    this.selectRadio = async function (radio) {
        radio = element(by.xpath(locator.radioButton.locator.replace('{radio}', radio)))
        await browser.actions().mouseMove(radio).perform();
        await radio.click();
    }

}
module.exports = new todomvcPage;
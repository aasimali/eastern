let GenMethod = function () {

    this.SetLocator = function (LocObject) {
        var type = LocObject.locatorType;
        var locator = LocObject.locator;

        switch (type) {
            case 'id':
                locator = element(by.id(locator));
                break;

            case 'xpath':
                locator = element(by.xpath(locator));
                break;

                case 'css':
                locator = element(by.css(locator));
                break;

                default:
                    console.log("Invalid locator: "+type+" -- "+locator);
                    return;
        }
        return locator;
    }

}

module.exports = new GenMethod;
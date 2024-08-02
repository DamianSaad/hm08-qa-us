const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    beforeEach(async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    });

    it('should open phone number modal', async () => {
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    });

    it('should save the phone number', async () => {
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });

    it('should select Supportive plan', async () => {
        const supportivePlanButton = await $(page.SupportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const selectedPlan = await $(page.SupportivePlanButton);
        await expect(selectedPlan).toHaveTextContaining('Supportive');
    });

    it('should add a credit card and activate the link button', async () => {
        const paymentMethodButton = await $(page.PaymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue('4111111111111111');

        const CardcodeField = await $(page.CardcodeField);
        await CardcodeField.waitForDisplayed();
        await CardcodeField.setValue('12');
        
        const linkButton = await $(page.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
    });

    it('should write a message to the driver', async () => {
        const message = "Get some whiskey";
        const messageField = await $(page.messageToDriver);
        await messageField.waitForDisplayed();
        await messageField.setValue(message);
        await expect(messageField).toHaveValue(message);
});

it('should order a blanket and handkerchiefs', async () => {
    const blanketAndHandkerchiefButton = await $(page.blanketandAndHandkerchiefButton);
    await blanketAndHandkerchiefButton.waitForDisplayed();
    await blanketAndHandkerchiefButton.click();
    const blanketSwitch = await $(page.blanketSwitch);
});

it('should order 2 ice creams', async () => {
    const plusIceCreamButton = await $$(page.plusIceCream);
    await plusIceCreamButton[0].waitForDisplayed();
    await plusIceCreamButton[0].click();
    await plusIceCreamButton[0].click();
    const iceCreamCounter = await $(page.iceCreamCounter);
    await expect(iceCreamCounter).toHaveTextContaining('2');
});

it('should activate the car search modal', async () => {
    const smartButton = await $(page.smartButton);
    await smartButton.waitForDisplayed();
    await smartButton.click();
    const carSearchModal = await $(page.carSearchModal);
    await carSearchModal.waitForDisplayed();
    await expect(carSearchModal).toBeExisting();
});

});


'use strict';

gemini.suite('intensiv', (suite) => {
    suite.setUrl('/create/')
        .setCaptureElements('.b-wrapper')
        .capture('clear')
        .capture('add text', (actions, find) => {
            actions.sendKeys(find('.b-form-field'), 'hello')
        });
});

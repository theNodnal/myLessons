
'use strict';

function first() {

    setTimeout(function () {
        console.log(1);
    }, 1000);

}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`я вчу: ${lang}`);
    callback();
}

function done () {
    console.log('я пройшов цей урок');
}

learnJS('JavaScript', done);
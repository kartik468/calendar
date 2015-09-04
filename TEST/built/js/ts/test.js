/// <reference path="model/Validation.ts" />
/// <reference path="model/LettersOnlyValidator.ts" />
/// <reference path="model/ZipCodeValidator.ts" />
// Some samples to try
var strings = ['Hello', '98052', "123"];
// Validators to use
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});

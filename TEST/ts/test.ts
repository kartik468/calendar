/// <reference path="model/Validation.ts" />
/// <reference path="model/LettersOnlyValidator.ts" />
/// <reference path="model/ZipCodeValidator.ts" />

// Some samples to try

var strings : string[] = ['Hello', '98052', "123"];
// Validators to use
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
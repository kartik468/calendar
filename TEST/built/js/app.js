requirejs.config({
    baseUrl: '',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'library/jquery/jquery-1.10.2',
        underscore: 'library/underscore/underscore',
        backbone: 'library/backbone/backbone',
        validation: 'built/js/model/Validation',
        letter: 'built/js/model/LettersOnlyValidator',
        zipcode: "built/js/model/ZipCodeValidator"
    },
});
require(['jquery', 'underscore', 'backbone', 'validation', 'letter', 'zipcode'], function () {
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
});

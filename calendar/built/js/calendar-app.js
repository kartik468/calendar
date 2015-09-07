/// <reference path="library/jquery/jquery.d.ts"/>
/// <reference path="library/underscore/underscore.d.ts"/>
/// <reference path="library/backbone/backbone.d.ts"/>
/// <reference path="library/backbone.marionette/backbone.marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CalendarApp = (function (_super) {
    __extends(CalendarApp, _super);
    function CalendarApp(options) {
        _super.call(this, options);
    }
    CalendarApp.prototype.initialize = function (options) {
        console.log('My container:', options.container);
    };
    return CalendarApp;
})(Marionette.Application);

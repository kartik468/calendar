/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../calendar-app.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CalendarModel = (function (_super) {
    __extends(CalendarModel, _super);
    function CalendarModel() {
        _super.apply(this, arguments);
    }
    // Default attributes for the calendar.
    CalendarModel.prototype.defaults = function () {
        return {
            calendarData: {},
            currentYear: 0,
            currentMonth: 0,
            currentData: 0
        };
    };
    CalendarModel.prototype.initialize = function () {
        console.log("calendar model initialized");
    };
    return CalendarModel;
})(Backbone.Model);

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
            currentMonthNumber: 0,
            currentDayNumber: 0
        };
    };
    CalendarModel.prototype.initialize = function () {
        console.log("calendar model initialized");
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        this.setCurrentYear(currentYear);
        var currentMonthNumber = currentDate.getMonth();
        this.setCurrentMonthNumber(currentMonthNumber);
        var currentDayNumber = currentDate.getDay();
        this.setCurrentDayNumber(currentDayNumber);
    };
    CalendarModel.prototype.getCurrentDayNumber = function () {
        return this.get("currentDayNumber");
    };
    CalendarModel.prototype.setCurrentDayNumber = function (day) {
        return this.set("currentDayNumber", day);
    };
    CalendarModel.prototype.getCurrentYear = function () {
        return this.get("currentYear");
    };
    CalendarModel.prototype.setCurrentYear = function (year) {
        return this.set("currentYear", year);
    };
    CalendarModel.prototype.getCurrentMonthNumber = function () {
        return this.get("currentMonthNumber");
    };
    CalendarModel.prototype.setCurrentMonthNumber = function (month) {
        return this.set("currentMonthNumber", month);
    };
    return CalendarModel;
})(Backbone.Model);

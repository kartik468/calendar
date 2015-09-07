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
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["MONDAY"] = 0] = "MONDAY";
    WeekDay[WeekDay["TUESDAY"] = 1] = "TUESDAY";
    WeekDay[WeekDay["WEDNESDAY"] = 2] = "WEDNESDAY";
    WeekDay[WeekDay["THURSDAY"] = 3] = "THURSDAY";
    WeekDay[WeekDay["FRIDAY"] = 4] = "FRIDAY";
    WeekDay[WeekDay["SATURDAY"] = 5] = "SATURDAY";
    WeekDay[WeekDay["SUNDAY"] = 6] = "SUNDAY";
})(WeekDay || (WeekDay = {}));
;
var MonthFull;
(function (MonthFull) {
    MonthFull[MonthFull["January"] = 0] = "January";
    MonthFull[MonthFull["February"] = 1] = "February";
    MonthFull[MonthFull["March"] = 2] = "March";
    MonthFull[MonthFull["April"] = 3] = "April";
    MonthFull[MonthFull["May"] = 4] = "May";
    MonthFull[MonthFull["June"] = 5] = "June";
    MonthFull[MonthFull["July"] = 6] = "July";
    MonthFull[MonthFull["August"] = 7] = "August";
    MonthFull[MonthFull["September"] = 8] = "September";
    MonthFull[MonthFull["October"] = 9] = "October";
    MonthFull[MonthFull["November"] = 10] = "November";
    MonthFull[MonthFull["December"] = 11] = "December";
})(MonthFull || (MonthFull = {}));
;
var MonthSmall;
(function (MonthSmall) {
    MonthSmall[MonthSmall["Jan"] = 0] = "Jan";
    MonthSmall[MonthSmall["Feb"] = 1] = "Feb";
    MonthSmall[MonthSmall["Mar"] = 2] = "Mar";
    MonthSmall[MonthSmall["Apr"] = 3] = "Apr";
    MonthSmall[MonthSmall["May"] = 4] = "May";
    MonthSmall[MonthSmall["June"] = 5] = "June";
    MonthSmall[MonthSmall["July"] = 6] = "July";
    MonthSmall[MonthSmall["Aug"] = 7] = "Aug";
    MonthSmall[MonthSmall["Sept"] = 8] = "Sept";
    MonthSmall[MonthSmall["Oct"] = 9] = "Oct";
    MonthSmall[MonthSmall["Nov"] = 10] = "Nov";
    MonthSmall[MonthSmall["Dec"] = 11] = "Dec";
})(MonthSmall || (MonthSmall = {}));
;
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
            currentDayNumber: 0,
            dayModelCollection: null
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
        // create collection of days
        var dayModelCollection = new DayModelCollection([]);
        // create 35 day models i.e 5 weeks
        var dayModel;
        for (var index = 0; index < 35; index++) {
            // console.log(index);
            dayModel = new DayModel({
                notes: []
            });
            dayModelCollection.add(dayModel);
        }
        this.setDayModelCollection(dayModelCollection);
    };
    // getters and setters--------------------------------
    CalendarModel.prototype.getDayModelCollection = function () {
        return this.get("dayModelCollection");
    };
    CalendarModel.prototype.setDayModelCollection = function (collection) {
        return this.set("dayModelCollection", collection);
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
    //------------ACTUAL METHODS-------------------
    CalendarModel.prototype.getCurrentMonthName = function () {
        var currentMonthNumber = this.getCurrentMonthNumber();
        return MonthFull[currentMonthNumber];
    };
    return CalendarModel;
})(Backbone.Model);

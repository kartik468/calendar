/// <reference path="library/jquery/jquery.d.ts"/>
/// <reference path="library/underscore/underscore.d.ts"/>
/// <reference path="library/backbone/backbone.d.ts"/>
/// <reference path="library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="calendar-app.ts"/>
/// <reference path="views/region-container-view.ts"/>
/// <reference path="models/calendar-model.ts"/>
/// <reference path="views/calendar-view.ts"/>
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
var mL;
(function (mL) {
    mL[mL["January"] = 0] = "January";
    mL[mL["February"] = 1] = "February";
    mL[mL["March"] = 2] = "March";
    mL[mL["April"] = 3] = "April";
    mL[mL["May"] = 4] = "May";
    mL[mL["June"] = 5] = "June";
    mL[mL["July"] = 6] = "July";
    mL[mL["August"] = 7] = "August";
    mL[mL["September"] = 8] = "September";
    mL[mL["October"] = 9] = "October";
    mL[mL["November"] = 10] = "November";
    mL[mL["December"] = 11] = "December";
})(mL || (mL = {}));
;
var mS;
(function (mS) {
    mS[mS["Jan"] = 0] = "Jan";
    mS[mS["Feb"] = 1] = "Feb";
    mS[mS["Mar"] = 2] = "Mar";
    mS[mS["Apr"] = 3] = "Apr";
    mS[mS["May"] = 4] = "May";
    mS[mS["June"] = 5] = "June";
    mS[mS["July"] = 6] = "July";
    mS[mS["Aug"] = 7] = "Aug";
    mS[mS["Sept"] = 8] = "Sept";
    mS[mS["Oct"] = 9] = "Oct";
    mS[mS["Nov"] = 10] = "Nov";
    mS[mS["Dec"] = 11] = "Dec";
})(mS || (mS = {}));
;
$(document).ready(function () {
    var marionetteApp = new CalendarApp({
        container: '#app-container'
    });
    marionetteApp.on("start", function () {
        var calendarModel = new CalendarModel();
        var calendarView = new CalendarView({
            model: calendarModel,
            id: 'calendar-container'
        });
        var regionContainer = new RegionContainer({});
        regionContainer.main.show(calendarView);
    });
    marionetteApp.start();
});

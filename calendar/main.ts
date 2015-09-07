/// <reference path="library/jquery/jquery.d.ts"/>
/// <reference path="library/underscore/underscore.d.ts"/>
/// <reference path="library/backbone/backbone.d.ts"/>
/// <reference path="library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="calendar-app.ts"/>
/// <reference path="views/region-container-view.ts"/>
/// <reference path="models/calendar-model.ts"/>
/// <reference path="views/calendar-view.ts"/>

enum WeekDay {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
};
enum mL {
    January, February, March, April, May, June, July, August, September, October, November, December
};
enum mS {
    Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec
};

$(document).ready(function() {
    var marionetteApp = new CalendarApp({
        container: '#app-container'
    });

    marionetteApp.on("start", function() {
        var calendarModel = new CalendarModel();
        var calendarView = new CalendarView({
            model: calendarModel,
            id: 'calendar-container'
        })

        var regionContainer = new RegionContainer({});
        regionContainer.main.show(calendarView)

    });
    marionetteApp.start();
});

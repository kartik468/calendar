/// <reference path="library/jquery/jquery.d.ts"/>
/// <reference path="library/underscore/underscore.d.ts"/>
/// <reference path="library/backbone/backbone.d.ts"/>
/// <reference path="library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="calendar-app.ts"/>
/// <reference path="views/region-container-view.ts"/>
/// <reference path="models/calendar-model.ts"/>
/// <reference path="views/calendar-view.ts"/>



$(document).ready(function() {
    var marionetteApp = new CalendarApp({
        container: '#app-container'
    });

    marionetteApp.on("start", function() {
        var calendarModel: CalendarModel = new CalendarModel();
        var calendarView: CalendarView = new CalendarView({
            model: calendarModel,
            id: 'calendar-container',
            tagName: 'div'
        })

        var regionContainer: RegionContainer = new RegionContainer({});
        regionContainer.main.show(calendarView)        
    });
    marionetteApp.start();
});

/// <reference path="library/jquery/jquery.d.ts"/>
/// <reference path="library/underscore/underscore.d.ts"/>
/// <reference path="library/backbone/backbone.d.ts"/>
/// <reference path="library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="calendar-app.ts"/>
/// <reference path="models/calendar-model.ts"/>
/// <reference path="views/calendar-view.ts"/>



$(document).ready(function(){
    var marionetteApp = new CalendarApp({container: '#app'});

    var calendarModel = new CalendarModel();
    var calendarView = new CalendarView({
        model:calendarModel,
        el:'#app',
        template:'#calendar-template'
    })
    calendarView.render();

    marionetteApp.start();
});
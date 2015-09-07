/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../calendar-app.ts"/>

interface CalendarModelInterface {
    calendarData: Object;
    currentYear: number;
    currentMonth: number;
    currentData: number;
}

class CalendarModel extends Backbone.Model{
	// Default attributes for the calendar.
	defaults(): CalendarModelInterface {
		return {
			calendarData : {},
			currentYear : 0,
			currentMonth : 0,
			currentData : 0
		}
	}

	initialize() {
		console.log("calendar model initialized");
	}
}

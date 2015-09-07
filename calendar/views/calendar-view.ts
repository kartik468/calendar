/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../calendar-app.ts"/>


class CalendarView extends Marionette.ItemView<CalendarModel>{

	model: CalendarModel;

	template: string = '#calendar-template';

	constructor(options) {
		super(options);
	}
}





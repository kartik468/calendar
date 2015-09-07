/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../models/day-model.ts" />
/// <reference path="../calendar-app.ts"/>


class DayView extends Marionette.ItemView<DayModel>{

	model: DayModel;

	constructor(options) {
		super(options);
	}
}





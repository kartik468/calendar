/// <reference path="library/jquery/jquery.d.ts"/>
/// <reference path="library/underscore/underscore.d.ts"/>
/// <reference path="library/backbone/backbone.d.ts"/>
/// <reference path="library/backbone.marionette/backbone.marionette.d.ts" />



class CalendarApp extends Marionette.Application {
    constructor(options?) {
       super(options);
    }
    
    initialize(options) {
        console.log('My container:', options.container);
  	}
}

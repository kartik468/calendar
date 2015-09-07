/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../models/calendar-model.ts" />
/// <reference path="../calendar-app.ts"/>

class RegionContainer extends Marionette.LayoutView < CalendarModel > {
    constructor(options) {
        this.el = "#app-container",
            super(options);
    }

    main: any;

    el: string;
    regions() {
        return {
            main: "#main-region"
        }
    };
}

/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />


interface DayModelInterface {
    notes: Array < string > []
}

class DayModel extends Backbone.Model {
    // Default attributes for the calendar.
    defaults(): DayModelInterface {
        return {
            notes: []
        }
    }

    initialize() {
        // console.log("day initialized");
    }
}

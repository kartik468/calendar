/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../models/day-model.ts" />
/// <reference path="../calendar-app.ts"/>


// var MyCollection = Backbone.Collection.extend({
//     model: MyModel
// });
class DayModelCollection extends Backbone.Collection < DayModel > {
    constructor(options) {
        super(options);
    }
    length: number;
    model = DayModel;
}

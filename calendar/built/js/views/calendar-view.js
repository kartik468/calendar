/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../calendar-app.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CalendarView = (function (_super) {
    __extends(CalendarView, _super);
    function CalendarView(options) {
        _super.call(this, options);
        this.template = '#calendar-template';
    }
    CalendarView.prototype.onRender = function () {
        // manipulate the `el` here. it's already
        // been rendered, and is full of the view's
        // HTML, ready to go.
        var dayModelCollection = new DayModelCollection([]);
        // create collection of days
        // create 35 day models i.e 5 weeks
        var dayModel;
        for (var index = 0; index < 35; index++) {
            console.log(index);
            dayModel = new DayModel({
                notes: []
            });
            dayModelCollection.add(dayModel);
        }
        debugger;
    };
    return CalendarView;
})(Marionette.ItemView);

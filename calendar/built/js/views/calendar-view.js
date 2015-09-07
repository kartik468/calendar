/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../collections/day-model-collection.ts" />
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
        var currentMonthName = this.model.getCurrentMonthName();
        var currentYear = this.model.getCurrentYear();
        this.$("#current-month").html(currentMonthName);
        this.$("#current-year").html(currentYear + "");
        // manipulate the `el` here. it's already
        // been rendered, and is full of the view's
        // HTML, ready to go.
        var dayModelCollection = this.model.getDayModelCollection();
        var currentWeek = 0;
        var dayView;
        var dayViews = [];
        for (var index = 0; index < dayModelCollection.length;) {
            console.log("--------");
            console.log("week no: " + currentWeek);
            console.log("index: " + index);
            var model = dayModelCollection.at(index);
            dayView = new DayView({
                model: model,
                id: "week-" + currentWeek + "-day-" + index,
                tagName: "td",
                template: ""
            }).render();
            this.$("#week-" + currentWeek).append(dayView.$el);
            index++;
            if (index % 7 === 0) {
                currentWeek++;
                console.log("------------------------------------------");
            }
        }
    };
    return CalendarView;
})(Marionette.ItemView);

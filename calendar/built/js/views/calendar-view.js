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
    CalendarView.prototype.events = function () {
        return {
            "click #next-button": "onNextButtonClick",
            "click #back-button": "onBackButtonClick"
        };
    };
    CalendarView.prototype.onBeforeRender = function () {
        this.listenTo(this.model, "change:currentDay", this.onCurrentDayChange);
    };
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
            // console.log("--------");
            // console.log("week no: " + currentWeek);
            // console.log("index: " + index);
            var model = dayModelCollection.at(index);
            dayView = new DayView({
                model: model,
                id: "week-" + currentWeek + "-day-" + index,
                tagName: "td"
            }).render();
            this.$("#week-" + currentWeek).append(dayView.$el);
            var dayId = dayView.model.getActualDay();
            dayView.$("div").html(dayId + "");
            index++;
            if (index % 7 === 0) {
                currentWeek++;
            }
        }
        this.refreshView();
    };
    CalendarView.prototype.refreshView = function () {
        var currentDay = this.model.getCurrentDay();
        var currentDayNumber = currentDay.getDay();
        var noOfDays = this.model.getNoOfDays();
        var dayModelCollection = this.model.getDayModelCollection();
        var tempDayModel;
        var actualDay = 1;
        console.log("no of days in month : " + noOfDays);
        for (var index = currentDayNumber; index < currentDayNumber + noOfDays; index++) {
            console.log(index);
            tempDayModel = dayModelCollection.at(index);
            tempDayModel.setActualDay(actualDay);
            actualDay++;
        }
    };
    CalendarView.prototype.onCurrentDayChange = function (model, currentDay) {
        this.refreshView();
    };
    CalendarView.prototype.onNextButtonClick = function () {
        console.log("next button clicked ...");
        debugger;
    };
    CalendarView.prototype.onBackButtonClick = function () {
        console.log("back button clicked ...");
        debugger;
    };
    return CalendarView;
})(Marionette.ItemView);

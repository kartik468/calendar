/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../collections/day-model-collection.ts" />
/// <reference path="../views/day-view.ts" />
/// <reference path="../calendar-app.ts"/>


class CalendarView extends Marionette.ItemView < CalendarModel > {

    model: CalendarModel;

    template: string = '#calendar-template';

    constructor(options) {
        super(options);
    }

    events() {
        return {
            "click #next-button": "onNextButtonClick",
            "click #back-button": "onBackButtonClick"
        }
    }

    onBeforeRender() {
        this.listenTo(this.model, "change:currentDay", this.onCurrentDayChange);
    }

    onRender() {

        var currentMonthName: string = this.model.getCurrentMonthName();
        var currentYear: number = this.model.getCurrentYear();
        this.$("#current-month").html(currentMonthName);
        this.$("#current-year").html(currentYear + "");

        // manipulate the `el` here. it's already
        // been rendered, and is full of the view's
        // HTML, ready to go.

        var dayModelCollection: any = this.model.getDayModelCollection();
        var currentWeek = 0;
        var dayView: DayView;
        var dayViews: any = [];
        for (var index: number = 0; index < dayModelCollection.length;) {
            // console.log("--------");
            // console.log("week no: " + currentWeek);
            // console.log("index: " + index);
            var model: DayModel = dayModelCollection.at(index);
            dayView = new DayView({
                model: model,
                id: "week-" + currentWeek + "-day-" + index,
                tagName: "td"
            }).render();

            this.$("#week-" + currentWeek).append(dayView.$el);
            var dayId: number = dayView.model.getActualDay();
            dayView.$("div").html(dayId + "");

            index++;
            if (index % 7 === 0) {
                currentWeek++;
                // console.log("------------------------------------------");
            }
        }
        this.refreshView();
    }

    refreshView() {

        var currentMonthName: string = this.model.getCurrentMonthName();
        var currentYear: number = this.model.getCurrentYear();
        this.$("#current-month").html(currentMonthName);
        this.$("#current-year").html(currentYear + "");


        var currentDay: Date = this.model.getCurrentDay();
        var firstDayNumber: number = new Date(currentDay.getFullYear(), currentDay.getMonth()).getDay();
        var noOfDays: number = this.model.getNoOfDays();
        var dayModelCollection: DayModelCollection = this.model.getDayModelCollection();
        var tempDayModel: DayModel;
        console.log("no of days in month : " + noOfDays);

        //
        for (var index: number = 0; index < 42; index++) {
            tempDayModel = dayModelCollection.at(index);
            tempDayModel.setActualDay(0);
        }
        var previousMonthDays = this.model.getPreviousMonthDays();
        var actualDay: number = 1;
        var tempDayCount: number = 1;
        var previousMonthStartCount = previousMonthDays - firstDayNumber + 1;
        for (var index: number = 0; index < 42; index++) {
            if (index < firstDayNumber) {
                console.log(index);
                tempDayModel = dayModelCollection.at(index);
                tempDayModel.setActualDay(previousMonthStartCount);
                previousMonthStartCount++;
                continue;
            }
            if (index >= firstDayNumber + noOfDays) {
                console.log(index);
                tempDayModel = dayModelCollection.at(index);
                tempDayModel.setActualDay(tempDayCount);
                tempDayCount++;
                continue;
            }
            tempDayModel = dayModelCollection.at(index);
            tempDayModel.setActualDay(actualDay);
            actualDay++;
        }
    }

    onCurrentDayChange(model, currentDay) {
        this.refreshView();
    }

    onNextButtonClick() {
        console.log("next button clicked ...");
        this.model.addMonths(1);
        this.model.onCurrentDayChange();
        this.refreshView();
    }

    onBackButtonClick() {
        console.log("back button clicked ...");
        this.model.addMonths(-1);
        this.model.onCurrentDayChange();
        this.refreshView();
    }
}

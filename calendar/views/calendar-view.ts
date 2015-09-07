/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../collections/day-model-collection.ts" />
/// <reference path="../calendar-app.ts"/>


class CalendarView extends Marionette.ItemView < CalendarModel > {

    model: CalendarModel;

    template: string = '#calendar-template';

    constructor(options) {
        super(options);
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
            console.log("--------");
            console.log("week no: " + currentWeek);
            console.log("index: " + index);
            var model: DayModel = dayModelCollection.at(index);
            dayView = new DayView({
                model: model,
                id : "week-"+currentWeek+"-day-"+index,
                tagName : "td",
                template : ""                
            }).render();
            
            this.$("#week-" + currentWeek).append(dayView.$el);

            index++;
            if (index % 7 === 0) {
                currentWeek++;
                console.log("------------------------------------------");
            }
        }
    }
}

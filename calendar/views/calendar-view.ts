/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
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
        var dayModelCollection: DayModelCollection = new DayModelCollection([]);
        // create collection of days

        // create 35 day models i.e 5 weeks
        var dayModel: DayModel;
        for (var index: number = 0; index < 35; index++) {
            console.log(index);
            dayModel = new DayModel({
                notes: []
            });
            dayModelCollection.add(dayModel);
        }
        debugger
    }
}

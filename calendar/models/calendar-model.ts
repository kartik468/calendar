/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../calendar-app.ts"/>

interface CalendarModelInterface {
    calendarData: Object;
    currentYear: number;
    currentMonthNumber: number;
    currentDayNumber: number;
}

class CalendarModel extends Backbone.Model {
    // Default attributes for the calendar.
    defaults(): CalendarModelInterface {
        return {
            calendarData: {},
            currentYear: 0,
            currentMonthNumber: 0,
            currentDayNumber: 0
        }
    }


    initialize() {
        console.log("calendar model initialized");
        var currentDate: Date = new Date();
        var currentYear: number = currentDate.getFullYear();
        this.setCurrentYear(currentYear);

        var currentMonthNumber: number = currentDate.getMonth();
        this.setCurrentMonthNumber(currentMonthNumber);

        var currentDayNumber: number = currentDate.getDay();
        this.setCurrentDayNumber(currentDayNumber);
    }

    getCurrentDayNumber(): number {
        return this.get("currentDayNumber");
    }

    setCurrentDayNumber(day: number) {
        return this.set("currentDayNumber", day);
    }

    getCurrentYear(): number {
        return this.get("currentYear");
    }

    setCurrentYear(year: number) {
        return this.set("currentYear", year);
    }

    getCurrentMonthNumber(): number {
        return this.get("currentMonthNumber");
    }

    setCurrentMonthNumber(month: number) {
        return this.set("currentMonthNumber", month);
    }

}

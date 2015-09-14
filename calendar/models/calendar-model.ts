/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../calendar-app.ts"/>

enum WeekDay {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
};
enum MonthFull {
    January, February, March, April, May, June, July, August, September, October, November, December
};
enum MonthSmall {
    Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec
};

interface CalendarModelInterface {
    calendarData: Object;
    currentYear: number;
    currentMonthNumber: number;
    currentDayNumber: number;
    dayModelCollection: any;
    currentDay: Date;
}

class CalendarModel extends Backbone.Model {
    // Default attributes for the calendar.
    defaults(): CalendarModelInterface {
        return {
            calendarData: {},
            currentYear: 0,
            currentMonthNumber: 0,
            currentDayNumber: 0,
            dayModelCollection: null,
            currentDay: null
        }
    }


    initialize() {
        console.log("calendar model initialized");
        var currentDate: Date = new Date();
        this.setCurrentDay(currentDate);

        var currentYear: number = currentDate.getFullYear();
        this.setCurrentYear(currentYear);

        var currentMonthNumber: number = currentDate.getMonth();
        this.setCurrentMonthNumber(currentMonthNumber);

        var currentDayNumber: number = currentDate.getDay();
        this.setCurrentDayNumber(currentDayNumber);

        // create collection of days
        var dayModelCollection: DayModelCollection = new DayModelCollection([]);

        // create 42 day models i.e 5 weeks
        var dayModel: DayModel;
        for (var index: number = 0; index < 42; index++) {
            // console.log(index);
            dayModel = new DayModel({
                notes: [],
                dayId: index
            });
            dayModelCollection.add(dayModel);
        }

        this.setDayModelCollection(dayModelCollection);
        this.listenTo(this, "change:currentDay", this.onCurrentDayChange);
    }

    onCurrentDayChange() {
        var currentDate: Date = this.getCurrentDay();

        var currentYear: number = currentDate.getFullYear();
        this.setCurrentYear(currentYear);

        var currentMonthNumber: number = currentDate.getMonth();
        this.setCurrentMonthNumber(currentMonthNumber);
    }


    // getters and setters--------------------------------

    getCalendarData(): Object {
        return this.get("calendarData");
    }

    setCalendarData(data: Object) {
        return this.set("calendarData", data);
    }

    getDayModelCollection(): DayModelCollection {
        return this.get("dayModelCollection");
    }

    setDayModelCollection(collection: Object) {
        return this.set("dayModelCollection", collection);
    }

    getCurrentDayNumber(): number {
        return this.get("currentDayNumber");
    }

    setCurrentDayNumber(day: number) {
        return this.set("currentDayNumber", day);
    }


    getCurrentDay(): Date {
        return this.get("currentDay");
    }

    setCurrentDay(day: Date) {
        return this.set("currentDay", day);
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

    //------------ACTUAL METHODS-------------------
    getCurrentMonthName(): string {
        var currentMonthNumber: number = this.getCurrentMonthNumber();
        return MonthFull[currentMonthNumber];
    }

    //Month is 1 based
    daysInMonth(month: number, year: number) {
        return new Date(year, month, 0).getDate();
    }

    getNoOfDays(): number {
        return this.daysInMonth(this.getCurrentMonthNumber() + 1, this.getCurrentYear());
    }



    // isLeapYear (year) {
    //     return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
    // };

    // getDaysInMonth (year, month) {
    //     var dayObject = this.getCurrentDay();
    //     return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    // };

    // isLeapYear () {
    //     var dayObject = this.getCurrentDay();
    //     return this.isLeapYear(dayObject.getFullYear());
    // };

    // getDaysInMonth () {
    //     var dayObject = this.getCurrentDay();
    //     return this.getDaysInMonth(dayObject.getFullYear(), dayObject.getMonth());
    // };

    addMonths(value) {
        var dayObject = this.getCurrentDay();
        var n = dayObject.getDate();
        dayObject.setDate(1);
        dayObject.setMonth(dayObject.getMonth() + value);
        dayObject.setDate(Math.min(n, this.daysInMonth(dayObject.getMonth(), dayObject.getFullYear())));
        return this;
    };

    getPreviousMonthDays() {
        var dayObject: Date = this.getCurrentDay();
        var tempDayObject: Date = new Date(dayObject.getFullYear(), dayObject.getMonth(), 1);
        var n = tempDayObject.getDate();
        tempDayObject.setDate(1);
        tempDayObject.setMonth(tempDayObject.getMonth() - 1);
        tempDayObject.setDate(Math.min(n, this.daysInMonth(tempDayObject.getMonth() + 1, tempDayObject.getFullYear())));
        var noOfDays = this.daysInMonth(tempDayObject.getMonth() + 1, tempDayObject.getFullYear());
        return noOfDays;
    }

}

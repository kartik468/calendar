/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />


interface DayModelInterface {
    notes: Array < string > [],
        dayId: number,
        actualDay: number
}

class DayModel extends Backbone.Model {
    // Default attributes for the calendar.
    defaults(): DayModelInterface {
        return {
            notes: [],
            dayId: 0,
            actualDay: 0
        }
    }

    getActualDay():number{
        return this.get("actualDay");
    }

    setActualDay(day:number){
        return this.set("actualDay", day);
    }

    getNotes(): string[] {
        return this.get("notes");
    }
    setNotes(notes: string[]) {
        return this.set("notes", notes);
    }

    getDayId(): number {
        return this.get("dayId");
    }
    setDayId(id: number) {
        return this.set("dayId", id);
    }

    initialize() {
        // console.log("day initialized");
    }
}

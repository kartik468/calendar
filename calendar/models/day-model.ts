/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />


interface DayModelInterface {
    notes: Array < string > [],
        dayId: number,
        actualDay: number,
        state: string,
        selected: boolean
}

class DayModel extends Backbone.Model {
    // Default attributes for the calendar.
    defaults(): DayModelInterface {
        return {
            notes: [],
            dayId: 0,
            actualDay: 0,
            state: "active",
            selected: false
        }
    }

    getSelected(): boolean {
        return this.get("selected");
    }

    setSelected(selected: boolean) {
        return this.set("selected", selected);
    }

    getState(): string {
        return this.get("state");
    }

    setState(state: string) {
        return this.set("state", state);
    }

    getActualDay(): number {
        return this.get("actualDay");
    }

    setActualDay(day: number) {
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

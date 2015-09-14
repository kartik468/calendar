/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../models/day-model.ts" />
/// <reference path="../calendar-app.ts"/>


class DayNotesView extends Marionette.ItemView < DayModel > {

    model: DayModel;

    template: string = '#day-note-template';

    constructor(options) {
        super(options);
    }

    events() {
        return {

        }
    }


    onBeforeRender() {
        // this.listenTo(this.model, "change:actualDay", this.updateCurrentDay);
        // this.listenTo(this.model, "change:state", this.onStateChange);
        // this.listenTo(this.model, "change:selected", this.onSelectionChange);
    }

    onRender() {
        var self = this;
        this.$('#enter-note').keyup(function(e) {
            if (e.keyCode == 13) {
                var notes = self.model.getNotes();
                notes.push(this.value);
                self.trigger("dataChange", self);
                this.value = "";
                self.refreshView();
            }
        });
    }

    initializeView() {        
        this.refreshView();
    }

    refreshView() {
        var notes: Array < string > = this.model.getNotes();
        var $container = this.$("#note-list-container");
        $container.empty();
        notes.forEach(function(note) {
            $container.append("<div class='single-note'>" + note + "</div>");
        });
    }


}

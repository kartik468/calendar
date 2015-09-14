/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../models/day-model.ts" />
/// <reference path="../calendar-app.ts"/>


class DayView extends Marionette.ItemView < DayModel > {

    model: DayModel;

    template: string = '#day-template';

    constructor(options) {
        super(options);
    }

    events() {
        return {
            "click": "onViewClick"
        }
    }
    onViewClick() {
        var state: string = this.model.getState();
        if (state === "active") {
            this.model.setSelected(true);
        }
    }

    onBeforeRender() {
        this.listenTo(this.model, "change:actualDay", this.updateCurrentDay);
        this.listenTo(this.model, "change:state", this.onStateChange);
        this.listenTo(this.model, "change:selected", this.onSelectionChange);
    }

    onSelectionChange(model, selected) {
        if (selected === true) {
            this.$el.addClass("selected");
        } else {
            this.$el.removeClass("selected");
        }

    }

    onStateChange(model, state) {
        if (state === "active") {
            this.$el.removeClass("disabled").addClass("active");
        } else {
            this.$el.removeClass("active").addClass("disabled");
        }
    }

    onRender() {
        // console.log("day render: " + this.model.getDayId());
        var state: string = this.model.getState();
        if (state === "active") {
            this.$el.removeClass("disabled").addClass("active");
        } else {
            this.$el.removeClass("active").addClass("disabled");
        }
    }

    updateCurrentDay(model, actualDay) {
        this.$(".day-number-text").html("" + actualDay);
    }
}

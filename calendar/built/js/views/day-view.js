/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../models/day-model.ts" />
/// <reference path="../calendar-app.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DayView = (function (_super) {
    __extends(DayView, _super);
    function DayView(options) {
        _super.call(this, options);
        this.template = '#day-template';
    }
    DayView.prototype.events = function () {
        return {
            "click": "onViewClick"
        };
    };
    DayView.prototype.onViewClick = function () {
        var state = this.model.getState();
        if (state === "active") {
            this.model.setSelected(true);
        }
    };
    DayView.prototype.onBeforeRender = function () {
        this.listenTo(this.model, "change:actualDay", this.updateCurrentDay);
        this.listenTo(this.model, "change:state", this.onStateChange);
        this.listenTo(this.model, "change:selected", this.onSelectionChange);
    };
    DayView.prototype.onSelectionChange = function (model, selected) {
        if (selected === true) {
            this.$el.addClass("selected");
        }
        else {
            this.$el.removeClass("selected");
        }
    };
    DayView.prototype.onStateChange = function (model, state) {
        if (state === "active") {
            this.$el.removeClass("disabled").addClass("active");
        }
        else {
            this.$el.removeClass("active").addClass("disabled");
        }
    };
    DayView.prototype.onRender = function () {
        // console.log("day render: " + this.model.getDayId());
        var state = this.model.getState();
        if (state === "active") {
            this.$el.removeClass("disabled").addClass("active");
        }
        else {
            this.$el.removeClass("active").addClass("disabled");
        }
    };
    DayView.prototype.updateCurrentDay = function (model, actualDay) {
        this.$(".day-number-text").html("" + actualDay);
    };
    return DayView;
})(Marionette.ItemView);

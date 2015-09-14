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
var DayNotesView = (function (_super) {
    __extends(DayNotesView, _super);
    function DayNotesView(options) {
        _super.call(this, options);
        this.template = '#day-note-template';
    }
    DayNotesView.prototype.events = function () {
        return {};
    };
    DayNotesView.prototype.onBeforeRender = function () {
        // this.listenTo(this.model, "change:actualDay", this.updateCurrentDay);
        // this.listenTo(this.model, "change:state", this.onStateChange);
        // this.listenTo(this.model, "change:selected", this.onSelectionChange);
    };
    DayNotesView.prototype.onRender = function () {
        var self = this;
        this.$('#enter-note').keyup(function (e) {
            if (e.keyCode == 13) {
                var notes = self.model.getNotes();
                notes.push(this.value);
                self.trigger("dataChange", self);
                this.value = "";
                self.refreshView();
            }
        });
    };
    DayNotesView.prototype.initializeView = function () {
        this.refreshView();
    };
    DayNotesView.prototype.refreshView = function () {
        var notes = this.model.getNotes();
        var $container = this.$("#note-list-container");
        $container.empty();
        notes.forEach(function (note) {
            $container.append("<div class='single-note'>" + note + "</div>");
        });
    };
    return DayNotesView;
})(Marionette.ItemView);

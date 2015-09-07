/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DayModel = (function (_super) {
    __extends(DayModel, _super);
    function DayModel() {
        _super.apply(this, arguments);
    }
    // Default attributes for the calendar.
    DayModel.prototype.defaults = function () {
        return {
            notes: []
        };
    };
    DayModel.prototype.initialize = function () {
        // console.log("day initialized");
    };
    return DayModel;
})(Backbone.Model);

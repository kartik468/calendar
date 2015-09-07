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
    DayView.prototype.onRender = function () {
        // console.log("day render: " + this.model.getDayId());
    };
    return DayView;
})(Marionette.ItemView);

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
// var MyCollection = Backbone.Collection.extend({
//     model: MyModel
// });
var DayModelCollection = (function (_super) {
    __extends(DayModelCollection, _super);
    function DayModelCollection(options) {
        _super.call(this, options);
        this.model = DayModel;
    }
    DayModelCollection.prototype.initialize = function () {
        this.on("change:selected", this.onSelectionChange);
    };
    DayModelCollection.prototype.onSelectionChange = function (model) {
        if (model.getSelected() === false) {
            return;
        }
        var selectedDays = this.where({
            "selected": true
        });
        selectedDays.forEach(function (day) {
            if (day === model) {
                return;
            }
            day.setSelected(false);
        });
    };
    return DayModelCollection;
})(Backbone.Collection);

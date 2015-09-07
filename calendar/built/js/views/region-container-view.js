/// <reference path="../library/jquery/jquery.d.ts"/>
/// <reference path="../library/underscore/underscore.d.ts"/>
/// <reference path="../library/backbone/backbone.d.ts"/>
/// <reference path="../library/backbone.marionette/backbone.marionette.d.ts" />
/// <reference path="../models/calendar-model.ts" />
/// <reference path="../calendar-app.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RegionContainer = (function (_super) {
    __extends(RegionContainer, _super);
    function RegionContainer(options) {
        this.el = "#app-container",
            _super.call(this, options);
    }
    RegionContainer.prototype.regions = function () {
        return {
            main: "#main-region"
        };
    };
    ;
    return RegionContainer;
})(Marionette.LayoutView);

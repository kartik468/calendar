// Require JS all the things
/// <reference path="library/require/require.d.ts" />
/// <reference path="library/backbone.marionette/backbone.marionette.d.ts" />

require.config({
    //basePath: '',
    paths : {
        backbone : '../../library/backbone/backbone',
        underscore : '../../library/underscore/underscore',
        jquery : '../../library/jquery/jquery-1.10.2',
        marionette : '../../library/backbone.marionette/backbone.marionette',        
    },
    shim : {
        jquery : {
          exports : 'jQuery'
        },
        underscore : {
          exports : '_'
        },
        backbone : {
          deps : ['jquery', 'underscore'],
          exports : 'Backbone'
        },
        marionette : {
          deps : ['jquery', 'underscore', 'backbone'],
          exports : 'Marionette'
        }
    }
});

// initalise the app
// load AMD module app.ts (compiled to app.js) , tsc --module AMD main.ts
// and include shims $, _, Backbone

require(['backbone', 'jquery','underscore','marionette'], (Backbone, $, _,Marionette ) => {

  // debug.log('starting app');


  // App.on('initialize:after', function(options) {
  //       if (Backbone.history) {
  //           Backbone.history.start();
  //       }

  // });

  // var router = new CustomRouter({
  //     controller : new AppController()
  // });


  // App.start();
  debugger
});
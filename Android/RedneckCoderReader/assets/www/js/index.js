var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('backbutton', this.onBackButton, false);
        document.addEventListener('backhistory', this.onBackButton, false); // need for ripple debugging
        document.addEventListener('menubutton', this.onMenuButton, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // backButton Event Handler
    onBackButton: function() {
    	app.receivedEvent('backbutton');
    },
    // backHistory Event Handler
    onBackHistory: app.receivedEvent('backhistory'),
    // Log on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
